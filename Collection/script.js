//comfort shows collection

const collection = [
    //first item
    {
        name: 'Little Forest Winter/Spring',
        type: 'Movie',
        genre: 'Drama',
        language: 'Japanese'
    },

    //second item
    {
        name: "Kiki's Delivery Service",
        type: 'Animation Movie',
        genre: 'Slice of Life, Drama',
        language: 'Japanese'
    },

    //third item
    {
        name: "The Makanai",
        type: 'Series',
        genre: 'Slice of Life, Drama',
        language: 'Japanese'
    },

    //fourth item
    {
        name: "Whisper of the Heart",
        type: 'Animation Movie',
        genre: 'Slice of Life, Drama',
        language: 'Japanese'
    },

    //fifth item
    {
        name: "Laid-back Camp",
        type: 'Anime',
        genre: 'Slice of Life',
        language: 'Japanese'
    },

    //sixth item
    {
        name: "Ouran High School Host Club",
        type: 'Anime',
        genre: 'Shoujo, Romance, Comedy, Slice of Life',
        language: 'Japanese'
    },

    //seventh item
    {
        name: "Flying Colours",
        type: 'Movie',
        genre: 'Slice of Life, Drama',
        language: 'Japanese'
    },

    //heighth item
    {
        name: "Howl's Moving Castle",
        type: 'Animation Movie',
        genre: 'Romance, Drama',
        language: 'Japanese'
    },

    //ninth item
    {
        name: "March comes in like a Lion",
        type: 'Anime',
        genre: 'Slice of Life, Drama',
        language: 'Japanese'
    },

    //tenth item
    {
        name: "Boys over Flowers",
        type: 'Series',
        genre: 'Romance, Slice of Life, Drama',
        language: 'Japanese'
    },
  

  ]

//header
const header = document.createElement("header");
document.body.append(header);

const headerImage = document.createElement("img");
headerImage.src = 'https://i.pinimg.com/564x/15/9b/7b/159b7bc11901446c7463e4ce540da53e.jpg';
header.append(headerImage);

const headerParagraph = document.createElement("p");
headerParagraph.textContent = "Ananaïs' comfort shows for a cozy time under the blanket sipping hot tea and eating cakes. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
header.append(headerParagraph);

//body
const main = document.createElement("main");
document.body.append(main);

const rowDiv = document.createElement("div");
rowDiv.setAttribute("class", "row");
main.append(rowDiv);

const card = document.createCard


collection.forEach(movie) => {
//blablabla
    
};
