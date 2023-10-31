//Select the last child of the <ol> tag and put it at the beginning of the list

const ol = document.querySelector("ol");
const olLastChild = ol.children[4];
const olFirstChild = ol.children[0];

ol.insertBefore(olLastChild, olFirstChild); //CELEBRATE THE SMALL VICTORIEEEES

//Move the <h2> of the third section in the second one and vice-versa

const thirdSection = document.querySelectorAll("section")[1];
const secondSection = document.querySelectorAll("section")[2];
const thirdsectionH2 = document.querySelectorAll("h2")[1];
const secondsectionH2 = document.querySelectorAll("h2")[2];

thirdSection.insertBefore(secondsectionH2, thirdSection.firstChild);
secondSection.insertBefore(thirdsectionH2, secondSection.firstChild);


//Delete the last section from the DOM, we don't need it anyways
const parent = document.querySelector("main");
parent.removeChild(secondSection);