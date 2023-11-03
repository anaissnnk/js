//comfort shows collection

const collection = [
    //first item
    {
        name: 'Little Forest Winter/Spring',
        type: 'Type: Movie',
        genre: 'Genre: Drama',
        picture: 'https://images.justwatch.com/backdrop/11289115/s640/little-forest-winter-spring.%7Bformat%7D',
        language: 'Language: Japanese'
    },

    //second item
    {
        name: "Kiki's Delivery Service",
        type: 'Type: Animation Movie',
        genre: 'Genre: Slice of Life, Drama',
        picture: './Collection_pictures/kiki.avif',
        language: 'Language: Japanese'
    },

    //third item
    {
        name: "The Makanai",
        type: 'Type: Series',
        genre: 'Genre: Slice of Life, Drama',
        picture: 'https://www.wheninmanila.com/wp-content/uploads/2023/01/the-makanai-netflix-header.jpg',
        language: 'Language: Japanese'
    },

    //fourth item
    {
        name: "Whisper of the Heart",
        type: 'Type: Animation Movie',
        genre: 'Genre: Slice of Life, Drama',
        picture: './Collection_pictures/whisper_of_the_heart.jpg',
        language: 'Language: Japanese'
    },

    //fifth item
    {
        name: "Laid-back Camp",
        type: 'Type: Anime',
        genre: 'Genre: Slice of Life',
        picture: './Collection_pictures/laid_back_camp.webp',
        language: 'Language: Japanese'
    },

    //sixth item
    {
        name: "Ouran High School Host Club",
        type: 'Type: Anime',
        genre: 'Genre: Shoujo, Romance, Comedy, Slice of Life',
        picture: './Collection_pictures/ouran.avif',
        language: 'Language: Japanese'
    },

    //seventh item
    {
        name: "Flying Colours",
        type: 'Type: Movie',
        genre: 'Genre: Slice of Life, Drama',
        picture: 'https://pad.mymovies.it/filmclub/2015/03/089/coverlg_home.jpg',
        language: 'Language: Japanese'
    },

    //heighth item
    {
        name: "Howl's Moving Castle",
        type: 'Type: Animation Movie',
        genre: 'Genre: Romance, Drama',
        picture: './Collection_pictures/howl.jpg',
        language: 'Language: Japanese'
    },

    //ninth item
    {
        name: "March comes in like a Lion",
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

//h1
const h1 = document.createElement("h1");
document.body.append(h1);
h1.textContent = "Ananaïs' collection"

//header
const header = document.createElement("header");
document.body.append(header);

const headerImage = document.createElement("img");
headerImage.src = 'https://64.media.tumblr.com/a86753dba21858536a4d4507fd96df87/9c6995b07d21774e-b4/s1280x1920/0b287f96d52095896c5475b471120c882080635e.gifv';
header.append(headerImage);

const headerParagraph = document.createElement("p");
headerParagraph.textContent = "Ananaïs' comfort shows for a cozy time under the blanket sipping hot tea and eating cakes. Get the candles and heater ready! No one's leaving until Howl's Moving Castle's theme song starts playing, and don't get me started on Kiyo's and Ichiko's cooking. A new world awaits, and we all deserve a break after a long day, so let's get cozy!"
header.append(headerParagraph);

//main 
const main = document.createElement("main");
document.body.append(main);

//row div
const rowDiv = document.createElement("div");
rowDiv.setAttribute("class", "row");
main.append(rowDiv);


//collection content into cards
collection.forEach(movie => {
    //card
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    rowDiv.append(card);
    //card img
    const cardImage = document.createElement("img");
    card.append(cardImage);
    cardImage.src = movie.picture;
    //card name title
    const nameTitle = document.createElement("h2");
    card.append(nameTitle);
    nameTitle.textContent = movie.name;
    //card paragraph
    const typeParagraph = document.createElement("p");
    card.append(typeParagraph);
    typeParagraph.textContent = movie.type;
    const genreParagraph = document.createElement("p");
    card.append(genreParagraph);
    genreParagraph.textContent = movie.genre;
    const languageParagraph = document.createElement("p");
    card.append(languageParagraph);
    languageParagraph.textContent = movie.language;
    //card line separator
    const lineSeparator = document.createElement("hr");
    card.append(lineSeparator);
});