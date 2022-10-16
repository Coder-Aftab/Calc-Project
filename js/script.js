const getBtns = document.querySelectorAll(".btn");
const res = document.querySelector(".result__text");
const clear = document.querySelector(".clear");
const curDis = document.querySelector(".result__val");

const calcObj = {
  res: '0',
  firstOperand: 0,
  firstOperandSet: false,
  secondOperand: 0,
  secondOperandSet: false,
  operator: null,
};

//clear display on double click
clear.ondblclick = () => {
  res.innerText = "0";
};

//get hold of all buttons click
getBtns.forEach((btn) => {
  btn.onclick = (e) => {
    if (e.target.classList.contains("operator")) {
      const op = e.target.innerText;
      handleOperator(op, Number(res.innerText));
    } else if (e.target.classList.contains("number")) {
      const val = e.target.innerText;
      handleNum(val);
    } else if (e.target.classList.contains("clear")) {
      if (res.innerText.length == 1) {
        res.innerText = "0";
      } else {
        res.innerText = res.innerText.slice(0, -1);
      }
    } else if (e.target.classList.contains("btn__equals")) {
      handleEquals(Number(res.innerText));
    }
  };
});

function handleOperator(operator, num) {
  if (["+", "-", "x", "/"].includes(operator)) res.innerText = "0";

  switch (operator) {
    case "+":
      if (!calcObj.firstOperandSet) {
        calcObj.firstOperand = num;
        calcObj.firstOperandSet = true;
      }
      calcObj.operator = "+";

      curDis.innerText = calcObj.firstOperand + operator;
      //console.log(calcObj);
      break;
    case "-":
      if (!calcObj.firstOperandSet) {
        calcObj.firstOperand = num;
        calcObj.firstOperandSet = true;
      }

      calcObj.operator = "-";
      curDis.innerText = calcObj.firstOperand + operator;
      //console.log(calcObj);
      break;
    case "/":
      if (!calcObj.firstOperandSet) {
        calcObj.firstOperand = num;
        calcObj.firstOperandSet = true;
      }

      calcObj.operator = "/";
      curDis.innerText = calcObj.firstOperand + operator;
      //console.log(calcObj);
      break;
    case "x":
      if (!calcObj.firstOperandSet) {
        calcObj.firstOperand = num;
        calcObj.firstOperandSet = true;
      }

      calcObj.operator = "*";
      curDis.innerText = calcObj.firstOperand + operator;
      //console.log(calcObj);
      break;
    default:
    //console.log("error");
  }
}

function handleNum(number) {
  if (calcObj.res) {
    res.innerText = "0";
    calcObj.res = 0;
  }
  res.innerText += number;
  if (res.innerText[0] == "0" && res.innerText.length != 1)
    res.innerText = res.innerText.slice(1);
  ////console.log(number);
}

function handleEquals(secondNum) {
  if (calcObj.firstOperandSet == false) return;
  //console.log(secondNum);
  calcObj.secondOperand = secondNum;
  calcObj.secondOperandSet = true;
  //console.log(secondNum);
  const result = math_it_up[calcObj.operator](
    calcObj.firstOperand,
    calcObj.secondOperand
  );
  calcObj.res = `${parseFloat(result.toFixed(7))}`;
  // //console.log(calcObj);
  res.innerText = calcObj.res;
  resetVal(calcObj);
  //console.log(calcObj.res);
}

const resetVal = (calcObj) => {
  //console.log(calcObj);
  calcObj.firstOperand = 0;
  calcObj.firstOperandSet = false;
  calcObj.secondOperand = 0;
  calcObj.secondOperandSet = false;
  calcObj.operator = null;
  curDis.innerText = calcObj.res;
  //console.log(calcObj);
};

const math_it_up = {
  "+": function (x, y) {
    return x + y;
  },
  "-": function (x, y) {
    return x - y;
  },
  "/": function (x, y) {
    return x / y;
  },
  "*": function (x, y) {
    return x * y;
  },
};
