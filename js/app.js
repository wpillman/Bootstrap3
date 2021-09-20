const nombre = document.getElementById('nombre')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

// form.addEventListener('submit', (e) => {
//     let messages = []
//     if (nombre.value==='' || nombre.value == null){
//         messages.push('Name is required')
//     }
// })

form.addEventListener('submit', (e) => {
    e.preventDefault();
     checkInputs();
});

function checkInputs(){
    const nombrevalue = nombre.value.trim();
    if(nombrevalue === ''){
        setErrorFor(nombre,'nombre no puede estar vacio');
        
    } else {
        setSuccessFor(nombre);
    }
}