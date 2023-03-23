

function hesapOlustur() {


    var degisken = "@"
    var sifre = document.getElementById("sifre").value;
    var sifre2 = document.getElementById("reSifre").value;
    var email = document.getElementById("email").value;
    var emaildegisken = email.includes(degisken);
    if (sifre == "" || sifre2 == "" || email == "") {
        alert("Tüm alanlar doldurulmalıdır!")
    }

    if (!emaildegisken) {
        alert("şifre @ içermeli ve geçerli bir mail adresi yazılmalı")
    }

    else {
        var kullanici = [email, sifre];

        var yazi = document.getElementById("sonuc");

        if (sifre == sifre2) {

            yazi.innerHTML = "Hesap Oluşturuldu!";
            yazi.style.color = "green";

            sessionStorage.setItem("user", kullanici);
        }

        else {
            yazi.innerHTML = "Şifreler Eşleşmiyor.";
            yazi.style.color = "red";
        }
    }
}


var kullanici = sessionStorage.getItem("user");
kullanici = kullanici.split(",");
var isLogin = false;


var yazi = document.getElementById("sonuc");


function kontrol() {


    var mail = document.getElementById("email").value;
    var sifre = document.getElementById("sifre").value;

var adres="deneme.html"


    if (mail == kullanici[0] && sifre == kullanici[1]) {

        yazi.innerHTML = "Giriş bilgileri doğru!";
        yazi.style.color = "green";


        document.getElementById("kayitbtn1").style.display = "none";
        document.getElementById("kayitbtn2").style.display = "none";
        document.getElementById("kisiad").innerHTML = "Kullanıcı: " + kullanici[0];

        window.location.href = adres;

        isLogin = true;
        sessionStorage.setItem("isLogin", isLogin);




        alert("Giriş bilgileri doğru!")

    }
    else {
        yazi.innerHTML = "Girilen bilgiler hatalı.";
        yazi.style.color = "red";
    }


}




/*tren.onclick = function () {
let basla = Date.now();
let zaman = setInterval(function () {
   let gecenzaman = Date.now() - basla;
   tren.style.left = gecenzaman / 5 + 'px';
   if (gecenzaman > 3000) clearInterval(zaman);
}, 20);
}*/


