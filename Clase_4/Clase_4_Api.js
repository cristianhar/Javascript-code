// //id , nombre , fecha lanzamiento , imagen , puntuacion, nombre plataformas
function mostrarjuegos() {
    let cardContainer = document.querySelector('#card .row');
    fetch('https://api.rawg.io/api/games?key=d5418abfa6cc4ac8b9b1abd51ef2f0e6')
        .then(response => response.json())
        .then(data => {
            cardContainer.innerHTML = ''; // Limpiar el contenido previo

            data.results.forEach(element => {
                cardContainer.innerHTML += `
                <div class="col-md-3 mb-4">
                    <div class="card" style="width: 100%;">
                        <img src="${element.background_image}" class="card-img-top" alt="${element.name}">
                        <div class="card-body">
                            <h5 class="card-title">${element.name}</h5>
                            <p class="card-text">Fecha de lanzamiento: ${element.released}</p>
                            <p class="card-text">Puntuación: ${element.rating}</p>
                            <p class="card-text">Plataformas: ${element.platforms.map((y) => y.platform.name).join(', ')}</p>
                        </div>
                    </div>
                </div>
                `;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

function ocultarjuegos() {
    let cardContainer = document.querySelector('#card .row');
    cardContainer.innerHTML = ''; // Limpiar el contenido
}
