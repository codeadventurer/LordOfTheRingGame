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
    //let chosenStation = child;
    // console.log(chosenStation)

    if (station.name === randomStation.name) {
      // document.querySelector("#randomStation span").innerHTML  = "hallo"
      document.querySelector(".message-box p ").innerHTML =
        "You got 100 points! You are the Lord of the (Berlin) ring!";
    } else {
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
        document.querySelector(".message-box p ").innerHTML = "Pretty close! You got 80 points!";
      } else if (difference <= 1500) {
        document.querySelector(".message-box p ").innerHTML = "Not bad! You got 60 points!";
      } else if (difference <= 2000) {
        document.querySelector(".message-box p ").innerHTML = "Not bad! You got 50 points!";
      } else if (difference <= 2500) {
        document.querySelector(".message-box p ").innerHTML = "Could be closer! You got 40 points!";
      } else if (difference <= 3000) {
        document.querySelector(".message-box p ").innerHTML = "Not really, but you still got 20 points!";
      } else if (difference > 3000) {
        document.querySelector(".message-box p ").innerHTML ="Very far! You got 0 points!";
      }
    }
    randomStation = getRandomStation()
    setRandomStation(randomStation);
  });
});
