/* Ödev-4) Girilen bir yıl değerinin (örneğin: 1975) artık yıl olup olmadığını bulup konsola sonucu yazdırın. Bir yıl 400'e tam olarak bölünebiliyorsa ya da 4'e tam olarak bölünmekle birlikte 100'e de tam olarak bölünemiyorsa artık yıldır.
  */

let result;
let year = prompt("Lütfen bir yıl değeri giriniz.");
let leapYear = year % 400 == 0 ? year + " artık bir yıldır" : year + " artık bir yıl değildir";
console.log(leapYear);