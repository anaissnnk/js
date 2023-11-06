// PRODUCTS COLLECTION
const products = [
    //FIRST PRODUCT
    {
        name: "Fudgy Matcha Brownie",
        tags: "Dessert",
        description: "blablabla",
        price: "5 euros",
    },

    //SECOND PRODUCT
    {
        name: "Matcha Madeleines",
        tags: "Dessert",
        description: "blablabla",
        price: "4 euros",
    },

    //THIRD PRODUCT
    {
        name: "Chocolate Brownie",
        tags: "Dessert",
        description: "blablabla",
        price: "5 euros",
    },

    //FOURTH ITEM 
    {
        name: "Bulbasaur Sand Cookies",
        tags: "Dessert",
        description: "blablabla",
        price: "3 euros",
    },

    //FIFTH ITEM
    {
        name: "Baked Matcha Basque Cheesecake",
        tags: "Dessert",
        description: "blablabla",
        price: "7 euros",
    },

    //SIXH ITEM
    {
        name: "Baked Speculoos and Chocolate Cheesecake",
        tags: "Dessert",
        description: "blablabla",
        price: "7 euros",
    },

    //SEVENTH ITEM
    {
        name: "Taro Cream Cheese Bubble Tea",
        tags: "Drink",
        description: "blablabla",
        price: "5 euros",
    },

    //EIGHTH ITEM
    {
        name: "Brown Sugar Bubble Tea",
        tags: "Drink",
        description: "blablabla",
        price: "5 euros",
    },

]

//FUNCTIONS
//Product Name
document.body.querySelectorAll("h2").forEach((h2, index) => {
    h2.textContent = products[index].name;
});

//Product Tags
document.body.querySelectorAll("p.product-tags").forEach((p, index) => {
    p.textContent = products[index].tags;
});

//Product Description
document.body.querySelectorAll("p.product-description").forEach((p, index) => {
    p.textContent = products[index].description;
});

//Product Description
document.body.querySelectorAll("p.product-price").forEach((p, index) => {
    p.textContent = products[index].price;
});


