let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
const maxIntentos = 5;

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('adivina');
    const resultado = document.getElementById('resultado');

    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            if (intentos >= maxIntentos) {
                resultado.textContent = `¡Se acabaron los intentos! El número era ${numeroSecreto}.`;
                input.disabled = true;
                return;
            }
            const valor = parseInt(input.value, 10);
            if (isNaN(valor)) {
                resultado.textContent = 'Por favor, ingresa un número válido.';
                return;
            }
            intentos++;
            if (valor < numeroSecreto) {
                resultado.textContent = `Demasiado bajo. Intento ${intentos} de ${maxIntentos}.`;
            } else if (valor > numeroSecreto) {
                resultado.textContent = `Demasiado alto. Intento ${intentos} de ${maxIntentos}.`;
            }else  {resultado.innerHTML = `
            Por fin haces algo bien ${intentos} intento(s).
            <br>
            <img src="/imagenes/emoji.webp" alt="¡Éxito!" width="600">`;
            input.disabled = true;
            return;
            }
         if (intentos === maxIntentos) 
            {
            resultado.innerHTML = `Eres más malo que un bot. El número es : ${numeroSecreto}.<br>
            <img src="/imagenes/mla.jpg" alt="Perdiste" width="600">`;
            input.disabled = true;
            }

            input.value = '';
        }
    });
});