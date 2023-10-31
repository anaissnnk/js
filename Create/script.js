//add elements
function addElements() {

//variables
const learners = ["Lucas", "Kilian", "Alec", "Mohamed", "Pieter", "Rebecca", "Alessandro", "Josué", "Thibault", "Eduarda",
"Mohammed", "Funda", "Luis", "Alexandru", "Andrej", "Danté", "Jonasi", "Kelsey", "Rana", "Jana", "Sieglinde", "Gustave",
"Sezin", "Thierry", "Sylvie", "Anaïs"]
const currentArticle = document.querySelector('article');

//randomize array
shuffleArray(learners);

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

//create section for each learner
learners.forEach(learner => {
    const newSection = document.createElement("section");
    const newContent = document.createTextNode(learner);
    newSection.appendChild(newContent);
    currentArticle.appendChild(newSection);

//define backgroundColor
    const backgroundColor = getRandomColor();
    newSection.style.backgroundColor = backgroundColor;

// white and black text
  if (backgroundColor === "blue" || backgroundColor === "purple" || backgroundColor === "green"
  || backgroundColor === "red") {
    newSection.style.color = "white";
  } else {
    newSection.style.color = "black";
  }
});

}

// Call the addElements function on page load
window.onload = addElements;