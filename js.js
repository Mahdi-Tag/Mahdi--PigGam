let EnterNumber1 = document.querySelector(".EnterNumber1");
let EnterNumber2 = document.querySelector(".EnterNumber2");
let btn1Hold = document.querySelector(".btn1Hold");
let btn1Again = document.querySelector(".btn1Again");
let btn2Hold = document.querySelector(".btn2Hold");
let btn2Again = document.querySelector(".btn2Again");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let show1 = document.querySelector(".show1");
let show2 = document.querySelector(".show2");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let h1 = document.querySelector(".h1");
let h2 = document.querySelector(".h2");
let varible = 1;
let num1 = 0;
let num2 = 0;
//
varibleFunction();
// Left Functions
function leftBtnsDisabled() {
  btn1Hold.disabled = true;
  btn1Again.disabled = true;
  EnterNumber1.disabled = true;
}
function leftBtnsActive() {
  btn1Hold.disabled = false;
  btn1Again.disabled = false;
  EnterNumber1.disabled = false;
}

//
// Right Functions
function rightBtnsDisabled() {
  btn2Hold.disabled = true;
  btn2Again.disabled = true;
  EnterNumber2.disabled = true;
  show2.value = 0;
}
function rightBtnsActive() {
  btn2Hold.disabled = false;
  btn2Again.disabled = false;
  EnterNumber2.disabled = false;
}

// Left Or Right Active
function varibleFunction() {
  if (varible == 0) {
    left.style.opacity = 0.5;
    right.style.opacity = 1;
    rightBtnsActive();
    leftBtnsDisabled();
  } else if (varible == 1) {
    right.style.opacity = 0.5;
    left.style.opacity = 1;
    rightBtnsDisabled();
    leftBtnsActive();
  }
}

EnterNumber1.addEventListener("click", () => {
  let random1 = Math.floor(Math.random() * 6) + 1;
  show1.value = random1;
  if (random1 == 1) {
    show1.value = 0;
    varible = 0;
    varibleFunction();
    num1 = 0;
    box1.value = 0;
    h1.textContent = 0;
  } else {
    num1 += random1;
    box1.value = num1;
  }
});

EnterNumber2.addEventListener("click", () => {
  let random2 = Math.floor(Math.random() * 6) + 1;
  show2.value = random2;
  if (random2 == 1) {
    varible = 1;
    varibleFunction();
    num2 = 0;
    box2.value = 0;
    h2.textContent = 0;
  } else {
    num2 += random2;
    box2.value = num2;
  }
});

btn1Hold.addEventListener("click", () => {
  show1.value = 0;
  box1.value = 0;
  h1.textContent = num1;
  varible = 0;
  varibleFunction();
  if (num1 > 10) {
    console.log("player 1 is winner");
  }
});

btn2Hold.addEventListener("click", () => {
  show2.value = 0;
  box2.value = 0;
  h2.textContent = num2;
  varible = 1;
  varibleFunction();
  if (num2 > 10) {
    console.log("player 2 is winner");
  }
});
