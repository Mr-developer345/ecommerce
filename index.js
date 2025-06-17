// const products = [{
//     //key //value
//     id: 1,
//     name:"wireless headphone",
//     price:3499,
//     Image:"wirelessheadphone.webp"

// },
// {   id:2,
//     name:"smartphone",
//     price:24999,
//     image:"samsunga16.webp"

// },

// {   id:3,
//     name:"laptop",
//     price:54999,
//     image:"hp elitebook.webp"

// },

// {   id:4,
//     name:"Smart Watch",
//     price:5499,
//     image:"zero smartwatch.webp"

// },
// ];


// const productContainer= document.getElementById("productContainer");
// products.forEach(product => {
//     const div = document.createElement("div");
//     div.classList.add("product-card");
//     div.innerHTMl= `
//     <img src="${product.image}" alt="${product.name}"/>
//     <h3>"${product.name}" </h3>
//     <p>${product.price}</p>
//     <button> Add To Cart </button>
//     `;
    
//     productContainer.appendChild(div);
// });




const products = [
  { //key   //value
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    image: "wirelessheadphone.webp"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 19999,
    image: "samsunga16.webp"
  },
  {
    id: 3,
    name: "Laptop",
    price: 54999,
    image: "hp elitebook.webp"
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 4999,
    image: "zero smartwatch.webp"
  }
];

const productContainer = document.getElementById("productContainer");

products.forEach(product => {
const div = document.createElement("div");
div.classList.add("product-card");
div.innerHTML = `
<img src="${product.image}" alt="${product.name}" />
<h3>${product.name}</h3>
<p>Rs. ${product.price}</p>
<button>Add to Cart</button>`;
productContainer.appendChild(div)
});


