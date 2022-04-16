let italianos = [
    'Maseratti', 'Pagani',
    'Larmborghini', 'Ferrari',
    'Alfa Romeo', 'Alpine',
    'Bugatti', 'Lancia',
    'Fiat', 'Mazzanti',
    'Fornassari', 'Abarth'
];
let cantidad = italianos.length;

document.write('<ul>');
for ( let n = 0; n < cantidad; n++ ){
    document.write( '<li>' + italianos[n] +'</li>' );
}
document.write('</ul>');