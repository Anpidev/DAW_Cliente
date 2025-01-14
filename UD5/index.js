/*Primero cargamos el DOM y hacemos una funcion flecha:
1.seleccionamos el formulario y los campos de la clase input,
seran guardados en una constante cada uno*/

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form"); 
    const inputs = document.querySelectorAll(".input"); 

//2-Con un forEach para recorrer cada input creamos dos eventos:
//uno de foco para cambiar los estilos añadiendo la clase creada en style.cc
//el otro mediante blur elimina la clase, restableciendo el estilo unna vez que no está señalado el input
    inputs.forEach((input) => {
        input.addEventListener("focus", () => {
            input.classList.add("focus");
        });

        input.addEventListener("blur", () => {
            input.classList.remove("focus");
        });
    });


//Ahora hacemos un evento para cuando se hace submit
    form.addEventListener("submit", (event) => {
        //Se añade un disparador para la validacion al comenzar
        let validado = true; 

        // Se recorren los inputs para validarlos
        inputs.forEach((input) => {
            //Si el input está vacio o solo se pulsa espacio se marca como no valido
            if (input.value.trim() === "") {
                alert(`El campo ${input.name} no puede estar vacío`);
                validado = false;
            } else if (input.type === "number" && input.value < 0) {
                alert(`El campo ${input.name} no puede ser un número negativo`);
                validado = false;
                //Se crea una funcion para validar el email
            } else if (input.type === "email" && !validarEmail(input.value)) {
                alert(`El campo ${input.name} debe ser un correo electrónico válido`);
                validado = false;
            }
        });

        // Si el formulario no está validado, prevenimos el envío mediante preventDefault se evita que el formulario se envie
        if (!validado) {
            event.preventDefault(); 
        } else {
            alert("Formulario enviado correctamente");
        }
    });

    // Función para validar correos electrónicos
    function validarEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Expresión regular para un correo válido
        return regex.test(email);
    }
});
