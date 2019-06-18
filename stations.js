// the list if the stations
const stations = [
  { name: "Jungfernheide", coords: [112,34,147,64]},
  { name: "Beusselstrasse", coords: [321,1,352,28]},
  { name: "Westhafen", coords: [468,1,504,30]},
  { name: "Westend", coords: [3,231,34,256]}
];

//creating a random station
let randomNumber = Math.floor(Math.random()  * stations.length);
let randomStation = stations[randomNumber];

document.querySelector("#randomStation span").innerHTML = randomStation.name;


