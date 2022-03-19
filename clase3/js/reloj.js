//ubicamos elemento dentro del DOM
let txt = document.getElementById('txt');

//declaramos función de control
function dosDigitos( numero )
{
    if( numero < 10 ){
        numero = '0'+ numero;
    }
    return numero;
}

function reloj()
{
    //creeamos objeto de fecha
    let fecha = new Date();

    //obtenemos horas
    let horas = fecha.getHours();
    //obtenemos los minutos
    let minutos = fecha.getMinutes();
    minutos = dosDigitos( minutos );
    //obtenemos los segundos
    let segundos = fecha.getSeconds();
    segundos = dosDigitos( segundos );

    //mostrar la hora con formato
    // 16:09:23
    txt.innerText = horas +':'+ minutos +':'+ segundos;
}



//invocamos a la función reloj()
reloj();
//actualizamos el llamado a la función reloj
setInterval( reloj, 1000 );