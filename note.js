const notesContainer = document.querySelector(".notes_container");
const createBtn = document.querySelector(".btn");
let notes= document.querySelectorAll(".input_box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}


createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input_box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "https://thumb.ac-illust.com/3b/3b5b217ce258702c0956cbf3b146acba_t.jpeg";
notesContainer.appendChild(inputBox).appendChild(img);
})
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".input_box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})
document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})