let resultsRootElement = document.querySelector(".results");

// Fetching the data
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(json => {
    let data = json; 

    data.forEach(product => {
      renderProduct(product);
    });
  })
  .catch(error => console.log('Error:', error));

// Function to render each product
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
