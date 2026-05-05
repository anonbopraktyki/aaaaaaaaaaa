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
    console.log(e.target.getBoundingClientRect().width);
}

function clone(){
    var b = document.body.appendChild(document.getElementById("border").cloneNode(true));
    return b;
}





function balls(){
 var zadanie = clone();
 console.log(zadanie.innerHTML);

zadanie.innerHTML = zadanie.innerHTML.replace("<qwer>", "co bedzie?");
 var har = zadanie.querySelector('h1');
var b = 50;
for (let i = 0; i < 41; i++) {
    setTimeout(() => {
        har.innerHTML = i;
    }, b * i);
        var j = i/10;
        b *= Math.pow(1.02, j);
        if (i == 40) b *= 2;
}
}