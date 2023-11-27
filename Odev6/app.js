/* Ödev-6) Aşağıdaki kodu if else yapısına çeviriniz.

switch (tarayici) {
case 'Edge':
alert( "Edge browser kullanıyorsun" );
break;

case 'Chrome':
case 'Firefox':
case 'Safari':
case 'Opera':
alert( 'Tamam bunları destekliyoruz.' );
break;

default:
alert( 'Umarım sayfanız güzel görünüyordur' );
}  */

const webBrowsers = document.querySelector(".web-browsers");

webBrowsers.addEventListener("click", function (e) {
    const element = e.target;
    const value = element.value;

    if (value == "edge") {
        alert("Edge browser kullanıyorsunuz.");
    } else if (value == "chrome" || value == "firefox" || value == "safari" || value == "opera"); {
        alert('Tamam bunları destekliyoruz.');
    } else {
        alert('Umarım sayfanız güzel görünüyordur.')
    }
    return;
})