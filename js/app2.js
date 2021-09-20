$(document).ready(function() {
    $('#nuevoUsu').modal() ;
    
    $('#nuevoUsu').bootstrapValidator({            
            fields: {
               nombre: {
                    validators: {
                        notEmpty: {
                            message: 'El nombre es obligatorio'
                        }
                    }
                },
                edad: {
                    validators: {
                        notEmpty: {
                            message: 'La edad es obligatoria'
                        },
                        integer: {
                        message: 'Debe introducir un valor entero'
                    }
                    }
                },
                direccion: {
                    validators: {
                        notEmpty: {
                            message: 'La dirección es obligatoria'
                        }
                    }
                }
            }
        });
    });