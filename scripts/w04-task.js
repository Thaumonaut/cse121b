/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Jacob Perry",
    photo: "images/ImageOfMe.jpg",
    favoriteFoods: ["Oranges", "Chocolate", "Teriyaki", "Ice Cream"],
    hobbies: ["Gaming", "Hiking", "Learning", "Music", "Volleyball"],
    placesLived: [] 
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    'place': "Everett, WA",
    'length': "28 years"
})

myProfile.placesLived.push({
    'place': "Rexburg, ID",
    'length': "3 months"
})

/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;
/* Photo with attributes */
document.getElementById("photo").setAttribute("src", myProfile.photo)
document.getElementById("photo").setAttribute("alt", myProfile.name)

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
    let foodElement = document.createElement("li");
    foodElement.textContent = food;
    document.querySelector("#favorite-foods").appendChild(foodElement)
})


/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
    let hobbyElement = document.createElement("li");
    hobbyElement.textContent = hobby;
    document.querySelector("#hobbies").appendChild(hobbyElement)
})

/* Places Lived DataList */
myProfile.placesLived.forEach(location => {
    let place = document.createElement("dt");
    let length = document.createElement("dd");

    place.textContent = location['place'];
    length.textContent = location['length'];

    document.querySelector("#places-lived").appendChild(place)
    document.querySelector("#places-lived").appendChild(length)
})

