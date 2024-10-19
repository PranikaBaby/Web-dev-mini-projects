const pokemonList = [
    { name: "pikachu", image: "https://img.pokemondb.net/artwork/large/pikachu.jpg" },
    { name: "bulbasaur", image: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg" },
    { name: "charmander", image: "https://img.pokemondb.net/artwork/large/charmander.jpg" },
    { name: "squirtle", image: "https://img.pokemondb.net/artwork/large/squirtle.jpg" },
    { name: "jigglypuff", image: "https://img.pokemondb.net/artwork/large/jigglypuff.jpg" },
];

let currentPokemon;

function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    currentPokemon = pokemonList[randomIndex];
    document.getElementById("pokemon-image").src = currentPokemon.image;
    document.getElementById("guess-input").value = '';
    document.getElementById("message").textContent = '';
}

document.getElementById("submit-guess").addEventListener("click", function () {
    const userGuess = document.getElementById("guess-input").value.toLowerCase();
    if (userGuess === currentPokemon.name) {
        document.getElementById("message").textContent = "Correct! 🎉";
    } else {
        document.getElementById("message").textContent = `Wrong! The correct answer was ${currentPokemon.name}.`;
    }
});

document.getElementById("next-pokemon").addEventListener("click", getRandomPokemon);

// Initialize the game
getRandomPokemon();
