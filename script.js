//fake window
/** @param {DragEvent} e */
function dragger(e){
        if (e.clientX != 0 && e.clientY != 0){
    e.target.parentElement.style.left = e.clientX - pos[0] + "px";
    e.target.parentElement.style.top = e.clientY - pos[1] + "px";
}}

var pos = [0, 0];
const div = document.createElement('div');
div.style.display = "none";

/** @param {DragEvent} e */
function start(e){
    e.dataTransfer.setDragImage(div, 0, 0);
    pos = [e.clientX - e.target.parentElement.getBoundingClientRect().left, e.clientY - e.target.parentElement.getBoundingClientRect().top];
}

function clone(){
    var b = document.body.appendChild(document.getElementById("border").cloneNode(true));
    b.style.left = Math.round(Math.random() * (document.body.getBoundingClientRect().width - b.getBoundingClientRect().width)) + "px";
    b.style.top = Math.round(Math.random() * (document.body.getBoundingClientRect().height - b.getBoundingClientRect().height)) + "px";
    return b;
}




const zadania = [
  { id: 1, name: "Obtain a Heart Container or HP Upgrade" },
  { id: 2, name: "Defeat a boss without taking damage" },
  { id: 3, name: "Collect 1,000 units of currency" },
  { id: 4, name: "Find and open 10 chests" },
  { id: 5, name: "Unlock a fast travel point" },
  { id: 6, name: "Acquire an elemental weapon or spell" },
  { id: 7, name: "Complete a side quest" },
  { id: 8, name: "Obtain a piece of rare gear" },
  { id: 9, name: "Reach Level 10" },
  { id: 10, name: "Defeat an enemy 5 levels higher than you" },
  { id: 11, name: "Perform 10 successful parries" },
  { id: 12, name: "Enter a major dungeon or instance" },
  { id: 13, name: "Acquire a key item" },
  { id: 14, name: "Fill 5 inventory slots with unique materials" },
  { id: 15, name: "Reach the highest point of the region" },
  { id: 16, name: "Purchase an upgrade from a merchant" },
  { id: 17, name: "Discover a secret area or hidden room" },
  { id: 18, name: "Kill an enemy using only environmental damage" },
  { id: 19, name: "Unlock an achievement or trophy" },
  { id: 20, name: "Equip a full set of matching armor" }
];




var rolling = false;
function balls(){
    if (rolling) return;
    rolling = true;
 var zadanie = clone();
 console.log(zadanie.innerHTML);

zadanie.innerHTML = zadanie.innerHTML.replace("<qwer>", "co bedzie?");
 var har = zadanie.querySelector('h1');
var b = 0;
for (let i = 0; i < 41; i++) {
    setTimeout(() => {
        var asdfg = zadanie.getBoundingClientRect().left + (zadanie.getBoundingClientRect().width / 2);
        har.innerHTML = zadania[Math.floor(Math.random() * zadania.length)].name;
        zadanie.style.left =  asdfg - (zadanie.getBoundingClientRect().width / 2) + "px";
        if (i == 40) bsdf(zadanie);
    }, b * i);
        var j = i/10;
        b *= Math.pow(1.02, j);
        if (i == 40) b *= 2;
}
}
/** @param {HTMLElement} zadanie */
function bsdf(zadanie){
rolling = false;
 zadanie.innerHTML += "<div class='border bora'>skonczone</div>"

}