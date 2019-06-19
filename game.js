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
    function createMessage() {
      let message = document.querySelector(".img-container div");
      message.className = "message-box";
      let text = document.createElement("p");
      message.appendChild(text);
    }

    createMessage();

    if (station.name === randomStation.name) {
      document.querySelector(".message-box p ").innerHTML =
        "You got 100 points! You are the Lord of the (Berlin) ring!";

      //Highlighting with CSS

      var highlighted = document.querySelector(".target");
      highlighted.className = "target highlight";
      highlighted.style.top = `${station.coords[1]}px`;
      highlighted.style.left = `${station.coords[2] + 30}px`;
    } else {
      var highlightedRight = document.querySelector(".target2");
      highlightedRight.className = "target2 highlight-right";
      highlightedRight.style.top = `${randomStation.coords[1]}px`;
      highlightedRight.style.left = `${randomStation.coords[2]}px`;

      var highlightedWrong = document.querySelector(".target");
      highlightedWrong.className = "target highlight-wrong";
      highlightedWrong.style.top = `${station.coords[1]}px`;
      highlightedWrong.style.left = `${station.coords[2] + 30}px`;

      let differenceArray = station.coords.map(function(item, index) {
        return Math.abs(item - randomStation.coords[index]);
      });
      let difference = differenceArray.reduce(function(acc, val) {
        return acc + val;
      }, 0);

      if (difference <= 500) {
        document.querySelector(".message-box p ").innerHTML =
          "Almost there! You got 90 points!";
      } else if (difference <= 1000) {
        document.querySelector(".message-box p ").innerHTML =
          "Pretty close! You got 80 points!";
      } else if (difference <= 1500) {
        document.querySelector(".message-box p ").innerHTML =
          "Not bad! You got 60 points!";
      } else if (difference <= 2000) {
        document.querySelector(".message-box p ").innerHTML =
          "Not bad! You got 50 points!";
      } else if (difference <= 2500) {
        document.querySelector(".message-box p ").innerHTML =
          "Could be closer! You got 40 points!";
      } else if (difference <= 3000) {
        document.querySelector(".message-box p ").innerHTML =
          "Not really, but you still got 20 points!";
      } else if (difference > 3000) {
        document.querySelector(".message-box p ").innerHTML =
          "Very far! You got 0 points!";
      }
    }

    randomStation = getRandomStation();
    setRandomStation(randomStation);
  });
});
