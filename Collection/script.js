//comfort shows collection

const collection = [
    //first item
    {
        name: 'Name: Little Forest Winter/Spring',
        type: 'Type: Movie',
        genre: 'Genre: Drama',
        picture: 'https://images.justwatch.com/backdrop/11289115/s640/little-forest-winter-spring.%7Bformat%7D',
        language: 'Language: Japanese'
    },

    //second item
    {
        name: "Name: Kiki's Delivery Service",
        type: 'Type: Animation Movie',
        genre: 'Genre: Slice of Life, Drama',
        picture: './Collection_pictures/kiki.avif',
        language: 'Language: Japanese'
    },

    //third item
    {
        name: "Name: The Makanai",
        type: 'Type: Series',
        genre: 'Genre: Slice of Life, Drama',
        picture: 'https://www.wheninmanila.com/wp-content/uploads/2023/01/the-makanai-netflix-header.jpg',
        language: 'Language: Japanese'
    },

    //fourth item
    {
        name: "Name: Whisper of the Heart",
        type: 'Type: Animation Movie',
        genre: 'Genre: Slice of Life, Drama',
        picture: './Collection_pictures/whisper_of_the_heart.jpg',
        language: 'Language: Japanese'
    },

    //fifth item
    {
        name: "Name: Laid-back Camp",
        type: 'Type: Anime',
        genre: 'Genre: Slice of Life',
        picture: './Collection_pictures/laid_back_camp.webp',
        language: 'Language: Japanese'
    },

    //sixth item
    {
        name: "Name: Ouran High School Host Club",
        type: 'Type: Anime',
        genre: 'Genre: Shoujo, Romance, Comedy, Slice of Life',
        picture: './Collection_pictures/ouran.avif',
        language: 'Language: Japanese'
    },

    //seventh item
    {
        name: "Name: Flying Colours",
        type: 'Type: Movie',
        genre: 'Genre: Slice of Life, Drama',
        picture: 'https://pad.mymovies.it/filmclub/2015/03/089/coverlg_home.jpg',
        language: 'Language: Japanese'
    },

    //heighth item
    {
        name: "Name: Howl's Moving Castle",
        type: 'Type: Animation Movie',
        genre: 'Genre: Romance, Drama',
        picture: './Collection_pictures/howl.jpg',
        language: 'Language: Japanese'
    },

    //ninth item
    {
        name: "Name: March comes in like a Lion",
        type: 'Type: Anime',
        genre: 'Genre: Slice of Life, Drama',
        picture: './Collection_pictures/march.webp',
        language: 'Language: Japanese'
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
headerImage.src = 'https://64.media.tumblr.com/a86753dba21858536a4d4507fd96df87/9c6995b07d21774e-b4/s1280x1920/0b287f96d52095896c5475b471120c882080635e.gifv';
header.append(headerImage);

const headerParagraph = document.createElement("p");
headerParagraph.textContent = "Ananaïs' comfort shows for a cozy time under the blanket sipping hot tea and eating cakes. Get the candles and heater ready!"
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