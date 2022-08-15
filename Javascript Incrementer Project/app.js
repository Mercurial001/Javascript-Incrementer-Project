let count = 0;

let value = document.querySelector(".number-value");

let increasebtn = document.querySelector("#increase");
let decreasebtn = document.querySelector("#decrease");
let resetbtn = document.querySelector("#reset");

// let = btns = document.querySelectorAll(".btn")
// from the tutorial creates nodes

increasebtn.addEventListener('click', function(){
    count++;
    value.textContent = count;
    if (count > 0) {
        value.style.color = "green"
    } else if (count === 0) {
        value.style.color = "black"
    }
});

decreasebtn.addEventListener('click', function(){
    count--;
    value.textContent = count;
    if (count < 0) {
        value.style.color = "red"
    } else if (count === 0) {
        value.style.color = "black"
    }
});

resetbtn.addEventListener('click', function(){
    count = 0;
    value.textContent = count;
    if (count === 0) {
        value.style.color = "black"
    }
});