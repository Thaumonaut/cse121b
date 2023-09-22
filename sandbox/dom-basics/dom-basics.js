const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

//Insert Image into html
const newImg = document.createElement('img');
newImg.setAttribute('src', "https://placekitten.com/640/360");
newImg.setAttribute('alt', "Random kitten image");
document.body.appendChild(newImg);

// Insert new section
const newSection = document.createElement("section");
newSection.innerHTML = `
    <h2>CSE 121b</h2>
    <p>Welcome to Javascript Language</p>
`;
document.body.appendChild(newSection);
