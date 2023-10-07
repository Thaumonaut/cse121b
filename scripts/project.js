import {GetPokemonOfType, GetPokemonInformation, SelectTeam, Capitalize, SelectMoves} from "./pokemon-library.js" 

let withMoves = false;

async function CallApi() {
    let searchType = document.querySelector("#type-list").value
    let teamSize = document.querySelector("#size-input").value
    let pokemon = await GetPokemonOfType(searchType)
    
    if(searchType == "") return;

    let team = SelectTeam(pokemon, teamSize)
    RenderPokemon(team)
}

function RenderPokemon(team) {
    const teamElement = document.querySelector("#pokemon-team");
    teamElement.innerHTML = "";
    team.forEach(async function (pokemon) {
        let information = await GetPokemonInformation(pokemon.url);
        console.log(information)
       
        const article = document.createElement('article');
        
        const img = document.createElement('img')
        img.setAttribute('src', information.sprites.front_default)
        img.setAttribute('alt', pokemon.name.replace("-", " "))
        
        const name = document.createElement('h2');
        name.textContent = Capitalize(pokemon.name.replace(/-/g, " "));

        const typeTags = information.types.map(item => {
            return `<p>${item.type.name}</p>`
        })

        article.append(img, name)
        
        if(withMoves) {
            const movesList = document.createElement('ol');
            let moves = await SelectMoves(pokemon.url)
            moves = moves.map(move => `<li>${move}</li>`)
            movesList.innerHTML = moves.join("")

            article.appendChild(movesList)
        }

        teamElement.appendChild(article)
    });
}

document.querySelector("#generate-button").addEventListener("click", (e) => {
    e.preventDefault();
    CallApi()
})

document.querySelector("#moves").addEventListener("change", (e) => {
    withMoves = e.target.checked
})