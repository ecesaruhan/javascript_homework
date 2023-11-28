"use strict"

/* Ödev-8) Verilen url ve ders adı bilgisini kullanarak aşağıdaki işlemleri yapınız.
url="https://www.wissenakademie.com&quot;;
dersAdi="Fullstack Web Developer Eğitimi";
1-url kaç karakterlidir?
2-ders adı kaç kelimeden oluşmaktadır?
3-url https ile başlıyor mu?
4-ders adı içinde Eğitimi kelimesi geçiyor mu?
5-url ve ders adını kullanarak aşağıdaki string ifadeyi oluşturun:
https://www.wissenakademie.com/fullstack-web-gelistirme-egitimi */

let url = "https://www.wissenakademie.com&quot";
let courseName = "Fullstack Web Developer Eğitimi";
let result;

// 1-url kaç karakterlidir?
console.log(url.length);

//2-ders adı kaç kelimeden oluşmaktadır?
console.log(courseName.split(" ").length);

//3-url https ile başlıyor mu?
console.log(url.startsWith("https"));

//4-ders adı içinde Eğitimi kelimesi geçiyor mu?
console.log(courseName.includes("Eğitimi"));


/* 5-url ve ders adını kullanarak aşağıdaki string ifadeyi oluşturun:
https://www.wissenakademie.com/fullstack-web-gelistirme-egitimi */

let resultCourseName = courseName.replace("Fullstack Web Developer Eğitimi", "/fullstack-web-gelistirme-egitimi");
let resultUrl = url.split("&").shift("&");
console.log(resultUrl.concat(resultCourseName));



