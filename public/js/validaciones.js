window.addEventListener('load', function(){
  //queySelectors
  let correo = document.querySelector('#correo');
  let nameError = document.querySelector('#nameError');

  let contrasena = document.querySelector('#contrasena');
  let contrasenaError = document.querySelector('#contrasenaError');

  let formLogIn = document.querySelector('#login');

  //on time validations
  let erroresLogIn = {};
  let regExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  //--- Log In ---//
  //email
  correo.addEventListener('blur', () => {
    if(correo.value == '') {
      erroresLogIn.correo = 'Este campo es obligatorio';
      nameError.innerHTML = erroresLogIn.correo;
    } else if(!correo.value.match(regExp)) {
      erroresLogIn.correo = 'Correo invalido';
      nameError.innerHTML = erroresLogIn.correo;
    } else {
      nameError.innerHTML = '';
    }
  });

  //contrasena
  contrasena.addEventListener('blur', () => {
    if(contrasena.value == '') {
      erroresLogIn.contrasena = 'Este campo es obligatorio';
      contrasenaError.innerHTML = erroresLogIn.contrasena;
      console.log(Object.keys(erroresLogIn).length);
    } else {
      contrasenaError.innerHTML = '';
    }
  });

  //prevent default
  formLogIn.addEventListener('submit', (e) => {
    //email
    correo.addEventListener('blur', () => {
      if(correo.value == '') {
        erroresLogIn.correo = 'Este campo es obligatorio';
        nameError.innerHTML = erroresLogIn.correo;
      } else if(!correo.value.match(regExp)) {
        erroresLogIn.correo = 'Correo invalido';
        nameError.innerHTML = erroresLogIn.correo;
      } else {
        nameError.innerHTML = '';
      }
    });
    
    //contrasena
    contrasena.addEventListener('blur', () => {
      if(contrasena.value == '') {
        erroresLogIn.contrasena = 'Este campo es obligatorio';
        contrasenaError.innerHTML = erroresLogIn.contrasena;
      } else {
        contrasenaError.innerHTML = '';
      }
    });

    //errors
    if(Object.keys(erroresLogIn) > 1) {
      e.preventDefault();
      nameError.innerHTML = '';
      nameError.innerHTML = 'Correo o contraseña incorrectos';
    };
    //--- END LOGIN ---//
  });
});