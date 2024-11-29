function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
}

/**
 * 1. Solicito un string al usuario (una URL) y la guardo como mi primera variable
 * 2. Pinto el dominio, que guardaré como segunda variable
 * 3. Si esta segunda variable es un dominio o subdominio Github lo indico, sino no
 */


const url = prompt("Introduce la URL de tu sitio favorito"); // Paso 1
const domain = new URL(url).hostname;

render(`
    <p>
          Este es su dominio: ${domain} 
    </p>
`);

// Paso 2

if (domain.endsWith("github.com")) {
    render(`
        <p class="contain__github">
              Este es un dominio o subdominio Github
        </p>
    `);
} else {
        render(`
            <p class="contain__other">
                  Este no es un dominio o subdominio Github
            </p>
`);
}
// Paso 3