// the list if the stations
const stations = [
  { name: "Jungfernheide", x1: 112, y1: 34, x2: 147, y2: 64},
  { name: "Beusselstrasse", x1: 321, y1:1, x2: 352, y2: 28},
  { name: "Westhafen", x1: 468, y1:1, x2: 504, y2: 30},
  { name: "Westend", x1: 3, y1: 231, x2: 34, y2: 256}
];

//creating a random station
let randomNumber = Math.floor(Math.random()  * stations.length);
let randomStation = stations[randomNumber].name;
document.querySelector("#randomStation span").innerHTML = randomStation;

