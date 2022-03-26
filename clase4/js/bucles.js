let n = 1;
while ( n < 15 ){
    document.write( n + '<br>');
    n++;
}

document.write('<hr>');

let italianos = [
                    'Maseratti', 'Pagani',
                    'Larmborghini', 'Ferrari',
                    'Alfa Romeo', 'Alpine',
                    'Bugatti', 'Lancia',
                    'Fiat', 'Mazzanti',
                    'Fornassari', 'Abarth'
];
let cantidad = italianos.length;
//document.write( italianos[0] );
n = 0;
document.write('<ul>');
while ( n < cantidad ){
    document.write( '<li>' + italianos[n] +'</li>' );
    n++;
}
document.write('</ul>');