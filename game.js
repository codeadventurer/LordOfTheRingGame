var round = 1;
var score = 0;

stations.forEach(function(station) {
  let child = document.createElement("area");

  // creating <area id = "Beusselstrasse" coords="321,1,352,28" shape="rect">

  child.setAttribute("id", station.name);

  let cor = station.coords.toString();
  child.setAttribute("coords", cor);
  child.setAttribute("shape", "rect");

  let parent = document.querySelector("map");
  parent.appendChild(child);

  //making areas clickable

  child.addEventListener("click", function() {
    createMessage();
    
    var highlighted = document.querySelector(".target");
    var highlightedRight = document.querySelector(".target2");
    var highlightedWrong = document.querySelector(".target");

    if (station.name === randomStation.name) {
      document.querySelector(".message-box p ").innerHTML =
        "You got 100 points! You are the Lord of the (Berlin) ring!";
      score = score + 100;
      
      //Highlighting with CSS

      highlighted.className = "target highlight";
      highlighted.style.top = `${station.coords[1]}px`;
      highlighted.style.left = `${station.coords[2]}px`;

    } else {
      highlightedRight.className = "target2 highlight-right";
      highlightedRight.style.top = `${randomStation.coords[1]}px`;
      highlightedRight.style.left = `${randomStation.coords[2]}px`;

      highlightedWrong.className = "target highlight-wrong";
      highlightedWrong.style.top = `${station.coords[1]}px`;
      highlightedWrong.style.left = `${station.coords[2] + 30}px`;


      //Calculating a score

      let differenceArray = station.coords.map(function(item, index) {
        return Math.abs(item - randomStation.coords[index]);
      });
      let difference = differenceArray.reduce(function(acc, val) {
        return acc + val;
      }, 0);

      if (difference <= 500) {
        document.querySelector(".message-box p ").innerHTML =
          "Almost there! You got 90 points!";
        score = score + 90;
      } else if (difference <= 1000) {
        document.querySelector(".message-box p ").innerHTML =
          "Pretty close! You got 80 points!";
        score = score + 80;
      } else if (difference <= 1500) {
        document.querySelector(".message-box p ").innerHTML =
          "Not bad! You got 60 points!";
        score = score + 60;
      } else if (difference <= 2000) {
        document.querySelector(".message-box p ").innerHTML =
          "Not bad! You got 50 points!";
        score = score + 50;
      } else if (difference <= 2500) {
        document.querySelector(".message-box p ").innerHTML =
          "Could be closer! You got 40 points!";
        score = score + 40;
      } else if (difference <= 3000) {
        document.querySelector(".message-box p ").innerHTML =
          "Not really, but you still got 20 points!";
        score = score + 20;
      } else if (difference > 3000) {
        document.querySelector(".message-box p ").innerHTML =
          "Very far! You got 0 points!";
      }
    }

    //Starting a new round

      if (round <10) {
    round++;

    setTimeout(function() {
      newRandom();
    }, 3000);
    setTimeout(function() {
      BackToNormal();
    }, 3000);

    function newRandom() {
      randomStation = getRandomStation();
      setRandomStation(randomStation);

      
      document.querySelector("#round span").innerHTML = round;
      document.querySelector("#score").innerHTML = score;
    }
    }
    else {
    setTimeout(function() {
      alert("Game Over! Your score is " + score + "/1000 points!");
    }, 3000);
  }

    function BackToNormal() {
      document.querySelector(".message-box p ").innerHTML = "";
      let message = document.querySelector(".img-container div");
      message.className = "";

      console.log(highlighted);
    
        highlighted.className = "target";
        highlightedRight.className = "target2";
        highlightedWrong.className = "target";
      
    }
  });
});

