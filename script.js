const pokemonsLegens = [
  { id: 1, name: "Elite 1", img: "./images/1.png", likes: 2 },
  {
    id: 2,
    name: "Elite 2",
    img: "./images/2.png",
    likes: 5,
  },
  {
    id: 3,
    name: "Elite 3",
    img: "./images/3.png",
    likes: 9,
  },
  {
    id: 4,
    name: "Elite 4",
    img: "./images/4.png",
    likes: 6,
  },
  {
    id: 5,
    name: "Elite 5",
    img: "./images/5.png",
    likes: 4,
  },
  {
    id: 6,
    name: "Elite 6",
    img: "./images/6.png",
    likes: 11,
  },
  {
    id: 7,
    name: "Elite 7",
    img: "./images/7.png",
    likes: 10,
  },
  {
    id: 8,
    name: "Elite 8",
    img: "./images/8.png",
    likes: 23,
  },
  {
    id: 9,
    name: "Elite 9",
    img: "./images/9.png",
    likes: 12,
  },
  {
    id: 10,
    name: "Elite 10",
    img: "./images/10.png",
    likes: 16,
  },
  {
    id: 11,
    name: "Elite 11",
    img: "./images/11.png",
    likes: 14,
  },
  {
    id: 12,
    name: "Elite 12",
    img: "./images/12.png",
    likes: 8,
  },
];

const createElement = (el) => document.createElement(el);
const PokeHouse = document.getElementById("pokemon-container");

//-------------------------------------------------------------

const formName = document.getElementById("foke-form");

//---------------------------------------------------------

function displayPokemons(pokemonsLegens) {
  const pokeCard = createElement("div");
  const pokeImg = createElement("img");
  const pokeName = createElement("h3");
  const pokeLikes = createElement("h3");
  const likesNum = createElement("h5");
  const likesBttn = createElement("button");
  const deleteButton = createElement("button");
  //-------------------------------------------------

  pokeCard.id = `poke-${pokemonsLegens.id}`;
  pokeCard.className = "poke-card";

  //----------------------------------------------
  pokeImg.src = pokemonsLegens.img;
  pokeImg.alt = `${pokemonsLegens.name}`;
  //---------------------------------------------

  pokeName.textContent = pokemonsLegens.name;
  pokeLikes.textContent = "Likes";
  //-------------------------------------------
  likesNum.className = "like-num";
  likesNum.textContent = pokemonsLegens.likes;

  //---------------------------------------------------
  likesBttn.className = "like-bttn";
  likesBttn.textContent = "💖";

  //----------------------------------------------------
  likesBttn.addEventListener("click", () => addLikes(pokemonsLegens, likesNum));
  //---------------------------------------------------
  deleteButton.className = "delete-bttn btn btn-danger";
  deleteButton.textContent = "Delete";
  //--------------------------------------------------
  deleteButton.addEventListener("click", () => deleterPoke(pokeCard));
  pokeCard.append(
    pokeImg,
    pokeName,
    pokeLikes,
    likesNum,
    likesBttn,
    deleteButton
  );
  PokeHouse.append(pokeCard);
}

function addLikes(pokemonsLegens, likesNum) {
  let data = ++pokemonsLegens.likes;
  likesNum.textContent = data;
}

function deleterPoke(pokeCard) {
  pokeCard.remove();
}

function createPokemons(e) {
  e.preventDefault();
  let pokeName = formName.querySelector("#name-input").value;
  // Need to be Improve;
  let lastPokemonId = pokemonsLegens.length + 1;

  let newCardPokemos = {
    id: lastPokemonId,
    name: pokeName,
    img: "./images/extra_11zon.png",
    likes: 0,
  };
  if (pokeName !== "") {
    pokemonsLegens.push(newCardPokemos);
  } else {
    return;
  }

  //------------------------------------------
  displayPokemons(newCardPokemos);

  //----------------------------------------
  formName.reset();
}

function init() {
  pokemonsLegens.forEach(displayPokemons);
  formName.addEventListener("submit", createPokemons);
}

init();
