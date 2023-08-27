const searchParams = new URLSearchParams(window.location.search);
const pokemonName = searchParams.get('name');

const pokemonDetails = document.getElementById('tudo')


function convertPokemonToLi(pokemon) {
    return `
    <section class="content ${pokemon.type}">
        
    <a href="./index.html"><button class="${pokemon.type}" id="arrow" type="button">
        ↞
    </button></a>
    <header class="header">
        <div class="title">
            <span class="name">${pokemon.name}</span>
            <span class="id">#${pokemon.number}</span>
        </div>
        <div class="container info">
            <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            
        </div>
        <div class="img">
            <img class="pokeball" src="./assets/Pokeball-PNG-Free-Download.png">
            <img class="pokemon" src="${pokemon.photo}"
            alt="${pokemon.name}">
        </div>    
    </header>
    <div class="container2">
        <ol class="buttons">
            <li><button class="button">About</button></li>
            <li><button class="button">Base Stats</button></li>
            <li><button class="button">Evolution</button></li>
            <li><button class="button">Movies</button></li>
        </ol>
    <div class="about">
        <ol class="key">
            <li>Species</li>
            <li>Height</li>
            <li>Weight</li>
            <li>Abilities</li>
        </ol>
        <ol class="value">
            <li>${pokemon.species}</li>
            <li>${pokemon.height}(cm)</li>
            <li>${pokemon.weight} lbs</li>
            <li>${pokemon.abilities}</li>
        </ol>
    </div>
    </div>
    
    `
}

 function loadPokemonPage(name) {
     pokeApi.getPokemons(name).then((carrega) => {
        const newHtml = convertPokemonToLi(carrega)
        pokemonDetails.innerHTML = newHtml
     })
}
loadPokemonPage(pokemonName)


