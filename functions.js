//creating a random station
function getRandomStation() {
  let randomNumber =  Math.floor(Math.random()  * stations.length)
  let randomStation = stations[randomNumber];
  return randomStation
  }
  
  
  function setRandomStation (station){
  document.querySelector("#randomStation span").innerHTML = station.name;
  }
  
  let randomStation = getRandomStation()
  setRandomStation(randomStation);
  
  function createMessage() {
    let message = document.querySelector(".img-container div");
    message.className = "message-box";
    let text = document.createElement("p");
    message.appendChild(text);
  }

  // function showScore() {
  //   document.querySelector("h1 span").innerHTML = score;
  // }