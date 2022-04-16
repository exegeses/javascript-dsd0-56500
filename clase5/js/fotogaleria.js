let galeria = document.querySelector('#galeria');

// array de nombres de imágenes
let fotos = [
                'solsteiz', 'maiten', 'gery',
                'maqui', 'lu', 'dani',
                'anto', 'marco', 'bruno',
                'killq', 'marce', 'marco2'
            ];
let cantidad = fotos.length;

let contenido = '';
for( let i = 0; i < cantidad; i++ ){
    //contenido = contenido + 'x';
    contenido += '        <article>\n' +
        '            <img src="fotos/'+fotos[i]+'.png">\n' +
        '        </article>';
}
galeria.innerHTML = contenido;