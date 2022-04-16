let lista = document.querySelector('#lista');

let italianos = [
    'Maseratti', 'Pagani',
    'Larmborghini', 'Ferrari',
    'Alfa Romeo', 'Alpine',
    'Bugatti', 'Lancia',
    'Fiat', 'Mazzanti',
    'Fornassari', 'Abarth'
];
let cantidad = italianos.length;
let contenido = '';

for ( let i = 0; i < cantidad ; i++){
    contenido = contenido + '<li>' + italianos[i] + '</li>';
}

lista.innerHTML = contenido;