const Projet = [
    {name : "Pacman", srcImg : ""},
    {name : "2048", srcImg : ""},
    {name : "Forgotten", srcImg : ""},
    {name : "Apexdle", srcImg : ""},
    {name : "CarbonTracker", srcImg : ""},
    {name : "Unideckbuilders", srcImg : ""},
    {name : "Labyrinth", srcImg : ""},
    {name : "Towa", srcImg : ""},
    {name : "Odomo", srcImg : ""}
]
const DIVPROJET = document.getElementById("projets");

Projet.forEach( proj =>{
    var link = document.createElement("a");
    link.href = "Presentation.html";
    link.className="explore-linkFront";
   img = document.createElement("img");
   img.alt = proj.name;
   img.src = proj.srcImg;
   link.appendChild(img);
   DIVPROJET.appendChild(link);
});