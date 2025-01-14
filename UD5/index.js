document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form"); // Seleccionamos el formulario
    const inputs = document.querySelectorAll(".input"); // Seleccionamos todos los campos con la clase "input"

    form.addEventListener("submit", (event) => {
        let validado = true; // Restablecemos la validación al comenzar

        // Iteramos sobre todos los inputs para validarlos
        inputs.forEach((input) => {
            if (input.value.trim() === "") {
                alert(`El campo ${input.name} no puede estar vacío`);
                validado = false; // Marcamos como no válido
            } else if (input.type === "number" && input.value < 0) {
                alert(`El campo ${input.name} no puede ser un número negativo`);
                validado = false;
            } else if (input.type === "email" && !validarEmail(input.value)) {
                alert(`El campo ${input.name} debe ser un correo electrónico válido`);
                validado = false;
            }

            // Evento focus para cambiar el color de fondo
            input.addEventListener("focus", () => {
                input.classList.add("focus")
            });

            // Evento blur para restablecer el color de fondo al salir del campo
            input.addEventListener("blur", () => {
                input.classList.remove("focus")
            });
        });

        // Si el formulario no está validado, prevenimos el envío
        if (!validado) {
            event.preventDefault(); // Evita que el formulario se envíe
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
