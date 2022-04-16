let link2 = document.querySelector('#link2');

// addEventListener( evento, funcion(){} )
link2.addEventListener( 'click', function( evento )
{
    console.log( evento );
    evento.preventDefault(); //evitar que se dispare el enlace
})