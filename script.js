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
const categories = {
  survival_basics: [19, 21, 114, 20, 27, 59, 60, 63, 108, 22],
  combat_rank_1: [6, 82, 84, 12, 17, 131, 9, 28, 149, 104],
  world_traveler: [33, 66, 140, 0, 47, 154, 2, 185, 193, 155],
  gear_up: [8, 48, 81, 7, 37, 188, 88, 115, 190, 189],
  unfortunate_ends: [1, 57, 113, 64, 87, 119, 83, 120, 125, 61],
  pure_chaos: [36, 132, 138, 29, 68, 123, 56, 124, 130, 199],
  social_life: [91, 146, 150, 14, 44, 103, 92, 181, 186, 178],
  agile_movement: [5, 106, 172, 11, 40, 174, 35, 38, 143, 93],
  beast_master: [10, 24, 147, 16, 116, 136, 71, 75, 160, 191],
  meta_gamer: [49, 144, 145, 102, 127, 162, 51, 101, 196, 128],
  magic_arcana: [31, 32, 86, 45, 85, 156, 157, 183, 194, 34],
  competitive: [50, 97, 107, 25, 95, 161, 41, 46, 166, 73],
  domestic_life: [13, 77, 90, 26, 94, 98, 99, 175, 179, 52],
  inventory_management: [79, 129, 173, 76, 122, 164, 53, 153, 165, 167],
  shadow_work: [15, 80, 177, 110, 192, 198, 182, 133, 197, 43],
  interaction: [3, 109, 142, 117, 118, 111, 70, 158, 159, 65],
  builder: [55, 141, 180, 67, 121, 134, 72, 74, 163, 152],
  npc_encounters: [18, 23, 151, 42, 62, 126, 184, 195, 168, 54],
  progression: [137, 139, 148, 100, 105, 135, 39, 169, 171, 187],
  settlement: [4, 78, 176, 58, 69, 89, 30, 96, 170, 112]
};

