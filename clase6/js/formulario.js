let formulario = document.querySelector('#formulario');
let nombre = document.querySelector('input[name="nombre"]');
let email = document.querySelector('input[name="email"]');
let comentarios = document.querySelector('textarea[name="comentarios"]');

//mensajes de error
let txtNombre = document.querySelector('#txtNombre');
let txtEmail = document.querySelector('#txtEmail');
let txtComentarios = document.querySelector('#txtComentarios');

formulario.addEventListener( 'submit', function( evento)
{
    //evitamos envío del formulario
     evento.preventDefault();
     //console.log(evento)
    limpiarMensajes();
    let flag = true;

    //el valor dentro de las cajas de texto
    let datoNombre = nombre.value;
    if( !checkVacio( datoNombre ) ){
        txtNombre.innerText = 'Complete el campo Nombre';
        flag = false;
    }

    let datoEmail = email.value;
    if( !validarEmail( datoEmail ) ){
        txtEmail.innerText = 'Complete el campo Email';
        flag = false;
    }

    let datoComentarios = comentarios.value;
    if( !checkVacio(datoComentarios) || datoComentarios.length <=5 ){
        txtComentarios.innerText = 'Complete el campo Comentarios';
        flag = false;
    }

    //enviamos el email
    if( flag ){
        formulario.submit();
    }

});

function checkVacio( campo )
{
    if( campo == '' || campo == null ){
        return false;
    }
    return true;
}
function validarEmail (email) {
    let exp = /\S+@\S+\.\S+/;
    return exp.test( email );
}
function limpiarMensajes()
{
    txtNombre.innerText = '';
    txtEmail.innerText = '';
}