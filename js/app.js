function campoRequerido(input){
    console.log('se jecuto el onblur');
    //let input = document.querySelector('#nombre');
    if(input.value ===''){
        input.className= 'form-control is-invalid'
    }else{
        input.className= 'form-control is-valid'
    }
}