// Table 2: Challenges grouped by Difficulty
const difficulties = {
  easy: [19, 21, 114, 6, 82, 84, 33, 66, 140, 8, 48, 81, 1, 57, 113, 36, 132, 138, 91, 146, 150, 5, 106, 172, 10, 24, 147, 49, 144, 145, 31, 32, 86, 50, 97, 107, 13, 77, 90, 79, 129, 173, 15, 80, 177, 3, 109, 142, 55, 141, 180, 18, 23, 151, 137, 139, 148, 4, 78, 176],
  medium: [20, 27, 59, 12, 17, 131, 0, 47, 154, 7, 37, 188, 64, 87, 119, 29, 68, 123, 14, 44, 103, 11, 40, 174, 16, 116, 136, 102, 127, 162, 45, 85, 156, 25, 95, 161, 26, 94, 98, 76, 122, 164, 110, 192, 198, 117, 118, 111, 67, 121, 134, 42, 62, 126, 100, 105, 135, 58, 69, 89],
  hard: [60, 63, 108, 9, 28, 149, 2, 185, 193, 88, 115, 190, 83, 120, 125, 56, 124, 130, 92, 181, 186, 35, 38, 143, 71, 75, 160, 51, 101, 196, 157, 183, 194, 41, 46, 166, 99, 175, 179, 53, 153, 165, 182, 133, 197, 70, 158, 159, 72, 74, 163, 184, 195, 168, 39, 169, 171, 30, 96, 170],
  veryHard: [22, 104, 155, 189, 61, 199, 178, 93, 191, 128, 34, 73, 52, 167, 43, 65, 152, 54, 187, 112]
};
//fake window
/** @param {DragEvent} e */
function dragger(e){
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        if (clientX != 0 && clientY != 0){
    e.currentTarget.parentElement.style.left = clientX - pos[0] + window.scrollX+ "px";
    e.currentTarget.parentElement.style.top = clientY - pos[1] + window.scrollY+ "px";
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
    if (wopwomp ==1 ) return;
    if (robione.length + zrobione.length >= zadania.length) {
        document.getElementById("heddfg").innerHTML = "to sa juz wszystkie zadania";
        return;
    } 
    var roller = function() {return zadania[Math.floor(Math.random() * zadania.length)];};
    var cat = document.getElementById("catg").value;
    if ( cat != -1){
        roller = function() {return zadania[Object.values(categories)[cat][Math.floor(Math.random() * Object.values(categories)[cat].length)]]};
    }
    rolling = true;
 var zadanie = clone();
zadanie.innerHTML = zadanie.innerHTML.replace("<qwer>", "co bedzie?");
 var har = zadanie.querySelector('h1');
var b = 0;
for (let i = 0; i < 41; i++) {
    setTimeout(() => {
        var asdfg = zadanie.getBoundingClientRect().left + (zadanie.getBoundingClientRect().width / 2);
        har.innerHTML = roller();
        zadanie.style.left =  asdfg - (zadanie.getBoundingClientRect().width / 2) + "px";
        if (i == 40) {
            while (robione.includes(zadania.indexOf(har.innerHTML))){
                har.innerHTML = roller();
                i++;
                if (i > 10000) {document.getElementById("heddfg").innerHTML = "to sa juz wszystkie zadania";
                    setTimeout(() => {
                        document.getElementById("heddfg").innerHTML = "HISTORIA";
                    }, 2000);
                                            zadanie.remove();
                break;}
            }
                            har.innerHTML = "<h2 onclick='pojkdfg(event)'>" + har.innerHTML + "</h2>";
                robione.push(zadania.indexOf(har.querySelector('h2').innerHTML));
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
    if (faravol != null) return;
    if (fgh == true && e.currentTarget.innerHTML == "🎉wooo🎉"){
 e.currentTarget.innerHTML = "zakoncz zadanie";
 e.currentTarget.parentElement.querySelector('h2').style.color = "black";
 e.currentTarget.parentElement.querySelector('h2').style.textDecoration = "none";
  e.currentTarget.parentElement.style.animationName= "none";
fgh = false;
clearTimeout(hbgf);
    }
    else if (fgh == false){
 e.currentTarget.innerHTML = "🎉wooo🎉";
 e.currentTarget.parentElement.querySelector('h2').style.color = "green";
 e.currentTarget.parentElement.querySelector('h2').style.textDecoration = "underline";
 e.currentTarget.parentElement.style.animationName = "opacity";
 fgh = true;
 f = e.currentTarget;
 hbgf = setTimeout(() => {
    zrobione.push(zadania.indexOf( f.parentElement.querySelector('h2').innerHTML));
    localStorage.setItem("zrobione", JSON.stringify(zrobione));
    robione.splice(robione.indexOf( f.parentElement.querySelector('h2').innerHTML), 1);
    f.parentElement.remove();
    fgh = false;
 }, 3000);
}}


function sfgh(ert = 0){
    if (ert == 0) {
        zrobione = JSON.parse(localStorage.getItem("zrobione"));
        stare = JSON.parse(localStorage.getItem("stare"));
    };
    if (ert == 2) {sign(); return;}
    const now = new Date().toDateString();
    if (localStorage.getItem("today") != now){
        var st = JSON.parse(localStorage.getItem("stare")) || [];
        var g = JSON.parse(localStorage.getItem("zrobione")) || [];
        st.push({ [localStorage.getItem("today")]: g.length});
        localStorage.setItem("stare", JSON.stringify(st));
        localStorage.setItem("today", now);
        localStorage.setItem("zrobione", JSON.stringify([]));
        window.location.reload();
    }
setTimeout(() => {
        sfgh(1);
}, 1000);
}

function sign(){
                document.getElementById('cont').innerHTML = document.getElementById('sign up').innerHTML;
}
function log(){
        document.getElementById('cont').innerHTML = document.getElementById('login').innerHTML;
}
 /** @param {MouseEvent} e */
function historia(e, state) {
    var hist = clone();
    hist.innerHTML = hist.innerHTML.replace('<center><h1 style="user-select: none;">WYLOSUJ ZADANIE</h1></center>', "<qthy style='user-select: none; height: 35vh; display:block; overflow-y: scroll;'></qthy>");
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
// addEventListener("touchstart", function (e) { start(e)});
// addEventListener("touchmove", function (e) {dragger(e)});

function clearerer(){
    localStorage.setItem("stare", JSON.stringify([{"Tue Mar 24 2024": 0}]));
}

function show(){
    if (document.getElementById("pass1").type == "password") {document.getElementById("pass1").type = "text";
    document.getElementById("pass2").type = "text";
    }
else{ document.getElementById("pass1").type = "password";
        document.getElementById("pass2").type = "password";}
}
function asign(){
    var b = [document.getElementById("fname").value, document.getElementById("lname").value, document.getElementById("email").value, document.getElementById("pass1").value, document.getElementById("pass2").value];
    if (b[0] != '' && b[1] != '' && b[2] != '' && b[3] != '' && b[4] != ''){
    if (b[3] == b[4]){
window.location.href = 'Untitled-1.html';
    } 
else{
    document.getElementById("fgh").innerHTML = document.getElementById("fgh").innerHTML.replace("<gort></gort>", "<a style='color:red'> passwords are not the same</a>");
}}
else{document.getElementById("fgh").innerHTML = document.getElementById("fgh").innerHTML.replace("<gort></gort>", "<a style='color:red'> fill all values</a>");}
}
function alog(){
    var b = [document.getElementById("email"), document.getElementById("pass1")];
    window.location.href = 'Untitled-1.html';
}

function asddfg(){
    console.log(stare);
    console.log(zrobione);
    console.log(localStorage.getItem("stare"));
}
var faravol;
function pojkdfg(e){
    if (faravol != null) return;
            faravol = e.currentTarget;
        var fgh = faravol.innerHTML;
        faravol.innerHTML = Object.entries(difficulties).find(([names, ids]) => ids.includes(zadania.indexOf(faravol.innerHTML)))[0];

        if (faravol.innerHTML == "easy") faravol.style.color = "#90EE90";
                if (faravol.innerHTML == "medium") faravol.style.color = "#FFA500";
                        if (faravol.innerHTML == "hard") faravol.style.color = "#FF0000";
                                if (faravol.innerHTML == "veryHard") faravol.style.color = "#6f2da8";
        setTimeout(() => {
            faravol.innerHTML = fgh;
            faravol.style.color = "black";
            faravol = null;
        }, 2000);
}