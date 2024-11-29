function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
}

/**
 * 1. Solicito un string al usuario (un numero) y lo guardo como mi primera variable
 * 2. Realizo un bucle desde 0 hasta ese numero
 * 3. Pinto si es par o impar en función de la estructura proporcionada
 */

const myNumber = parseInt(prompt("Introduce un numero")); // Paso 1 - parseInt para que los numeros sean enteros (sino no podriamos saber si son pares o impares)
for(let i=0; i === myNumber; i++) {  // Paso 2 


} if (myNumber % 2 === 0) {
     //Esto es par
     render(`<p class="even__number">El numero ${myNumber} es par</p>`);
} else {
      //Esto es impar
      render(`<p class="odd__number">El numero ${myNumber} es impar</p>`);
}
// Paso 3
