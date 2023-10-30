const elements = document.querySelectorAll(".important"); // Get all elements with the class "important"

elements.forEach(element => {
    element.setAttribute('title', 'This is an important item');
});

//Select all the img tags and loop through them. If they have no important class, turn their display property to none
const images = document.querySelectorAll('img');

images.forEach(image => {
    if (image.classList.contains('important')) {
        console.log(image);
    } else {
        image.style.display = 'none';
    }
});

//Loop through all the paragraphs and display their content in the console.
//If the paragraph has a class, display its classname as well

//const paragraphs = document.querySelectorAll('p');
//paragraphs.forEach(paragraph => {
//    if (paragraph.getAttribute('class')) {
//        console.log(paragraph.classList);
//        console.log(paragraph.textContent);
//    } else {
//    console.log(paragraph);
//    
//}
//});

//Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
const colors = ["red", "blue", "green", "purple", "orange"];
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
    if (!paragraph.getAttribute('class')) {
        paragraph.style.color = colors[ % colors.length];
        console.log(paragraph);
    } else {
        console.log(paragraph);
    }
})