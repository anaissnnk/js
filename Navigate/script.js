//TODO: Select the last child of the <ol> tag and put it at the beginning of the list

const ol = document.querySelector("ol");
const olLastChild = ol.children[4];
const olFirstChild = ol.children[0];

ol.insertBefore(olLastChild, olFirstChild); //CELEBRATE THE SMALL VICTORIEEEES


//TODO: Move the <h2> of the third section in the second one and vice-

//TODO: Delete the last section from the DOM, we don't need it anyways