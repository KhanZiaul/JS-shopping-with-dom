// function

let i = 0;

function displayData(cardTitle,cardPrice,cardQuantity,total){

  i++ ;

  const tableBody = document.getElementById('table-body');

  const rowElements = document.createElement('tr');

  rowElements.innerHTML = `
  <tr>
     <th>${count}</th>
     <td>${cardTitle}</td>
     <td>${cardPrice}</td>
     <td>${cardQuantity}</td>
     <td>${total}</td>
  </tr>
  `;

  tableBody.appendChild(rowElements);
}

let count = 0;

function totals() {

  count++;

  document.getElementById('total-product').innerText = count;
}


// first card

document.getElementById('first-card-btn').addEventListener('click',function(){

  const firstCardTitle = document.getElementById('first-card-title').innerText;

  const firstCardPrice = document.getElementById('first-card-price').innerText;
  const firstCardPriceInNumber = parseInt(firstCardPrice);

  const firstCardQuantity = document.getElementById('first-card-quantity').innerText;

  const firstCardQuantityInNumber = parseInt(firstCardQuantity);

  const total = firstCardQuantityInNumber * firstCardPriceInNumber ;

  totals();

  displayData(firstCardTitle,firstCardPrice,firstCardQuantity,total);

});

// second card

document.getElementById('second-card-btn').addEventListener('click',function(){

  const secondCardTitle = document.getElementById('second-card-title').innerText;

  const secondCardPrice = document.getElementById('second-card-price').innerText;
  const secondCardPriceInNumber = parseInt(secondCardPrice);

  const secondCardQuantity = document.getElementById('second-card-quantity').innerText;

  const secondCardQuantityInNumber = parseInt(secondCardQuantity);

  const total = secondCardQuantityInNumber + secondCardPriceInNumber ;

  totals();

  displayData(secondCardTitle,secondCardPrice,secondCardQuantity,total);

});