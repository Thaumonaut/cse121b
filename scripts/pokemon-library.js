
/// Get all pokemon of input (string) type
export async function GetPokemonOfType (pokemonType) {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${pokemonType}/`);
    const json = await response.json();
    return json.pokemon;
}

export function SelectTeam (pokemonList, size = 6) {
    let indexes = GetRandomArrayOfLength(size, pokemonList.length)
    console.log(indexes)
    let pokemonTeam = Array.from(indexes).map(index => pokemonList[index].pokemon)
    return pokemonTeam;
}

export async function SelectMoves(pokemon) {
    const information = await GetPokemonInformation(pokemon)
    const moves = information.moves
    const randomList = GetRandomArrayOfLength(4, information.moves.length)
    const movesList = randomList.map(ID => Capitalize(moves[ID].move.name.replace(/-/g, " ")))
    return movesList
}

export function GetRandomArrayOfLength(amount, maxValue) {
    let randomValues = new Set();
    let attempts = 0;
    while(true) {
        let initSize = randomValues.size;
        randomValues.add(Math.floor(Math.random() * maxValue))
        if(randomValues.size == amount || attempts > 20) {
            break;
        } else if (randomValues.size == initSize) {
            attempts++;
        }
    }
    return Array.from(randomValues)
}

export async function GetPokemonInformation(pokemon) {
    const response = await fetch(pokemon)
    const data = await response.json();
    return data;
}

async function PopulateSelect() {
    const response = await fetch("https://pokeapi.co/api/v2/type/");
    const json = await response.json();
    const options = await json.results
        .filter((type) => type.name != "unknown" && type.name != "shadow")
        .map(type => {
            const name = type.name;
            const option = document.createElement('option');
            option.value = name;
            option.id = name;
            option.textContent = Capitalize(name)
            return option
        })

    document.querySelector('#type-list').append(...options)
}

export function Capitalize(input) {
    return input.split(" ")
        .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
        .join(" ")
}

PopulateSelect()