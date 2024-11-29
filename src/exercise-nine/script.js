function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
}

/**
 * 1. Solicito un string al usuario (un numero) y lo guardo como mi primera variable
 * 2. Realizo un bucle desde 1 hasta ese numero
 * 3. Pinto si es fizz (3), buzz (5) o fizzbuzz (3 y 5) en función de que sea multiplo el numero dado
 */

const myNumber = parseInt(prompt("Introduce un numero")); // Paso 1
for(let i=1; i <= myNumber; i++) {  // Paso 2 


} if (myNumber % 3 === 0 && myNumber % 5 === 0) {
    //Esto es multiplo de 3 y 5
    render(`<p class="fizzbuzz__number">FizzBuzz!! El numero ${myNumber} es multiplo de 3 y 5</p>`);
} else if (myNumber % 3 === 0) {
     //Esto es multiplo de 3
     render(`<p class="fizz__number">Fizz!! El numero ${myNumber} es multiplo de 3</p>`);
} else if (myNumber % 5 === 0)    {
      //Esto es multiplo de 5
      render(`<p class="buzz__number">Buzz!! El numero ${myNumber} es multiplo de 5</p>`);
} else if (myNumber % 3 !== 0 && myNumber % 5 !== 0) {
    //Esto no entra en el juego
    render(`<p">No has tenido suerte con el numero ${myNumber}. Vuelve a intentarlo</p>`);
}
// Paso 3