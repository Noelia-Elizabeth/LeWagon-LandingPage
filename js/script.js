let section = document.querySelector('section')

window.addEventListener ('load', function () {
    perros.forEach((perro,i) => {
        section.innerHTML += `
        <article>
                <h3>${perro.raza}</h3>
                <div class="imagen ${clases[i]}"></div>
                <p>${perro.descripcion}</p>
        </article>
        `
    })
})

