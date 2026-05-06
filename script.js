const zadania = [
  "Go through a Portal",
  "kill yourself 5 times",
  "fully explore a map",
  "find an egg",
  "win the game",
  "jump over 10 cactuses",
  "kill a zombie",
  "Get an Upgrade",
  "Put on a Helmet",
  "Kill a Dragon",
  "Catch a Fish",
  "Use a Jetpack",
  "Get a headshot with a Sniper",
  "eat 10 things",
  "Make a trade",
  "Become Invisible",
  "ride an animal",
  "kill a person",
  "Complete the Tutorial",
  "Craft something",
  "Grow and Harvest a crop",
  "sit down",
  "Make 1,000,000$",
  "Level Up",
  "Get a pet",
  "Score a goal",
  "Serve a Customer",
  "Light a Furnace",
  "Defeat a Boss",
  "commit arson (burn down someone's house)",
  "build a house",
  "Cast a Spell",
  "Drink a Potion",
  "Find a Frog",
  "Find a crossover event (Cthulhu in DST)",
  "Do a Backflip",
  "Blow up a Bomb",
  "Build A Turret",
  "Fly a Spaceship",
  "kill something using the environment ",
  "travel one km (must be provable)",
  "Win a Battle Royale",
  "Play an Instrument",
  "Steal some Treasure",
  "Kill a friendly NPC",
  "See a Ghost",
  "Win a 1v1 (online)",
  "go to the moon",
  "use a shovel",
  "use a computer in game",
  "Crawl through a tunnel",
  "Play a Game within a game",
  "Complete a side quest for an NPC",
  "write the word pneumonoultramicroscopicsilicovolcanoconiosis in game chat or player/save name doesn't count",
  "Fly over a forest",
  "Build a Campfire",
  "Glitch out of bounds",
  "explode yourself",
  "kill 10 of the same thing",
  "Sleep through the night",
  "Have a machine craft something for you",
  "soft lock yourself",
  "do the wordle",
  "Plant a tree, and watch it grow",
  "Shoot yourself",
  "Suffocate",
  "Ride a boat",
  "Create a Creature",
  "Step on a Landmine",
  "Escape A Prison Cell",
  "Climb a wall",
  "Enslave a creature",
  "Get a trophy",
  "get a perfect score",
  "have a pet/companion kill something",
  "Find a Dinosaur",
  "Take a Limb",
  "Make a Meal",
  "set every slider to max",
  "fill your inventory",
  "take off your shirt",
  "Open a Treasure chest",
  "Punch an Enemy",
  "get to exactly one health",
  "Get Shot",
  "Draw a Card",
  "Use Magic",
  "Starve to death",
  "unlock a cosmetic",
  "lose it all by gambling",
  "flush a toilet",
  "pet a dog",
  "Talk to a random person in Voice Chat (they have to respond)",
  "Go Back in time",
  "draw a pretty picture",
  "Do a Lap in a race",
  "Get in an Ocean",
  "Solve a Puzzle",
  "Go on a date",
  "Roll a Dice",
  "Deal critical damage ",
  "Reach the credits through gameplay",
  "Fail a Quest",
  "Name a Pet",
  "kill the final boss",
  "Fall to your death",
  "Climb a ladder",
  "Parry an attack",
  "Automate something indefinitely",
  "Solve a puzzle",
  "Reach an in game save point (not save & quit)",
  "become intoxicated (drink)",
  "Get to exactly 1hp",
  "Drink water",
  "Get full armour",
  "Acquire Honey",
  "Grow taller/Get bigger",
  "Become blinded even temporarily",
  "Become poisoned",
  "Step on a trap",
  "Catch a projectile/ thrown item",
  "Fill entire inventory",
  "Paint or Dye something",
  "break one of your limbs",
  "crash a game",
  "Die in 3 different ways in a single game",
  "Restore health",
  "touch grass",
  "hit the world border/invisible wall",
  "set yourself on fire",
  "find an easter egg",
  "find a glitch",
  "get a kill streak",
  "spend all your money",
  "open a door",
  "Fight a bird",
  "Pick up a creature (as in hold it in your hand, can't be something like a pokeball)",
  "crash a car",
  "stand on a rooftop",
  "Use a Yo-Yo",
  "teabag a fallen foe",
  "get an extra life",
  "use fast travel",
  "make a phone call",
  "skip a cutscene",
  "do not skip a cutscene",
  "sit on a bench",
  "cut down a tree",
  "electrocute yourself",
  "Emote",
  "See your character's reflection in a mirror (no cutscenes)",
  "hitless a boss",
  "get something labeled as rare",
  "get an item name that starts with the letter Q",
  "Kill a Hydra",
  "visit space",
  "command an army",
  "Perform a transformation",
  "Find something behind a waterfall",
  "Break Glass",
  "Alter the flow of traffic.",
  "Fish up something that's not a fish",
  "Complete a skillcheck.",
  "Ragdoll something.",
  "Complete a daily challenge.",
  "Stand on a conveyor belt.",
  "Have something die of old age.",
  "get over-encumbered.",
  "Beat a roguelike run",
  "Get A Jumpscare",
  "double jump",
  "break an item",
  "Jump onto a moving object",
  "Read a book",
  "build a bridge,",
  "Hide in a closet",
  "Look in a trash can",
  "Dig a hole",
  "Get married",
  "Assassinate/stealth kill an enemy",
  "Go to another dimension",
  "See/hear a thunderstorm",
  "Cross the entire map",
  "Commit a crime",
  "Get 10,000 of something",
  "Flirt with an NPC",
  "Use a Shield",
  "buy everything from a shop",
  "get a one of a kind item",
  "Capture a creature",
  "find a hidden area",
  "die to a sea creature",
  "Win at gambling",
  "Find God.",
  "see blood in game",
  "get the game to deny you from doing something",
  "kill 10 people without them noticing",
  "Make a barricade",
  "Clear a dungeon",
  "get cursed"
];

