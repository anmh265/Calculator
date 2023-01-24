const numberEls = document.querySelectorAll(".number");
const operatorEl = document.querySelectorAll(".operator");
const clearEl = document.querySelector(".clear");
const displayEl = document.querySelector(".calculator-display");
const equalBtn = document.querySelector(".equals");

let acc = 0;
let input = 0;
let state = 0;
let readingState = 0;
let previousoperator = "";
let arr = [];
const operatorSymb = ["+", "-", "X", "/"];

numberEls.forEach((num) => {
  num.addEventListener("click", () => {
    if (readingState === 0) {
      const numText = displayNum(num.innerHTML);
      console.log(`The number clicked is: ${numText}`);
      displayEl.innerText += `${numText}`;
      arr.push(numText);
    } else {
      displayEl.innerHTML = num.innerHTML;
      arr.push(num.innerHTML);
      readingState = 0;
    }

    console.log(arr);
  });
});

operatorEl.forEach((operator) => {
  operator.addEventListener("click", () => {
    const opr = operator.innerHTML;
    input = displayNum(displayEl.innerHTML);

    let check = false;

    arr.push(opr);
    console.log(arr);

    if (operatorSymb.includes(arr[arr.length - 1]) && operatorSymb.includes(arr[arr.length - 2])) {
      check = true
    }

    if(!check){
      
      if (state === 0) {
        acc = input;
        previousoperator = opr;
        displayEl.innerHTML = "";
        state = 1;
      } else {
        switch (previousoperator) {
          case "+":
            acc += input;
            break;
          case "-":
            acc -= input;
            break;
          case "X":
            acc *= input;
            break;
          case "/":
            acc /= input;
            break;
        }
      }
      displayEl.innerHTML = acc.toString();
      previousoperator = opr;
      readingState = 1;
    }
  });
});

equalBtn.addEventListener("click", () => {
  input = displayNum(displayEl.innerHTML);
  console.log(input);
  switch (previousoperator) {
    case "+":
      acc += input;
      break;
    case "-":
      acc -= input;
      break;
    case "X":
      acc *= input;
      break;
    case "/":
      acc /= input;
      break;
  }
  displayEl.innerHTML = acc.toString();
  state = 0;
});

clearEl.addEventListener("click", () => {
  displayEl.innerHTML = "";
  state = 0;
  acc = 0;
  input = 0;
  previousoperator = "";
  readingState = 0;
  arr = [];
  console.log("Display cleared");
});

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

// function add(a, b) {
//   acc = a + b;

//   // console.log(acc)
//   displayEl.innerHTML = `${acc}`;
// }

// function subtract(a, b) {
//   let acc = a - b;

//   // console.log(acc)
//   displayEl.innerHTML = `${acc}`;
// }

// function multiply(a, b) {
//   let acc = a * b;

//   // console.log(acc)
//   displayEl.innerHTML = `${acc}`;
// }

// function division(a, b) {
//   let acc = a / b;

//   // console.log(acc)
//   displayEl.innerHTML = `${acc}`;
// }

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
