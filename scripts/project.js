import {
  GetPokemonOfType,
  GetPokemonInformation,
  SelectTeam,
  Capitalize,
  SelectMoves,
  MovesType,
} from "./pokemon-library.js";

let withMoves = false;

async function CallApi() {
  let searchType = document.querySelector("#type-list").value;
  let teamSize = document.querySelector("#size-input").value;
  let pokemon = await GetPokemonOfType(searchType);

  if (searchType == "") return;

  let team = SelectTeam(pokemon, teamSize);
  RenderPokemon(team);
}

function RenderPokemon(team) {
  const teamElement = document.querySelector("#pokemon-team");
  teamElement.innerHTML = "";
  team.forEach(async function (pokemon) {
    let information = await GetPokemonInformation(pokemon.url);

    const article = document.createElement("article");

    const img = document.createElement("img");
    img.setAttribute("src", information.sprites.front_default);
    img.setAttribute("alt", pokemon.name.replace("-", " "));

    const name = document.createElement("h2");
    name.textContent = Capitalize(pokemon.name.replace(/-/g, " "));

    const typeTags = information.types.map((item) => {
      return `<p class="${item.type.name}">${item.type.name}</p>`;
    });
    const typeDiv = document.createElement("div");
    typeDiv.className = "type-tags";
    typeDiv.innerHTML = typeTags.join("");

    article.append(img, name, typeDiv);

    if (withMoves) {
      const movesList = document.createElement("ul");
      let moves = await SelectMoves(pokemon.url);
      let moveTypes = await MovesType(moves);
      //let typeList = await Promise.all(moveTypes)
      console.log(moveTypes);
      moves = await moves.map(function (move, index) {
        return `<li class="${moveTypes[index]}">${move.name}</li>`;
      });
      movesList.innerHTML = moves.join("");

      const h4 = document.createElement("h4");
      h4.textContent = "Moves";

      article.appendChild(h4);
      article.appendChild(movesList);
    }

    teamElement.appendChild(article);
  });
}

document.querySelector("#generate-button").addEventListener("click", (e) => {
  e.preventDefault();
  CallApi();
});

document.querySelector("#moves").addEventListener("change", (e) => {
  withMoves = e.target.checked;
});
