/*Modify the script.js to create a new <section> with a random background-color for each learner in your group.
This section should contain a paragraph with the name of the learner.
Those sections should be appended in the <article>
If the background is dark the text should be white, if the background is light the text should be black
Find a way so that everytime you load the page the order of the elements changes!*/

document.body.onload = addElements;

function addElements() {

const learners = ["Lucas", "Kilian", "Alec", "Mohamed", "Pieter", "Rebecca", "Alessandro", "Josué", "Thibault", "Eduarda",
"Mohammed", "Funda", "Luis", "Alexandru", "Andrej", "Danté", "jonasi", "Kelsey", "Rana", "Jana", "Sieglinde", "Gustave",
"Sezin", "Thierry", "Sylvie", "Anaïs"]

const currentArticle = document.querySelector('article');

learners.forEach(learner => {
    const newSection = document.createElement("section");
    const newContent = document.createTextNode(learner);
    newSection.appendChild(newContent);
    currentArticle.appendChild(newSection);
  });
}
