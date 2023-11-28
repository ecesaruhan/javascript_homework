let numbers = [1, 5, 7, 15, 3, 25, 12, 24];
let result = numbers;

//1-sayilar listesindeki her bir elemanın karesini yazdırınız.
let square;
for (i = 0; i < numbers.length; i++) {
    square = result[i] ** 2;
    // console.log(square);
}

//2- sayilar listesindeki hangi sayılar 5' in katıdır?

for (i = 0; i < numbers.length; i++) {
    if (result[i] % 5 == 0) {
        // console.log(result[i]);
    }
}

//3- sayilar listesindeki çift sayıların toplamını bulunuz.

let total = 0;
let evenNumber;
for (i = 0; i < numbers.length; i++) {
    if (result[i] % 2 == 0) {
        evenNumber = result[i];
        total += evenNumber;
    }
}
// console.log(total);


let products = ["iphone 12", "samsung s22", "iphone 13", "samsung s23", "samsung s20"];

//4-urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.

let n;
let capital;
for (n = 0; n < products.length; n++) {
    capital = products[n].toUpperCase();
    console.log(capital);
}

//5-urunler listesinde samsung geçen kaç ürün vardır?
let count = 0;
for (n = 0; n < products.length; n++) {
    if (products[n].includes("samsung")) {
        count++;
    }
}
console.log(count);




