const name = document.getElementById('adsoyad')
const mail = document.getElementById('mail')
const mesaj = document.getElementById('mesaj')
const form = document.getElementById('form')
const errorElement1 = document.getElementById('error1')
const errorElement2 = document.getElementById('error2')
const errorElement3 = document.getElementById('error3')


form.addEventListener('submit', (e) => {
    let messages1 = []
    let messages2 = []
    let messages3 = []
  

    if (name.value == '' || name.value == null ) {
        messages1.push(' İsim Alanı Boş Bırakılamaz')
        }
    if (mail.value == '' || mail.value == null) {
        messages2.push(' Mail Alanı Boş geçilemez')
    }
    if (mesaj.value == '' || mesaj.value == null) {
        messages3.push(' Mesaj Alanı Boş geçilemez')
    }
    

    if (messages1.length > 0 ) {
        e.preventDefault()
        errorElement1.innerHTML = messages1
    }
    if (messages2.length > 0 ) {
        e.preventDefault()
        errorElement2.innerHTML = messages2
    }
    if (messages3.length > 0 ) {
        e.preventDefault()
        errorElement3.innerHTML = messages3
    }

   

})
   