//fake window
/** @param {DragEvent} e */
function dragger(e){
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        if (clientX != 0 && clientY != 0){
    e.currentTarget.parentElement.style.left = clientX - pos[0] + "px";
    e.currentTarget.parentElement.style.top = clientY - pos[1] + "px";
}
    if (e.type === "touchmove") e.preventDefault();
}

var pos = [0, 0];
const div = document.createElement('div');
div.style.display = "none";

/** @param {DragEvent} e */
function start(e){
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    if (e.type !== "touchstart")e.dataTransfer.setDragImage(div, 0, 0);
    pos = [e.clientX - e.currentTarget.parentElement.getBoundingClientRect().left, e.clientY - e.currentTarget.parentElement.getBoundingClientRect().top];
}

function clone(){
    var b = document.body.appendChild(document.getElementById("border").cloneNode(true));
    b.style.left = Math.round(Math.random() * (document.body.getBoundingClientRect().width - b.getBoundingClientRect().width*2)) + "px";
    b.style.top = Math.round(Math.random() * (document.body.getBoundingClientRect().height - b.getBoundingClientRect().height*2)) + "px";
    return b;
}

var robione = [];
var zrobione = [];
var rolling = false;
function funkcjazadan(wopwomp = 0, e = "asdf"){
    if (rolling) return;
    if (wopwomp != 0) return;
    if (robione.length + zrobione.length >= zadania.length) {
        document.getElementById("hed").innerHTML = "to sa juz wszystkie zadania";
        return;
    } 
    rolling = true;
 var zadanie = clone();
zadanie.innerHTML = zadanie.innerHTML.replace("<qwer>", "co bedzie?");
 var har = zadanie.querySelector('h1');
var b = 0;
for (let i = 0; i < 41; i++) {
    setTimeout(() => {
        var asdfg = zadanie.getBoundingClientRect().left + (zadanie.getBoundingClientRect().width / 2);
        har.innerHTML = zadania[Math.floor(Math.random() * zadania.length)];
        zadanie.style.left =  asdfg - (zadanie.getBoundingClientRect().width / 2) + "px";
        if (i == 40) {
            while (robione.includes(zadania.indexOf(har.innerHTML))){
                har.innerHTML = zadania[Math.floor(Math.random() * zadania.length)];
            }
                robione.push(zadania.indexOf(har.innerHTML));
                bsdf(zadanie);
        }
    }, b * i);
        var j = i/10;
        b *= Math.pow(1.02, j);
        if (i == 40) b *= 2;
}
}
/** @param {HTMLElement} zadanie */
function bsdf(zadanie){
rolling = false;
zadanie.onclick = function() { funkcjazadan(1, event) };
zadanie.innerHTML = zadanie.innerHTML.replace("co bedzie?", "zakoncz zadanie");
zadanie.querySelector('div').onclick = function() { przejscie(event)};
}
    var fgh = false;
