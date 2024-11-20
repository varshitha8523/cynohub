let resultsRootElement = document.querySelector(".results");
let searchButton = document.getElementById("search-button");
let searchInput = document.getElementById("search-input");
let productsData = [];

// Fetching the data
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        productsData = json; 
        renderProducts(productsData); 
    })
    .catch(error => console.log('Error:', error));

// Function to render products
function renderProducts(products) {
    resultsRootElement.innerHTML = ''; 
    products.forEach(product => {
        renderProduct(product);
    });
}

// Function to render a single product
function renderProduct(product) {
    let resultDiv = document.createElement('div');
    let resultImage = document.createElement('img');
    let resultTitle = document.createElement('h4');
    let resultPrice = document.createElement('p');
    let purchaseButton = document.createElement('button');

    resultImage.src = product.image;
    resultTitle.innerText = product.title;
    resultPrice.innerText = `$${product.price}`;
    purchaseButton.innerHTML = 'Purchase';

    resultDiv.appendChild(resultImage);
    resultDiv.appendChild(resultTitle);
    resultDiv.appendChild(resultPrice);
    resultDiv.appendChild(purchaseButton);
    resultDiv.className = 'result';

    resultsRootElement.appendChild(resultDiv);
}

// Search functionality
searchButton.addEventListener('click', () => {
    let searchText = searchInput.value.toLowerCase();
    let filteredProducts = productsData.filter(product =>
        product.title.toLowerCase().includes(searchText)
    );
    renderProducts(filteredProducts);
});
