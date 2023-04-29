const email = document.getElementById('e-mail')
const password = document.getElementById('sifre')
const passwordIcon = document.getElementById('showPassword')
// email yazı verilerine ulas

let mailEkle = true;

email.onkeydown = function() {

if(email.value.length > 1 && mailEkle) {

  // setSelectionRange sadece type text olan inputlarda kullanılır
  // o yüzden imlec sonuna @gmail.com ekleyemeyiz.
  email.value = email.value + "@gmail.com"
  return mailEkle = false

}


// uzunluk 0'a eşitse yardım amaclı maili eklemeyi aktif hale getir.
if(email.value.length < 1 || !email.value.includes('@gmail.com')) {
    mailEkle = true;
}

}



// showPassworda tıklandıgında inputu göster
passwordIcon.onclick = function() {

    if(password.type === 'password') {
        password.type = 'text'
    } else {

        password.type = 'password'
    }
}