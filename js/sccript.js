const getBtns = document.querySelectorAll(".btn");
const res = document.querySelector(".result__text");

let ans = 0;
getBtns.forEach((btn) => {
  btn.onclick = (e) => {
    // if (e.target.classList.contains("operator")) {
    //   console.log("Operator");
    // } else if (e.target.classList.contains("number")) {
    //   res.innerText += e.target.innerText;
    // }
     res.innerText += e.target.innerText;
  };
});
