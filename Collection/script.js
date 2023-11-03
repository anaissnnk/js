//comfort shows collection

const collection = [
    //first item
    {
        name: 'Little Forest Winter/Spring',
        type: 'Movie',
        genre: 'Drama',
        picture: 'https://images.justwatch.com/backdrop/11289115/s640/little-forest-winter-spring.%7Bformat%7D',
        language: 'Japanese'
    },

    //second item
    {
        name: "Kiki's Delivery Service",
        type: 'Animation Movie',
        genre: 'Slice of Life, Drama',
        picture: './Collection_pictures/kiki.avif',
        language: 'Japanese'
    },

    //third item
    {
        name: "The Makanai",
        type: 'Series',
        genre: 'Slice of Life, Drama',
        picture: 'https://www.wheninmanila.com/wp-content/uploads/2023/01/the-makanai-netflix-header.jpg',
        language: 'Japanese'
    },

    //fourth item
    {
        name: "Whisper of the Heart",
        type: 'Animation Movie',
        genre: 'Slice of Life, Drama',
        picture: './Collection_pictures/whisper_of_the_heart.jpg',
        language: 'Japanese'
    },

    //fifth item
    {
        name: "Laid-back Camp",
        type: 'Anime',
        genre: 'Slice of Life',
        picture: './Collection_pictures/laid_back_camp.webp',
        language: 'Japanese'
    },

    //sixth item
    {
        name: "Ouran High School Host Club",
        type: 'Anime',
        genre: 'Shoujo, Romance, Comedy, Slice of Life',
        picture: './Collection_pictures/ouran.avif',
        language: 'Japanese'
    },

    //seventh item
    {
        name: "Flying Colours",
        type: 'Movie',
        genre: 'Slice of Life, Drama',
        picture: 'https://pad.mymovies.it/filmclub/2015/03/089/coverlg_home.jpg',
        language: 'Japanese'
    },

    //heighth item
    {
        name: "Howl's Moving Castle",
        type: 'Animation Movie',
        genre: 'Romance, Drama',
        picture: './Collection_pictures/howl.jpg',
        language: 'Japanese'
    },

    //ninth item
    {
        name: "March comes in like a Lion",
        type: 'Anime',
        genre: 'Slice of Life, Drama',
        picture: './Collection_pictures/march.webp',
        language: 'Japanese'
    },

    //tenth item
    {
        name: "Boys over Flowers",
        type: 'Series',
        genre: 'Romance, Slice of Life, Drama',
        picture: './Collection_pictures/hana.webp',
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

//main 
const main = document.createElement("main");
document.body.append(main);

//row div
const rowDiv = document.createElement("div");
rowDiv.setAttribute("class", "row");
main.append(rowDiv);

collection.forEach(movie => {
    //card
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    rowDiv.append(card);
    //card img
    const cardImage = document.createElement("img");
    card.append(cardImage);
    cardImage.src = movie.picture;
    //card paragraph
    const nameParagraph = document.createElement("p");
    card.append(nameParagraph);
    nameParagraph.textContent = movie.name;
    const typeParagraph = document.createElement("p");
    card.append(typeParagraph);
    typeParagraph.textContent = movie.type;
    const genreParagraph = document.createElement("p");
    card.append(genreParagraph);
    genreParagraph.textContent = movie.genre;
    const languageParagraph = document.createElement("p");
    card.append(languageParagraph);
    languageParagraph.textContent = movie.language;
});