var hbgf;
var f;
    /** @param {MouseEvent} e */
function przejscie(e) {
    if (fgh == true && e.currentTarget.innerHTML == "🎉wooo🎉"){
 e.currentTarget.innerHTML = "zakoncz zadanie";
 e.currentTarget.parentElement.querySelector('h1').style.color = "black";
 e.currentTarget.parentElement.querySelector('h1').style.textDecoration = "none";
  e.currentTarget.parentElement.style.animationName= "none";
fgh = false;
clearTimeout(hbgf);
    }
    else if (fgh == false){
        console.log(e.currentTarget);
 e.currentTarget.innerHTML = "🎉wooo🎉";
 e.currentTarget.parentElement.querySelector('h1').style.color = "green";
 e.currentTarget.parentElement.querySelector('h1').style.textDecoration = "underline";
 e.currentTarget.parentElement.style.animationName = "opacity";
 fgh = true;
 f = e.currentTarget;
 hbgf = setTimeout(() => {
    zrobione.push(zadania.indexOf( f.parentElement.querySelector('h1').innerHTML));
    localStorage.setItem("zrobione", JSON.stringify(zrobione));
    robione.splice(robione.indexOf( f.parentElement.querySelector('h1').innerHTML), 1);
    f.parentElement.remove();
    fgh = false;
 }, 3000);
}}


function sfgh(ert = 0){
    if (ert == 0) zrobione = JSON.parse(localStorage.getItem("zrobione"));
    const now = new Date().toDateString();
    if (localStorage.getItem("today") != now){
        var st = JSON.parse(localStorage.getItem("stare")) || [];
        var g = JSON.parse(localStorage.getItem("zrobione")) || [];
        st.push(localStorage.getItem("today"), g.length);
        localStorage.setItem("stare", JSON.stringify(st));
        localStorage.setItem("today", now);
        localStorage.setItem("zrobione", JSON.stringify([]));
        window.location.reload();
    }
    
setTimeout(() => {
        sfgh(1);
}, 6000);
}


 /** @param {MouseEvent} e */
function historia(e, state) {
    var hist = clone();
    hist.innerHTML = hist.innerHTML.replace('<center><h1 style="user-select: none;">WYLOSUJ ZADANIE</h1></center>', "<qthy style='user-select: none; height: 35vh; display:block; overflow-y: scroll;'></qthy>");
        console.log(hist.innerHTML);
        hist.onclick = function() {};
        hist.querySelector('div').onclick = function() { closer(event)};
        hist.classList += " maxhe";
        var dgfhg = [];
        JSON.parse(localStorage.getItem("zrobione")).forEach(id => {
            dgfhg.push(zadania[id]);
        });
        var dfgh = "<table>";
        var string = "";
        dgfhg.forEach(task => {
            string += " ⁕ " + task + "<br>"; 
        }); 
        JSON.parse(localStorage.getItem("stare")).forEach((item) => {
            const [realKey, realValue] = Object.entries(item)[0];
            dfgh += "<tr><td>" + realKey + ":</td><td>" + realValue + "</td></tr>";
        }
     )
        dfgh += "</table>"  

        hist.querySelector('qthy').innerHTML = "<h3>zrobione dzisiaj:</h3>" + string + " <h3>wczesniejsze dni:</h3> " + dfgh; 
}
/** @param {MouseEvent} e */
function closer(e) {
    e.currentTarget.parentElement.remove();
}
addEventListener("touchstart", function (e) { start(e)});
addEventListener("touchmove", function (e) {dragger(e)});



/*



*/

function clearerer(){
    localStorage.setItem("stare", JSON.stringify([{"Tue Mar 24 2024": 3}, {"Wed Mar 25 2024": 5}]));
}