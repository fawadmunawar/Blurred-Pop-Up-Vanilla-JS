let buttonMain = document.getElementById("button");
let buttonCross = document.getElementById("popBTN");
let body = document.querySelector(".body");
let popUP = document.querySelector(".popup");


buttonMain.addEventListener("click", () =>{
    body.classList.add("active");
    popUP.classList.remove("vis");
})

buttonCross.addEventListener("click", () =>{
    body.classList.remove("active");
    popUP.classList.add("vis");
})