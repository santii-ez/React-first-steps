window.addEventListener('load', function(){
    let form = document.querySelector('#login')
    let button = document.querySelector('.submit-login')
    let nameError = document.querySelector('#nameError')
    let correo = document.querySelector('#correo')

    console.log(form.correo.value)

  button.addEventListener('click', function(event) {
      event.preventDefault();
      let errores = {};
      

    if(correo.value.length < 1) {
        errores.correo = 'Este campo debe estar completo'
    }

    if(Object.keys(errores).length >= 1) {
        nameError.innerHTML = (errores.correo) ? errores.correo : '';

    } else {
        form.submit()
    }
  })
})