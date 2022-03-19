//ubicamos elemento dentro del DOM
let txt = document.getElementById('txt');

//declaramos función de control
function reloj()
{
    //creeamos objeto de fecha
    let fecha = new Date();

    //obtenemos horas
    let horas = fecha.getHours();
    //obtenemos los minutos
    let minutos = fecha.getMinutes();
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }
    //obtenemos los segundos
    let segundos = fecha.getSeconds();
    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }

    //mostrar la hora con formato
    // 16:09:23
    txt.innerText = horas +':'+ minutos +':'+ segundos;
}

//invocamos a la función reloj()
reloj();
//actualizamos el llamado a la función reloj
setInterval( reloj, 1000 );