
// let countEl = document.getElementById("count-num")

// let count=0;
// function increment(){
//     count=count+1
//     countEl.innerText= count+1
// }

// function reset(){
//     count=count-1
//     countEl.innerText=count-1
// }

let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
let count=0
function increment(){
    count=count+1
    countEl.textContent=count
}

function save(){
    let countstr= count + "-"
    saveEl.textContent= saveEl.textContent+countstr
    count=0
    countEl.textContent=count
}