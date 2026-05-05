const zadania = [
  { id: 1, name: "Go through a Portal" },
  { id: 2, name: "kill yourself 5 times" },
  { id: 3, name: "fully explore a map" },
  { id: 4, name: "find an egg" },
  { id: 5, name: "win the game" },
  { id: 6, name: "jump over 10 cactuses" },
  { id: 7, name: "kill a zombie" },
  { id: 8, name: "Get an Upgrade" },
  { id: 9, name: "Put on a Helmet" },
  { id: 10, name: "Kill a Dragon" },
  { id: 11, name: "Catch a Fish" },
  { id: 12, name: "Use a Jetpack" },
  { id: 13, name: "Get a headshot with a Sniper" },
  { id: 14, name: "eat 10 things" },
  { id: 15, name: "Make a trade" },
  { id: 16, name: "Become Invisible" },
  { id: 17, name: "ride an animal" },
  { id: 18, name: "kill a person" },
  { id: 19, name: "Complete the Tutorial" },
  { id: 20, name: "Craft something" },
  { id: 21, name: "Grow and Harvest a crop" },
  { id: 22, name: "sit down" },
  { id: 23, name: "Make 1,000,000$" },
  { id: 24, name: "Level Up" },
  { id: 25, name: "Get a pet" },
  { id: 26, name: "Score a goal" },
  { id: 27, name: "Serve a Customer" },
  { id: 28, name: "Light a Furnace" },
  { id: 29, name: "Defeat a Boss" },
  { id: 30, name: "commit arson (burn down someone's house)" },
  { id: 31, name: "build a house" },
  { id: 32, name: "Cast a Spell" },
  { id: 33, name: "Drink a Potion" },
  { id: 34, name: "Find a Frog" },
  { id: 35, name: "Find a crossover event (Cthulhu in DST)" },
  { id: 36, name: "Do a Backflip" },
  { id: 37, name: "Blow up a Bomb" },
  { id: 38, name: "Build A Turret" },
  { id: 39, name: "Fly a Spaceship" },
  { id: 40, name: "kill something using the environment " },
  { id: 41, name: "travel one km (must be provable)" },
  { id: 42, name: "Win a Battle Royale" },
  { id: 43, name: "Play an Instrument" },
  { id: 44, name: "Steal some Treasure" },
  { id: 45, name: "Kill a friendly NPC" },
  { id: 46, name: "See a Ghost" },
  { id: 47, name: "Win a 1v1 (online)" },
  { id: 48, name: "go to the moon" },
  { id: 49, name: "use a shovel" },
  { id: 50, name: "use a computer in game" },
  { id: 51, name: "Crawl through a tunnel" },
  { id: 52, name: "Play a Game within a game" },
  { id: 53, name: "Complete a side quest for an NPC" },
  { id: 54, name: "write the word pneumonoultramicroscopicsilicovolcanoconiosis in game chat or player/save name doesn't count" },
  { id: 55, name: "Fly over a forest" },
  { id: 56, name: "Build a Campfire" },
  { id: 57, name: "Glitch out of bounds" },
  { id: 58, name: "explode yourself" },
  { id: 59, name: "kill 10 of the same thing" },
  { id: 60, name: "Sleep through the night" },
  { id: 61, name: "Have a machine craft something for you" },
  { id: 62, name: "soft lock yourself" },
  { id: 63, name: "do the wordle" },
  { id: 64, name: "Plant a tree, and watch it grow" },
  { id: 65, name: "Shoot yourself" },
  { id: 66, name: "Suffocate" },
  { id: 67, name: "Ride a boat" },
  { id: 68, name: "Create a Creature" },
  { id: 69, name: "Step on a Landmine" },
  { id: 70, name: "Escape A Prison Cell" },
  { id: 71, name: "Climb a wall" },
  { id: 72, name: "Enslave a creature" },
  { id: 73, name: "Get a trophy" },
  { id: 74, name: "get a perfect score" },
  { id: 75, name: "have a pet/companion kill something" },
  { id: 76, name: "Find a Dinosaur" },
  { id: 77, name: "Take a Limb" },
  { id: 78, name: "Make a Meal" },
  { id: 79, name: "set every slider to max" },
  { id: 80, name: "fill your inventory" },
  { id: 81, name: "take off your shirt" },
  { id: 82, name: "Open a Treasure chest" },
  { id: 83, name: "Punch an Enemy" },
  { id: 84, name: "get to exactly one health" },
  { id: 85, name: "Get Shot" },
  { id: 86, name: "Draw a Card" },
  { id: 87, name: "Use Magic" },
  { id: 88, name: "Starve to death" },
  { id: 89, name: "unlock a cosmetic" },
  { id: 90, name: "lose it all by gambling" },
  { id: 91, name: "flush a toilet" },
  { id: 92, name: "pet a dog" },
  { id: 93, name: "Talk to a random person in Voice Chat (they have to respond)" },
  { id: 94, name: "Go Back in time" },
  { id: 95, name: "draw a pretty picture" },
  { id: 96, name: "Do a Lap in a race" },
  { id: 97, name: "Get in an Ocean" },
  { id: 98, name: "Solve a Puzzle" },
  { id: 99, name: "Go on a date" },
  { id: 100, name: "Roll a Dice" },
  { id: 101, name: "Deal critical damage " },
  { id: 102, name: "Reach the credits through gameplay" },
  { id: 103, name: "Fail a Quest" },
  { id: 104, name: "Name a Pet" },
  { id: 105, name: "kill the final boss" },
  { id: 106, name: "Fall to your death" },
  { id: 107, name: "Climb a ladder" },
  { id: 108, name: "Parry an attack" },
  { id: 109, name: "Automate something indefinitely" },
  { id: 110, name: "Solve a puzzle" },
  { id: 111, name: "Reach an in game save point (not save & quit)" },
  { id: 112, name: "become intoxicated (drink)" },
  { id: 113, name: "Get to exactly 1hp" },
  { id: 114, name: "Drink water" },
  { id: 115, name: "Get full armour" },
  { id: 116, name: "Acquire Honey" },
  { id: 117, name: "Grow taller/Get bigger" },
  { id: 118, name: "Become blinded even temporarily" },
  { id: 119, name: "Become poisoned" },
  { id: 120, name: "Step on a trap" },
  { id: 121, name: "Catch a projectile/ thrown item" },
  { id: 122, name: "Fill entire inventory" },
  { id: 123, name: "Paint or Dye something" },
  { id: 124, name: "break one of your limbs" },
  { id: 125, name: "crash a game" },
  { id: 126, name: "Die in 3 different ways in a single game" },
  { id: 127, name: "Restore health" },
  { id: 128, name: "touch grass" },
  { id: 129, name: "hit the world border/invisible wall" },
  { id: 130, name: "set yourself on fire" },
  { id: 131, name: "find an easter egg" },
  { id: 132, name: "find a glitch" },
  { id: 133, name: "get a kill streak" },
  { id: 134, name: "spend all your money" },
  { id: 135, name: "open a door" },
  { id: 136, name: "Fight a bird" },
  { id: 137, name: "Pick up a creature (as in hold it in your hand, can't be something like a pokeball)" },
  { id: 138, name: "crash a car" },
  { id: 139, name: "stand on a rooftop" },
  { id: 140, name: "Use a Yo-Yo" },
  { id: 141, name: "teabag a fallen foe" },
  { id: 142, name: "get an extra life" },
  { id: 143, name: "use fast travel" },
  { id: 144, name: "make a phone call" },
  { id: 145, name: "skip a cutscene" },
  { id: 146, name: "do not skip a cutscene" },
  { id: 147, name: "sit on a bench" },
  { id: 148, name: "cut down a tree" },
  { id: 149, name: "electrocute yourself" },
  { id: 150, name: "Emote" },
  { id: 151, name: "See your character's reflection in a mirror (no cutscenes)" },
  { id: 152, name: "hitless a boss" },
  { id: 153, name: "get something labeled as rare" },
  { id: 154, name: "get an item name that starts with the letter Q" },
  { id: 155, name: "Kill a Hydra" },
  { id: 156, name: "visit space" },
  { id: 157, name: "command an army" },
  { id: 158, name: "Perform a transformation" },
  { id: 159, name: "Find something behind a waterfall" },
  { id: 160, name: "Break Glass" },
  { id: 161, name: "Alter the flow of traffic." },
  { id: 162, name: "Fish up something that's not a fish" },
  { id: 163, name: "Complete a skillcheck." },
  { id: 164, name: "Ragdoll something." },
  { id: 165, name: "Complete a daily challenge." },
  { id: 166, name: "Stand on a conveyor belt." },
  { id: 167, name: "Have something die of old age." },
  { id: 168, name: "get over-encumbered." },
  { id: 169, name: "Beat a roguelike run" },
  { id: 170, name: "Get A Jumpscare" },
  { id: 171, name: "double jump" },
  { id: 172, name: "break an item" },
  { id: 173, name: "Jump onto a moving object" },
  { id: 174, name: "Read a book" },
  { id: 175, name: "build a bridge," },
  { id: 176, name: "Hide in a closet" },
  { id: 177, name: "Look in a trash can" },
  { id: 178, name: "Dig a hole" },
  { id: 179, name: "Get married" },
  { id: 180, name: "Assassinate/stealth kill an enemy" },
  { id: 181, name: "Go to another dimension" },
  { id: 182, name: "See/hear a thunderstorm" },
  { id: 183, name: "Cross the entire map" },
  { id: 184, name: "Commit a crime" },
  { id: 185, name: "Get 10,000 of something" },
  { id: 186, name: "Flirt with an NPC" },
  { id: 187, name: "Use a Shield" },
  { id: 188, name: "buy everything from a shop" },
  { id: 189, name: "get a one of a kind item" },
  { id: 190, name: "Capture a creature" },
  { id: 191, name: "find a hidden area" },
  { id: 192, name: "die to a sea creature" },
  { id: 193, name: "Win at gambling" },
  { id: 194, name: "Find God." },
  { id: 195, name: "see blood in game" },
  { id: 196, name: "get the game to deny you from doing something" },
  { id: 197, name: "kill 10 people without them noticing" },
  { id: 198, name: "Make a barricade" },
  { id: 199, name: "Clear a dungeon" },
  { id: 200, name: "get cursed" }
];

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
    b.style.left = Math.round(Math.random() * (document.body.getBoundingClientRect().width - b.getBoundingClientRect().width*2)) + "px";
    b.style.top = Math.round(Math.random() * (document.body.getBoundingClientRect().height - b.getBoundingClientRect().height*2)) + "px";
    return b;
}


var rolling = false;
function balls(wopwomp = 0){
    if (rolling) return;
    if (wopwomp == 1) {fghd(); return;}
    rolling = true;
 var zadanie = clone();
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
zadanie.onclick = function() {balls(1) };
zadanie.innerHTML = zadanie.innerHTML.replace("co bedzie?", "zakoncz zadanie");
zadanie.querySelector('div').onclick = function() { przejscie(event)};
}
/** @param {MouseEvent} e */
function przejscie(e) {
 e.target.innerHTML = "wooo";
 e.target.parentElement.parentElement.querySelector('h1').style.color = "green"  
 e.target.parentElement.parentElement.querySelector('h1').style.textDecoration = "underline";
}
function fghd(){

}