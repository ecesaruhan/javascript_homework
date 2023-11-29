/* Ödev-5) Sayı bulmaca oyununu yapın. Puan ve hak sistemi de olsun. Kendiniz karar verin. */

//Oyuncunun 1'den 100'e kadar toplam 10 adet sayı tahmin etme hakkı vardır. 10 puan üzerinden değerlendirilecek olan sayı bulmaca oyununda oyuncu her tahminde 1 puan kaybedecektir.

let generatedNumber = Math.ceil(Math.random() * 100);
console.log(generatedNumber);
let predictedNumber = Number(prompt("Lütfen bir sayı giriniz."));
let i = 0;
let count = 10;
while (i <= 10) {
    if (predictedNumber < generatedNumber) {
        predictedNumber = Number(prompt("Daha büyük bir sayı giriniz."));
        count--;
    } else if (predictedNumber > generatedNumber) {
        predictedNumber = Number(prompt("Daha küçük bir sayı giriniz."));
        count--;
    } else if (predictedNumber == generatedNumber) {
        alert("'Tebrikler bildiniz ve " + count + " puan kazandınız.");
        break;
    }
    i++;
}

