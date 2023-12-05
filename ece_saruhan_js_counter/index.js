const number = document.getElementById("number");
const btnMinus = document.querySelector("#minus");
const btnClear = document.querySelector("#clear");
const btnPlus = document.querySelector("#plus");
let value = 0;

btnMinus.addEventListener("click", () => {
    value--;
    if (value < 0) {
        number.style.color = ("red");
    } else if (value > 0) {
        number.style.color = ("green")
    } else {
        number.style.color = ("black")
    }
    number.textContent = value;
});

btnClear.addEventListener("click", () => {
    value = 0;
    if (value < 0) {
        number.style.color = ("red");
    } else if (value > 0) {
        number.style.color = ("green")
    } else {
        number.style.color = ("black")
    }
    number.textContent = value;
})

btnPlus.addEventListener("click", () => {
    value++;
    if (value < 0) {
        number.style.color = ("red");
    } else if (value > 0) {
        number.style.color = ("green")
    } else {
        number.style.color = ("black")
    }
    number.textContent = value;
})



