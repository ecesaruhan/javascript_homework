/* Ödev-3) 1 den büyük olup 1 veya kendisi haricinde hiçbir sayıya kalansız bölünemeyen sayılara asal sayı denir.
Örneğin 5 bir asal sayıdır. Çünkü 2,3 ve 4 e kalansız bölünemez.
2 den ne kadar olan asal sayıları bulan kodu yazınız.
Örneğin n = 10 için sonuç 2,3,5,7 olacaktır.
NOT: Kod her türlü n değeri için çalışmalıdır, sabit bir sayı değildir. */





function asalSayilar(n) {
    let asalSayilarDizisi = [];
    for (let i = 1; i <= n; i++) {
        for (let k = 2; k <= i; k++) {
            if (i % k == 0) {
                break;
            } else {
                console.log(i);
                // asalSayilarDizisi.push(i);
                // return asalSayilarDizisi;
            }
        }    
    }
}
// console.log(asalSayilar(7));


