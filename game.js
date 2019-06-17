
stations.forEach(function(station){
  let child = document.createElement("area");

  // creating <area id = "Beusselstrasse" coords="321,1,352,28" shape="rect">
 
  child.setAttribute("id", station.name);
  let cor = `${station.x1},${station.y1},${station.x2},${station.y2}`

  child.setAttribute("coords", cor);
  child.setAttribute("shape", "rect");

  let parent = document.querySelector("map");
  parent.appendChild(child);

  //making areas clickable
  
  child.addEventListener("click", function() {
 if (child.getAttribute('id') === randomStation) {
   console.log("You got it!");
 }
});
 });



