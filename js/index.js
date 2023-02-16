// function

// create element and append it into parent function

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

//serial of total function

let count = 0;

let cost = 0;

function totals(value) {

  count++;

  document.getElementById('total-product').innerText = count;

  cost = cost + value;

  const totalCost = document.getElementById('total-cost');

  totalCost.innerText = cost;

}

//product details

// first card

document.getElementById('first-card-btn').addEventListener('click',function(){

  const firstCardTitle = document.getElementById('first-card-title').innerText;

  const firstCardPrice = document.getElementById('first-card-price').innerText;
  const firstCardPriceInNumber = parseInt(firstCardPrice);

  const firstCardQuantity = document.getElementById('first-card-quantity').innerText;

  const firstCardQuantityInNumber = parseInt(firstCardQuantity);

  const total = firstCardQuantityInNumber * firstCardPriceInNumber ;

  totals(total);

  displayData(firstCardTitle,firstCardPrice,firstCardQuantity,total);

  document.getElementById('first-card-btn').setAttribute('disabled',true);

});

// second card

document.getElementById('second-card-btn').addEventListener('click',function(){

  const secondCardTitle = document.getElementById('second-card-title').innerText;

  const secondCardPrice = document.getElementById('second-card-price').innerText;
  const secondCardPriceInNumber = parseInt(secondCardPrice);

  const secondCardQuantity = document.getElementById('second-card-quantity').innerText;

  const secondCardQuantityInNumber = parseInt(secondCardQuantity);

  const total = secondCardQuantityInNumber + secondCardPriceInNumber ;

  totals(total);

  displayData(secondCardTitle,secondCardPrice,secondCardQuantity,total);

  document.getElementById('second-card-btn').setAttribute('disabled',true);
});

// third card

document.getElementById('third-card-btn').addEventListener('click',function(){

  const thirdCardTitle = document.getElementById('third-card-title').innerText;

  const thirdCardPrice = document.getElementById('third-card-price').innerText;
  const thirdCardPriceInNumber = parseInt(thirdCardPrice);

  const thirdCardQuantity = document.getElementById('third-card-quantity').innerText;

  const thirdCardQuantityInNumber = parseInt(thirdCardQuantity);

  const total = thirdCardPriceInNumber - thirdCardQuantityInNumber ;

  totals(total);

  displayData(thirdCardTitle,thirdCardPrice,thirdCardQuantity,total);

  document.getElementById('third-card-btn').setAttribute('disabled',true);
});


// fourth card

document.getElementById('fourth-card-btn').addEventListener('click',function(){

  const fourthCardTitle = document.getElementById('fourth-card-title').innerText;

  const fourthCardPrice = document.getElementById('fourth-card-price').innerText;
  const fourthCardPriceInNumber = parseInt(fourthCardPrice);

  const fourthCardQuantity = document.getElementById('fourth-card-quantity').innerText;

  const fourthCardQuantityInNumber = parseInt(fourthCardQuantity);

  const total =fourthCardPriceInNumber / fourthCardQuantityInNumber ;

  totals(total);

  displayData(fourthCardTitle,fourthCardPrice,fourthCardQuantity,total);

  document.getElementById('fourth-card-btn').setAttribute('disabled',true);

});


// fifth card

document.getElementById('fifth-card-btn').addEventListener('click',function(){

  const fifthCardTitle = document.getElementById('fifth-card-title').innerText;

  const fifthCardPrice = document.getElementById('fifth-card-inputbtn-one').value;

  const fifthCardPriceInNumber = parseInt(fifthCardPrice);

  const fifthCardQuantity = document.getElementById('fifth-card-inputbtn-two').value;

  console.log(typeof(fifthCardQuantity));

  const fifthCardQuantityInNumber = parseInt(fifthCardQuantity);

  if(fifthCardPrice === "" || fifthCardQuantity === ""  || typeof(parseInt(fifthCardPrice))!== 'number' || typeof(parseInt(fifthCardQuantity))!=='number'|| fifthCardPrice < 1 || fifthCardQuantity <1 ) {

    alert('Please enter valid input');

    return 0;
  }

  const total = fifthCardQuantityInNumber + fifthCardPriceInNumber ;

  totals(total);

  displayData(fifthCardTitle,fifthCardPriceInNumber,fifthCardQuantityInNumber,total);

  document.getElementById('fifth-card-btn').setAttribute('disabled',true);

});