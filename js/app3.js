const formularioContactos = document.querySelector('#form');
    //   listadoContactos = document.querySelector('#listado-contactos tbody'), 
    //   inputBuscador = document.querySelector('#buscar');

eventListeners();

function eventListeners() {
     // Cuando el formulario de crear o editar se ejecuta
     formularioContactos.addEventListener('submit', leerFormulario);

}

function leerFormulario(e) {
     e.preventDefault();

     // Leer los datos de los inputs
     const nombre = document.querySelector('#nombre').value,
           empresa = document.querySelector('#email').value,

     if(nombre === '' || email === '') {
          // 2 parametros: texto y clase
          mostrarNotificacion('Todos los Campos son Obligatorios', 'error');
     } else {
          // Pasa la validación, crear llamado a Ajax
          const infoContacto = new FormData();
          infoContacto.append('nombre', nombre);
          infoContacto.append('email', email);

          // console.log(...infoContacto);

        //   if(accion === 'crear'){
        //        // crearemos un nuevo contacto
        //        insertarBD(infoContacto);
        //   } else {
        //        // editar el contacto
        //        // leer el Id
        //        const idRegistro = document.querySelector('#id').value;
        //        infoContacto.append('id', idRegistro);
        //        actualizarRegistro(infoContacto);
        //   }
     }
}

// Notifación en pantalla
function mostrarNotificacion(mensaje, clase) {
    const notificacion = document.createElement('div');
    notificacion.classList.add(clase, 'notificacion', 'sombra');
    notificacion.textContent = mensaje;

    // formulario
    formularioContactos.insertBefore(notificacion, document.querySelector('form legend'));

    // Ocultar y Mostrar la notificacion
    setTimeout(() => {
         notificacion.classList.add('visible');
         setTimeout(() => {
              notificacion.classList.remove('visible');           
              setTimeout(() => {
                   notificacion.remove();
              }, 500)
         }, 3000);
    }, 100);

}