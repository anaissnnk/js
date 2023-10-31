/*Modify the script.js to create a new <section> with a random background-color for each learner in your group.
This section should contain a paragraph with the name of the learner.
Those sections should be appended in the <article>
If the background is dark the text should be white, if the background is light the text should be black
Find a way so that everytime you load the page the order of the elements changes!*/

//add elements
function addElements() {

//variables
const learners = ["Lucas", "Kilian", "Alec", "Mohamed", "Pieter", "Rebecca", "Alessandro", "Josué", "Thibault", "Eduarda",
"Mohammed", "Funda", "Luis", "Alexandru", "Andrej", "Danté", "jonasi", "Kelsey", "Rana", "Jana", "Sieglinde", "Gustave",
"Sezin", "Thierry", "Sylvie", "Anaïs"]
const currentArticle = document.querySelector('article');

//create new section for every learner
shuffleArray(learners);

learners.forEach(learner => {
    const newSection = document.createElement("section");
    const newContent = document.createTextNode(learner);
    newSection.appendChild(newContent);
    currentArticle.appendChild(newSection);
    newSection.style.backgroundColor = getRandomColor();
  });
}

//randomize array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//background color
const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];

// Function to pick a random color from the array
function getRandomColor() {
  // Generate a random index within the range of the colors array
  const randomIndex = Math.floor(Math.random() * colors.length);

  // Use the random index to pick a color from the array
  return colors[randomIndex];
}

// Apply the random color as the background
//const section = document.querySelector('section');
//section.style.backgroundColor = getRandomColor();


// Call the addElements function on page load
window.onload = addElements;