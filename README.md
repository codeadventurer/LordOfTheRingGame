<h1>The Lord of the (Berlin) Ring</h1>

<h3>How to play</h3>

The aim of the game is to challenge your knowledge of the Berlin trasport system. You get a random U-Bahn or 
S-Bahn station within the ring and you have to guess where it is. When you click on one of the stations you get
points depending on how far you are from the right station. If you guessed right you get 100 points. 

There are 10 rounds so try to get the maximum of 1000 points!

<h3>Technologies</h3>

The game is build using JavaScript DOM Manipulation. The map is an image png. file with clickable image-map areas.
The coordinates of the ares were measured with [Image Map Generator](https://www.image-map.net/). The image-map technology
allows us to have a responsive design and play the game on small screens.

<h3>Challengies</h3>

The most challenging was to find the way to make the image clickable in the right spots and connect them to an algorithm 
that would calculate the distance between wrong and right station and give the points accordingly. Another challenge was 
to highlight the stations since you cannot change styles of the image-map areas easily. The solution was to use <div> elements 
and connect their appearing position and size to the coordinates of the station. 

Play the game [here](https://codeadventurer.github.io/LordOfTheRingGame)
