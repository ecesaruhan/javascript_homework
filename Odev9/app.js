//1- "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.
let fruits = ["Elma", "Armut", "Muz", "Çilek"];
let result = fruits;

//2-Dizi kaç elemanlıdır ?
result = fruits.length;
console.log(result);

//3-Dizinin ilk ve son elemanı nedir?
result = fruits[0];
console.log(result);
result = fruits[3];
console.log(result);

//4-Elma dizinin bir elemanı mıdır?
result = fruits.includes("Elma");
console.log(result);

//5-Kiraz meyvesini listenin sonuna ekleyiniz.
result = fruits.push("Kiraz");
result = fruits;
console.log(result);

//6-Dizinin son 2 elemanını siliniz.
result = fruits.splice(3, 2);
result = fruits;
console.log(result);

/*7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.

Öğrenci 1: Kemal Devrimdar 2010 (70,60,80)
Öğrenci 2: Saliha Temel 2012 (80,80,90)
Öğrenci 3: Defne Küp 2009 (60,60,70)   */

let student1 = ["Kemal Devrimdar", "2010", "70", "60", "80"];
let student2 = ["Saliha Temel", "2012", "80", "80", "90"];
let student3 = ["Defne Küp", "2009", "60", "60", "70"];

//YAŞ HESABI
//Şuanki yıl
let now = new Date();
result = now;
result = now.getFullYear();

//1.öğrencinin yaşı
let result1;
result1 = student1[1];
let age1 = result - result1;
console.log(age1);

//2.öğrencinin yaşı
let result2;
result2 = student2[1];
let age2 = result - result2;
console.log(age2);

//3.öğrencinin yaşı
let result3 = student3[1];
let age3 = result - result3;
console.log(age3);

//NOT ORTALAMASI HESABI
//1.öğrencinin not ortalaması
let averageGrade1;
let s1g1 = Number(student1[2]);
let s1g2 = Number(student1[3]);
let s1g3 = Number(student1[4]);

averageGrade1 = (s1g1 + s1g2 + s1g3) / 3;
console.log(averageGrade1);

//2.öğrencinin not ortalaması

let averageGrade2;
let s2g1 = Number(student2[2]);
let s2g2 = Number(student2[3]);
let s2g3 = Number(student2[4]);

averageGrade2 = (s2g1 + s2g2 + s2g3) / 3;
console.log(averageGrade2.toFixed(1));


//3.öğrencinin not ortalaması

let averageGrade3;
let s3g1 = Number(student3[2]);
let s3g2 = Number(student3[3]);
let s3g3 = Number(student3[4]);

averageGrade3 = (s3g1 + s3g2 + s3g3) / 3;
console.log(averageGrade3.toFixed(1));













