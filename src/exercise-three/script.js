function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
}

/**
 * 1. Solicito el primer string (peso) y lo guardo en una variable
 * 2. Solicito el segundo string (altura) y lo guardo en una variable
 * 3. Calculo el IMC usando las dos variables anteriores (IMC= Peso/(Altura en m)**2)
 * 4. El IMC resultante lo guardo en una nueva variable
 * 5. Pintar si el IMC resultante (variable tres) es "Obesidad de clase II (si el IMC es de 35 a 39.9)" 
*/

const weight = prompt("Introduzca su peso"); // Paso 1
const height = prompt("Introduzca su altura separada por punto, por ejemplo: 1.70"); // Paso 2
const imcResult = weight / (height **2); // Paso 3 y 4

render(`
   <p>
        Tu IMC es: ${imcResult}
    </p>

`)

// Comprobar la categoría del IMC

if (imcResult < 18.5) {

    render(`
       <p class="bad__data">
            Clasificación: Bajo peso
        </p>
    
    `);
}

else if (imcResult >= 18.5 && imcResult <24.9) {

    render(`
        <p class="good__data">
            Clasificación: Peso normal
        </p>
    
    `);
}

else if (imcResult >= 25 && imcResult < 29.9) {

    render(`
      <p class="bad__data">
            Clasificación: Sobrepeso
        </p>
    
    `);
}

else if (imcResult >= 30 && imcResult < 34.9) {

    render(`
        <p class="bad__data">
            Clasificación: Obesidad tipo I
        </p>
    
    `);
}

else if (imcResult >= 35 && imcResult < 39.9) {

    render(`
         <p class="bad__data">
            Clasificación: Obesidad tipo II
        </p>
    
    `);

}

else if (imcResult >= 40) {

    render(`
        <p class="bad__data">
            Clasificación: Obesidad tipo III
        </p>
    
    `);
}

else if (isNaN(imcResult)) {
    render(`
        <p class="error__data">
            Introduzca valores validos. Por ejemplo, peso: 70 / altura: 1.70
        </p>
    
    `);
}