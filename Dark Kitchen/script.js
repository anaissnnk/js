// PRODUCTS COLLECTION
const products = [
    //FIRST PRODUCT
    {
        name: "Fudgy Matcha Brownie with Almonds",
        tags: "Matcha",
        description: "blablabla",
        price: "5 euros",
    },

    //SECOND PRODUCT
    {
        name: "Soft Honeyed Matcha Madeleines",
        tags: "Matcha",
        description: "blablabla",
        price: "4 euros",
    },

    //THIRD PRODUCT
    {
        name: "Fudgy Almond Chocolate Brownie",
        tags: "Chocolate",
        description: "blablabla",
        price: "5 euros",
    },

    //FOURTH ITEM 
    {
        name: "Bulbasaur Matcha Sand Cookies",
        tags: "Matcha",
        description: "blablabla",
        price: "3 euros",
    },

    //FIFTH ITEM
    {
        name: "Baked Matcha Basque Cheesecake",
        tags: "Matcha",
        description: "blablabla",
        price: "7 euros",
    },

    //SIXH ITEM
    {
        name: "Baked Speculoos and Chocolate Cheesecake",
        tags: "Chocolate",
        description: "blablabla",
        price: "7 euros",
    },

    //SEVENTH ITEM
    {
        name: "Chocolate Muffin with Cruncy Base",
        tags: "Chocolate",
        description: "blablabla",
        price: "5 euros",
    },

    //EIGHTH ITEM
    {
        name: "Matcha White Chocolate Cookie",
        tags: "Matcha",
        description: "blablabla",
        price: "5 euros",
    },

]

//FILTER - W3SCHOOL
// JavaScript code in "script.js"
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
  
    // Loop through the elements with the "filterDiv" class
    for (i = 0; i < x.length; i++) {
      // If the button's category matches the element's class or it's "all," show the element
      if (c == "all" || x[i].classList.contains(c)) {
        x[i].style.display = "block";
      } else {
        // Otherwise, hide the element
        x[i].style.display = "none";
      }
    }
  }
  
  // Function to add the "active" class to the clicked button
  function setActive(btn) {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    btn.className += " active";
  }
  
  // Add event listeners to the filter buttons
  var btns = document.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var category = this.getAttribute("data-category");
      filterSelection(category);
      setActive(this);
    });
  }
  
  // Initial call to show all items
  filterSelection("all");


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

//shopping cart


