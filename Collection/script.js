//comfort shows collection

const collection = [
    //first item
    {
        name: '「小森冬と春」',
        translation: 'Little Forest Winter/Spring',
        type: 'Movie',
        genre: 'To appreciate slow living.',
        picture: 'https://images.justwatch.com/backdrop/11289115/s640/little-forest-winter-spring.%7Bformat%7D',
        language: 'Language: Japanese',
        trailer: "https://www.youtube.com/watch?v=o1PFT10WEKw"

    },

    //second item
    {
        name: "「魔女のキキ」",
        translation: "Kiki's Delivery Service",
        type: 'Animation Movie',
        genre: 'To feel the sparks again.',
        picture: './Collection_pictures/kiki.avif',
        language: 'Language: Japanese',
        trailer: "https://www.youtube.com/watch?v=4bG17OYs-GA"
    },

    //third item
    {
        name: "「舞妓さんの賄いさん」",
        translation: "The Makanai",
        type: 'Series',
        genre: 'To dive in the Maiko culture.',
        picture: 'https://www.wheninmanila.com/wp-content/uploads/2023/01/the-makanai-netflix-header.jpg',
        language: 'Language: Japanese',
        trailer: "https://www.youtube.com/watch?v=uTQ1oCVR74o"
    },

    //fourth item
    {
        name: "「耳をすませば」",
        translation: "Whisper of the Heart",
        type: 'Animation Movie',
        genre: 'To trust the process (yourself).',
        picture: './Collection_pictures/whisper_of_the_heart.jpg',
        language: 'Language: Japanese',
        trailer: "https://www.youtube.com/watch?v=0pVkiod6V0U"
    },

    //fifth item
    {
        name: "「ゆるキアンプ」",
        translation: "Laid-back Camp",
        type: 'Anime',
        genre: 'To take a break, in nature.',
        picture: './Collection_pictures/laid_back_camp.webp',
        language: 'Language: Japanese',
        trailer: "https://www.youtube.com/watch?v=TkRBk94fMwA"
    },

    //sixth item
    {
        name: "「桜蘭高校ホスト部」",
        translation: "Ouran High School Host Club",
        type: 'Anime',
        genre: 'To laugh and daydream hearthily.',
        picture: './Collection_pictures/ouran.avif',
        language: 'Language: Japanese',
        trailer: "https://www.youtube.com/watch?v=rAjvIOWH1r4"
    },

    //seventh item
    {
        name: "「ビリギャル」",
        translation: "Flying Colours",
        type: 'Movie',
        genre: 'To trace your own destiny.',
        picture: './Collection_pictures/biri_gyaru.webp',
        language: 'Language: Japanese',
        trailer: "https://www.youtube.com/watch?v=6R29eQGsQAk"
    },

    //heighth item
    {
        name: "「ハウルの動く城」",
        translation: "Howl's Moving Castle",
        type: 'Animation Movie',
        genre: 'To fall in love with a wizard.',
        picture: './Collection_pictures/howl.jpg',
        language: 'Language: Japanese',
        trailer: "https://www.youtube.com/watch?v=iwROgK94zcM"
    },

    //ninth item
    {
        name: "「三月のライオン」",
        translation: "March comes in like a Lion",
        type: 'Anime',
        genre: 'To heal your inner child.',
        picture: './Collection_pictures/march.webp',
        language: 'Language: Japanese',
        trailer: "https://www.youtube.com/watch?v=ZL5nnx4vd7k"
    },

    //tenth item
    {
        name: "이상한 변호사 우영우",
        translation: "Extraordinary Attorney Woo",
        type: 'Series',
        genre: 'To appreciate those around you.',
        picture: './Collection_pictures/attorney_woo.jpg',
        language: 'Japanese',
        trailer: "https://www.youtube.com/watch?v=9SdYFYflVbw"
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
    //card name translation
    const nameTranslation = document.createElement("h5");
    card.append(nameTranslation);
    nameTranslation.textContent = movie.translation;
    //card movie type
    const typeParagraph = document.createElement("p");
    card.append(typeParagraph);
    typeParagraph.textContent = movie.type;
    if (typeParagraph.textContent === "Movie") {
        typeParagraph.className = "movie";
    } else if (typeParagraph.textContent === "Animation Movie") {
        typeParagraph.className = "animationMovie";
    } else if (typeParagraph.textContent === "Series") {
        typeParagraph.className = "series";
    } else if (typeParagraph.textContent === "Anime") {
        typeParagraph.className = "anime";
    };
     //card for whom?
    const genreParagraph = document.createElement("p");
    card.append(genreParagraph);
    genreParagraph.textContent = movie.genre;
    genreParagraph.className = "genre";
    //const languageParagraph = document.createElement("p");
    //card.append(languageParagraph);
    //languageParagraph.textContent = movie.language;
    //card line separator
    const lineSeparator = document.createElement("hr");
    card.append(lineSeparator);
    //card youtube trailer
    //card link
    const link = document.createElement("a");
    card.append(link);
    link.href= movie.trailer;
    //card image within link
    const videoImg = document.createElement("img");
    link.append(videoImg);
    videoImg.src = "./Collection_pictures/video_icon.png";
    videoImg.className = "videoImg";
});

