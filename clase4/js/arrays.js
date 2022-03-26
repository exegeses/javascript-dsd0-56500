/*
let marca1 = 'Hermes';
let marca2 = 'Zara';
let marca3 = 'Uniqlo';
let marca4 = 'Armani';
let marca5 = 'Tommy';
*/
let marcas = ['Hermes', 'Zara', 'Uniqlo', 'Armani', 'Tommy'];
console.log(marcas);
//document.write(marcas);
console.log(marcas[1]);

/* mostrar el día de la semana */
let fecha = new Date();
//obtener el número del día de la semana
let diaSemana = fecha.getDay(); // del 0 al 6
document.write(diaSemana);
let diasDelaSemana = [
                        'Domingo', 'Lunes',
                        'Martes', 'Miécoles',
                        'Jueves', 'Viernes',
                        'Sábado'
                     ];
document.write( diasDelaSemana[ diaSemana ] );