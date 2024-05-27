function NumeroAleatorio(max) {
    return Math.floor(Math.random() * max) + 1;
}

// Funcion principal
function simuladorAdivi() {
    const maxIntentos = 3;
    const numeroSecreto = NumeroAleatorio(10);
    let intentos = 0;
    let adivinado = false;

    alert("Bienvenido al juego de adivinanzas. Tienes 3 intentos para adivinar un número del 1 al 10.");


    while (intentos < maxIntentos && !adivinado) {
        const input = prompt("Intenta adivinar el número:");

        // Cuando en el prompt el jugador selecciona cancelar
        if (input === null) {
            alert("Gracias por jugar.");
            return; 
        }

        const intento = parseInt(input);

        if (!isNaN(intento)) {
            if (intento > 10) {
                alert("Valor incorrecto. Elije un número del 1 al 10!.");
            } else if (intento === numeroSecreto) {
                alert("¡Felicidades! ¡Has adivinado el número!");
                adivinado = true;
            } else {
                intentos++;
                alert(`Incorrecto. Te quedan ${maxIntentos - intentos} intentos.`);
            }
        } else {
            alert("Por favor, ingresa un número válido.");
        }
    }

    if (!adivinado) {
        alert(`¡Lo siento! El número secreto era ${numeroSecreto}.`);
    }
}

// Ejecuta el simulador
simuladorAdivi();