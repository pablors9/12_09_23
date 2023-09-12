const apiConsulta = document.getElementById("atrapalos");

///objetoLiteral para el entrenadorPokemon
let trainer1 = {
  name: "",
  experience: 0,
  pokemons: [],
};

///Variables para el pokemon aleatorio
let nombre,
  exp = 0,
  imagen,
  experiencia = 0,
  llamadas = 0;

///Función que SUMA 1 cada click y GENERA un num aleatorio para la API
const pokeRandom = () => {
  if (llamadas == 5) {
    sumaExp();
    llamadas += 1;
  }
  if (llamadas > 4) return;

  let poketemporal = Math.floor(Math.random() * (151 - 1 + 1) + 1);

  añadeColeccion(poketemporal);
  pokedex(poketemporal);
  llamadas += 1;
};

///Función que AÑADE la imagen al HTML usando appendChild y querySelector
function añadeColeccion(poketemporal) {
  document.getElementById(
    "foto"
  ).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poketemporal}.png`;
  document.querySelector(".coleccion");
  const imagen = document.createElement("img");
  imagen.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poketemporal}.png`;
  imagen.class = "initColec";
  coleccion.appendChild(imagen);
}

///Función que SUMA experiencia del usuario en cada click CONSULTANDO API
/*
function sumaExp(poketemporal) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${poketemporal}`)
    .then((response) => response.json())
    .then((data) => {
      exp += data.base_experience;
      document.querySelector("#puntaje").innerHTML =
        "Tu experiencia inicial es:" + exp;
    });
  return exp;
}
*/

//Función que suma experiencia usando un ciclo

function sumaExp() {
  for (let i = 0; i < trainer1.pokemons.length; i += 1) {
    console.log(trainer1.pokemons[i].experience);
    trainer1.experience += trainer1.pokemons[i].experience;
  }
  console.log(trainer1.experience);
  document.querySelector("#puntaje").innerHTML =
    "Tu experiencia inicial es:" + trainer1.experience;
}

///Función que OBTIENE datos del pokemon atrapado
function pokedex(poketemporal) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${poketemporal}`)
    .then((response) => response.json())
    .then((data) => {
      let Pokemon = {
        name: "",
        experience: 0,
        type: "",
        hP: 0,
        attack: 0,
        defense: 0,
      };
      Pokemon.name = data.name;
      Pokemon.experience = data.base_experience;
      Pokemon.type = data.types[0].type.name;
      trainer1.pokemons.push(Pokemon);
    });
}

///Sección de EVENTOS
apiConsulta.addEventListener("click", pokeRandom);
