let order1 = {
    orderId: "101",
    orderDate: "31.12.2022",
    paymentMethod: "kredi kartı",
    cargoAdress: "Yahya kaptan mah. Kocaeli İzmit",

    productId1: "5",
    productTitle1: "Iphone 13 Pro",
    productUrl1: "http://abc.com/iphone-13-pro",
    productPrice1: "22000",

    productId2: "6",
    productTitle2: "Iphone 13 Pro Max",
    productUrl2: "http://abc.com/iphone-13-pro-max",
    productPrice2: "25000",

    customerId: "12",

    firmId: "34",
    firmName: "Apple Türkiye",

}

let order2 = {
    orderId: "102",
    orderDate: "30.12.2022",
    paymentMethod: "kredi kartı",
    cargoAdress: "Yahya kaptan mah. Kocaeli İzmit",

    productId: "6",
    productTitle: "Iphone 13 Pro Max",
    productUrl: "http://abc.com/iphone-13-pro-max",
    productPrice: "25000",

    customerId: "12",

    firmId: "34",
    firmName: "Apple Türkiye",

}

// 1.Siparişin KDV dahil Toplam Ücreti
let price1 = Number(order1.productPrice1) + Number(order1.productPrice2);
let calculateKdv1 = price1 * 18 / 100;
let totalPrice1 = price1 + calculateKdv1;
console.log(totalPrice1);

// 2.Siparişin KDV dahil Toplam Ücreti
let price2 = Number(order2.productPrice);
let calculateKdv2 = price2 * 18 / 100;
let totalPrice2 = price2 + calculateKdv2;
console.log(totalPrice2);


//Tüm siparişlerin KDV dahil Toplam Ücreti

let price = Number(order1.productPrice1) + Number(order1.productPrice2) + Number(order2.productPrice);
let calculateKdv = price * 18 / 100;
let totalPrice = price + calculateKdv;
console.log(totalPrice);
