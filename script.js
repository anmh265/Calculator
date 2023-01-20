const numberEls = document.querySelectorAll(".number");
const operatorEl = document.querySelectorAll(".operator");
const clearEl = document.querySelector(".clear");
const displayEl = document.querySelector(".calculator-display");
const equalBtn = document.querySelector(".equals");

displayEl.innerHTML = "";

let acc = 0;
let input = 0;
let state = 0;
let previousoperator;

clearEl.addEventListener("click", () => {
  displayEl.innerHTML = "";
  acc = 0;
  console.log("Display cleared");
});

numberEls.forEach((num) => {
  num.addEventListener("click", () => {
    const numText = num.innerHTML;
    console.log(`The number clicked is: ${numText}`);
    displayEl.innerText += `${numText}`;
  });
});

operatorEl.forEach((operator) => {
  operator.addEventListener("click", () => {
    opr = operator.innerHTML;
    input = displayEl.innerHTML;

    if (state === 0) {
      input = displayEl.innerHTML;
      opr = operator.innerHTML;
      displayEl.innerHTML = "";
    } else {
      switch (opr) {
        case "+":
          acc += input;
          break;
        case "-":
          acc += input;
          break;
      }
    }

    displayEl.innerHTML = acc.toString()
    previousoperator = operator
    
  });

});

equalBtn.addEventListener("click", () => {});

function displayNum(val) {
  let num = 0;

  for (let i of val) {
    num = num * 10 + charToInt(i);
  }
  return num;
}

function charToInt(cval) {
  if (cval === "0") return 0;
  if (cval === "1") return 1;
  if (cval === "2") return 2;
  if (cval === "3") return 3;
  if (cval === "4") return 4;
  if (cval === "5") return 5;
  if (cval === "6") return 6;
  if (cval === "7") return 7;
  if (cval === "8") return 8;
  if (cval === "9") return 9;
}

function add(a, b) {
  acc = a + b;

  // console.log(acc)
  displayEl.innerHTML = `${acc}`;
}

function subtract(a, b) {
  let acc = a - b;

  // console.log(acc)
  displayEl.innerHTML = `${acc}`;
}

function multiply(a, b) {
  let acc = a * b;

  // console.log(acc)
  displayEl.innerHTML = `${acc}`;
}

function division(a, b) {
  let acc = a / b;

  // console.log(acc)
  displayEl.innerHTML = `${acc}`;
}

// add(2,6)
// subtract(8,3)
// multiply(3, 4)
// division(24, 8)

// let x = '1a'

// const sum  = function s(x,y,z) {
//         const arg = [x,y,z];
//         return arg.reduce((a,b) => a+b, 0)
//     }

// console.log(sum(1,2,3));
