
stations.forEach(function(station){
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
   console.log("You got 100 points!");
}

else {
  let differenceArray = station.coords.map(function(item, index){
    return Math.abs(item - randomStation.coords[index])
  })
  let difference = differenceArray.reduce(function(acc,val){return acc + val;}, 0);
  if (difference <= 1000) {console.log("Almost there! You got 90 points!")}
  else if (difference <= 2000) {console.log("Pretty close! You got 80 points!")}
  else if (difference <= 3000) {console.log("Not bad! You got 70 points!")};
}
});
 });

 //.reduce(function(acc,val){return acc + val;}, 0);

