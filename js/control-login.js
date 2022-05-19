const name = document.getElementById('kullaniciAdi')
const password = document.getElementById('sifre')
const form = document.getElementById('form')
const errorElement1 = document.getElementById('error1')
const errorElement2 = document.getElementById('error2')

form.addEventListener('submit', (e) => {
    let messages1 = []
    let messages2 = []

    if (name.value == '' || name.value == null) {
        messages1.push('Kullanıcı Adı Boş Bırakılamaz')
        }
    
    if (password.value == '' || password.value == null) {
        messages2.push('Şifre Boş Bırakılamaz')
    }


    if (messages1.length > 0 ) {
        e.preventDefault()
        errorElement1.innerHTML = messages1
    }

    if (messages2.length > 0) {
        e.preventDefault()
        errorElement2.innerHTML = messages2
    }

})
   