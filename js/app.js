function campoRequerido(input){
    console.log('perdi el foco y estoy en la funcion campoRequerido');
    // let input = document.getElementById('nombre');
    // if(input.value.lenght >0)
    if(input.value.trim() === ""){
        input.className = 'form-control is-invalid';
    }else{
        input.className = 'form-control is-valid';
    }
}

function validarEmail(email){
    // console.log(email);emilsearias@gmail.com
    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    if(email.value.trim() != '' && expresion.test(email.value)){
        email.className = 'form-control is-valid';
    }else{
        email.className = 'form-control is-invalid';
    }
}

function validarNumeros(inputTelefono){
    if(inputTelefono.value.trim() != '' && !isNaN(inputTelefono.value)){
        inputTelefono.className = 'form-control is-valid';
    }else{
        inputTelefono.className = 'form-control is-invalid';
    }
    // esto no es un numero
    // isNaN('jflskdjflskdfj') = true
    // isNaN(78978) = falso
    // ! Not !true = falso; !falso = true
}

function validarConsulta(texto){
    if(texto.value.trim() != "" && texto.value.length >= 10){
        texto.className = 'form-control is-valid';
    }else{
        texto.className = 'form-control is-invalid';
    }
}