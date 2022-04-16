
let nombre = document.querySelector('input[name="nombre"]');
let mensaje = document.querySelector('#mensaje');
let boton = document.querySelector('#boton');
let formulario = document.querySelector('form[action="proceso.php"]');

//función de validacion de completar el campo

boton.addEventListener('click',
                        function captura( e ) {
                            //evitamos envío del formulario
                            e.preventDefault();

                            //capturamos el texto escrito en el campo
                            valorNombre = nombre.value;

                            if (valorNombre == null || valorNombre == '') {
                                mensaje.innerText = 'complete el campo Nombre';
                            }
                            else{
                                //enviamos el formulario
                                formulario.submit();
                            }
                        });