// the list if the stations
const stations = [
  { name: "Westend", coords: [3,231,34,256]},
  { name: "Jungfernheide", coords: [112,34,147,64]},
  { name: "Beusselstraße", coords: [321,1,352,28]},
  { name: "Westhafen", coords: [468,1,504,30]},
  { name: "Wedding", coords: [618,0,657,30]},
  { name: "Gesundbrunnen", coords: [872,1,903,27]},
  { name: "Schönhauser Allee", coords: [1095,3,1129,25]},
  { name: "Prenzlauer Allee", coords: [1347,3,1378,27]},
  { name: "Greiswalder Straße", coords: [1492,72,1459,48]},
  { name: "Landsberger Allee", coords: [1601,245,1568,218]},
  { name: "Storkower Straße", coords: [1568,330,1601,354]},
  { name: "Frankfurter Allee", coords: [1567,423,1601,447]},
  { name: "Ostkreuz", coords: [1567,517,1598,545]},
  { name: "Treptower Park", coords: [1569,653,1601,680]},
  { name: "Sonnenallee", coords: [1472,796,1503,824]},
  { name: "Neukölln", coords: [1342,864,1376,892]},
  { name: "Hermannstraße", coords: [1203,865,1240,892]},
  { name: "Tempelhof", coords: [927,862,960,892]},
  { name: "Südkreuz", coords: [753,864,787,892]},
  { name: "Schöneberg", coords: [573,865,607,892]},
  { name: "Innsbrucker Platz", coords: [498,864,532,892]},
  { name: "Bundesplatz", coords: [331,861,365,892]},
  { name: "Heidelberger Platz", coords: [144,865,174,891]},
  { name: "Hohenzollerndamm", coords: [33,755,65,780]},
  { name: "Halensee", coords: [1,568,34,595]},
  { name: "Westkreuz", coords: [3,487,34,515]},
  { name: "Messe Nord / ICC", coords: [3,370,35,396]},
];

//creating a random station
function getRandomStation() {
let randomNumber =  Math.floor(Math.random()  * stations.length)
let randomStation = stations[randomNumber];
return randomStation
}

let randomStation = getRandomStation()
function setRandomStation (station){
document.querySelector("#randomStation span").innerHTML = station.name;
}

setRandomStation(randomStation);

