// the list if the stations
const stations = [
  //Ring
  { name: "Westend", coords: [3,231,34,256]},
  { name: "Jungfernheide", coords: [112,34,147,64]},
  { name: "Beusselstraße", coords: [321,1,352,28]},
  { name: "Westhafen", coords: [466,1,502,30]},
  { name: "Wedding", coords: [618,0,657,30]},
  { name: "Gesundbrunnen", coords: [872,1,903,27]},
  { name: "Schönhauser Allee", coords: [1095,3,1129,25]},
  { name: "Prenzlauer Allee", coords: [1347,3,1378,27]},
  { name: "Greiswalder Straße", coords: [1459, 48, 1492,72]},
  { name: "Landsberger Allee", coords: [1567,217,1601,246]},
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

  //Stadtbahn

  { name: "Charlottenburg", coords: [160,484,192,513]},
  { name: "Savignyplatz", coords: [249,484,282,514]},
  { name: "Zoologischer Garten", coords: [357,470,405,508]},
  { name: "Tiergarten", coords: [427,394,461,421]},
  { name: "Bellevue", coords: [541,292,575,320]},
  { name: "Hauptbahnhof", coords: [705,286,655,246]},
  { name: "Friedrichstraße", coords: [836,245,887,286]},
  { name: "Hackescher Markt", coords: [979,253,1013,282]},
  { name: "Alexanderplatz", coords: [1134,278,1187,319]},
  { name: "Janowitzbrücke", coords: [1224,379,1258,408]},
  { name: "Ostbahnhof", coords: [1281,440,1313,470]},
  { name: "Warschauer Straße", coords: [1337,497,1371,525]},

  //S1/S25

  {name: "Humboldthain", coords: [869,48,901,74]},
  {name: "Nordbahnhof", coords: [869,86,911,113]},
  {name: "Oranienburger Straße", coords: [869,140,903,168]},
  {name: "Brandenburger Tor", coords: [744,360,778,388]},
  {name: "Potsdamer Platz", coords: [744,422,778,449]},
  {name: "Anhalter Bahnhof", coords: [746,490,778,517]},
  {name: "Yorckstraße", coords: [743,707,778,735]},
  {name: "Julius-Leber-Brücke", coords: [638,797,672,824]},

//U7
  {name: "Mierendorffplatz", coords: [159,170,192,198]},
  {name: "Richard-Wagner-Platz", coords: [159,282,194,311]},
  {name: "Bismarckstraße", coords: [159,368,192,396]},
  {name: "Adenauerplatz", coords: [160,556,192,584]},
  {name: "Konstanzer Straße", coords: [175,674,209,702]},
  {name: "Fehrbelliner Platz", coords: [248,753,283,782]},
  {name: "Blissestraße", coords: [290,759,321,786]},
  {name: "Berliner Straße", coords: [333,759,362,786]},
  {name: "Bayerischer Platz", coords: [500,759,534,786]},
  {name: "Eisenacher Platz", coords: [563,759,596,786]},
  {name: "Kleistpark", coords: [630,759,662,787]},
  {name: "Möckernbrücke", coords: [829,555,869,607]},
  {name: "Mehringdamm", coords: [926,653,960,680]},
  {name: "Gneisenaustraße", coords: [1009,670,1040,699]},
  {name: "Südstern", coords: [1125,671,1158,699]},
  {name: "Hermannplatz", coords: [1203,675,1238,701]},
  {name: "Rathaus Neukölln", coords: [1310,726,1346,756]},
  {name: "Karl-Marx-Straße", coords: [1343,772,1377,800]},

  //U2
  {name: "Sophie-Charlotte-Platz", coords: [86,370,119,396]},
  {name: "Deutsche Oper", coords: [218,370,253,396]},
  {name: "Ernst-Reuther-Platz", coords: [284,399,318,426]},
  {name: "Wittenbergplatz", coords: [466,558,505,607]},
  {name: "Nollendorfplatz", coords: [560,558,597,606]},
  {name: "Bülowstraße", coords: [635,586,664,609]},
  {name: "Gleisdreieck", coords: [678,556,710,582]},
  {name: "Mendelssohn-Bartholdy-Park", coords: [698,466,730,494]},
  {name: "Mohrenstraße", coords: [831,425,866,453]},
  {name: "Stadtmitte", coords: [924,426,960,450]},
  {name: "Hausvogteiplatz", coords: [989,423,1022,452]},
  {name: "Spittelmarkt", coords: [1057,426,1090,453]},
  {name: "Märkisches Museum", coords: [1110,425,1142,452]},
  {name: "Klosterstraße", coords: [1162,370,1194,395]},
  {name: "Rosa-Luxemburg-Platz", coords: [1095,154,1129,178]},
  {name: "Senefelderplatz", coords: [1095,101,1131,126]},
  {name: "Eberswalder Straße", coords: [1097,55,1129,79]},

  //U9
  
  {name: "Birkenstraße", coords: [467,86,504,116]},
  {name: "Turmstraße", coords: [467,194,502,222]},
  {name: "Hansaplatz", coords: [470,396,501,423]},
  {name: "Kurfürstendamm", coords: [331,556,365,585]},
  {name: "Spichernstraße", coords: [331,661,365,688]},
  {name: "Güntzelstraße", coords: [331,708,364,735]},

  //U6

  {name: "Reinickendorfer Straße", coords: [654,37,686,62]},
  {name: "Schwartzkopffstraße", coords: [693,75,729,102]},
  {name: "Naturkundemuseum", coords: [742,129,776,157]},
  {name: "Oranienburger Tor", coords: [794,183,831,211]},
  {name: "Französische Straße", coords: [924,360,960,389]},
  {name: "Kochstraße", coords: [926,500,961,527]},
  {name: "Hallesches Tor", coords: [924,556,960,585]},
  {name: "Platz der Luftbrücke", coords: [924,731,961,759]},
  {name: "Paradestraße", coords: [926,791,960,818]},

  //U8
  {name: "Voltastraße", coords: [924,44,960,71]}, 
  {name: "Bernauer Straße", coords: [964,86,999,115]},
  {name: "Rosenthaler Platz", coords: [1003,129,1036,156]},
  {name: "Weinmeisterstraße", coords: [1056,183,1090,211]},
  {name: "Heinrich-Heine-Straße", coords: [1202,447,1237,474]},
  {name: "Moritzplatz", coords: [1203,501,1238,528]},
  {name: "Kottbusser Tor", coords: [1203,559,1237,586]},
  {name: "Schönleinstraße", coords: [1204,617,1238,643]},
  {name: "Boddinstraße", coords: [1203,739,1238,769]},
  {name: "Leinestraße", coords: [1203,794,1238,824]},

//U1, U3, U4, U5
  {name: "Viktoria-Luise-Platz", coords: [498,671,534,699]},
  {name: "Uhlandstraße", coords: [277,555,314,583]},
  {name: "Kurfürstenstraße", coords: [611,555,645,583]},
  {name: "Prinzenstraße", coords: [1056,559,1090,588]},
  {name: "Görlitzer Bahnhof", coords: [1254,559,1285,586]},
  {name: "Schlesisches Tor", coords: [1298,537,1332,565]},
  {name: "Augsburger Straße", coords: [388,606,422,634]}, 
  {name: "Hohenzollernplatz", coords: [283,705,320,735]},
  {name: "Bundestag", coords: [681,300,716,331]},
  {name: "Schillingstraße", coords: [1308,270,1342,299]},
  {name: "Strausberger Platz", coords: [1342,306,1370,328]},
  {name: "Weberwiese", coords: [1368,340,1397,360]},
  {name: "Frankfurter Tor", coords: [1402,372,1432,392]},
  {name: "Samariterstraße", coords: [1441,405,1472,430]}, 
];

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


