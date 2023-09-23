/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Jacob Perry";
const currentYear = 2023;
const profilePicture = "images/ImageOfMe.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong> ${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`)


/* Step 5 - Array */
let favoriteFoods = ["Oranges", "Chocolate", "Teriyaki", "Ice Cream"];
foodElement.innerHTML = `<br>${favoriteFoods}`

let singleFavoriteFood = "Mashed Potatos and Chiken Gravy";
favoriteFoods.push(singleFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`

let firstFood = favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;

let lastElement = favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;









