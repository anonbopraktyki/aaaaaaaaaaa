
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

function ikg(){
    document.body.appendChild(document.getElementById("border").cloneNode(true));
}