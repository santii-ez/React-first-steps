window.addEventListener('load', function(){
  //queySelectors
  let correo = document.querySelector('#correo');
  let nameError = document.querySelector('#nameError');
  let contrasena = document.querySelector('#contrasena');
  let contrasenaError = document.querySelector('#contrasenaError');

  //on time validations
  let errores = {};
  let regExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  //email
  correo.addEventListener('blur', () => {
    if(correo.value == '') {
      errores.correo = 'Este campo es obligatorio';
      nameError.innerHTML = errores.correo;
    } else if(!correo.value.match(regExp)) {
      errores.correo = 'Correo invalido'
      nameError.innerHTML = errores.correo;
    } else {
      nameError.innerHTML = '';
    }
  });

  //contrasena
  contrasena.addEventListener('blur', () => {
    if(contrasena.value == '') {
      errores.contrasena = 'Este campo es obligatorio'
      contrasenaError.innerHTML = errores.contrasena;
    } else {
      contrasenaError.innerHTML = '';
    }
  });
});