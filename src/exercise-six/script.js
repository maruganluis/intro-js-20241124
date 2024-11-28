function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
}

/**
 * 1.Solicito al usuario un string (la nota del alumno), que guardaré como variable 
 *    Si la variable es <5 = el alumno esta suspenso
 *    Si la variable está entree 5-<7 = el alumno esta aprobado
 *    Si la variable esta entre 7-<9 = el alumno tiene un notable
 *    Si la variable esta entre 9-<10 = el alumno tiene un sobresaliente
 *    Si la variable tiene un 10 = el alumno tiene una matricula de honor
 * 2.Pintar un resultado de texto en función del valor numerico
 */

const result = parseFloat(prompt("Introduce la calificación del alumno (de 0 a 10)")); // Paso 1
if (result < 5) {
    render(`
        <p class="suspend__note">
              Suspenso.
        </p>
        
    `);
} else if (result >= 5 && result <7) {
    render(`
        <p class="approved__note">
              Aprobado.
        </p>
        
    `);
} else if (result >= 7 && result < 9) {
    render(`
        <p class="remarkable__note">
              Notable.
        </p>
        
    `);
} else if (result >= 9 && result < 10) {
    render(`
        <p class="outstanding__note">
              Sobresaliente.
        </p>
        
    `);
} else if (result === 10) {
    render(`
        <p class="honor__note">
              Matricula de honor.
        </p>
        
    `);
} 

// Paso 2



