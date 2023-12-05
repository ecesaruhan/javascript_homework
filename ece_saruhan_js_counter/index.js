const number = document.getElementById("number");
const btnMinus = document.querySelector("#minus");
const btnClear = document.querySelector("#clear");
const btnPlus = document.querySelector("#plus");
let value = 0;

btnMinus.addEventListener("click", () => {
    value--;
    number.textContent = value;
});

btnClear.addEventListener("click", () => {
    value = 0;
    number.textContent = value;
})

btnPlus.addEventListener("click", () => {
    value++;
    number.textContent = value;
})



