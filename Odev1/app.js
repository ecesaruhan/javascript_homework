/* Ödev-1) Prompt aracılığı ile kullanıcıdan bir saniye değeri alın. Örneğin 1500. Ardından bu girilen değerin kaç dakika, kaç saniye olduğunu hesaplayıp konsola düzgün bir şekilde yazdırın. */

let second;
let minute;
second = prompt("Lütfen bir saniye değeri giriniz.");
minute = Math.floor(second / 60);
second = second - (minute * 60);
console.log(minute + " dakika " + second + " saniye");


