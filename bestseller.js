let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

var buyButton = document.getElementById("buy-button");


var buyForm = document.getElementById("buy-form");


buyButton.addEventListener("click", function () {
  buyForm.style.display = "block";
});


function closeForm() {
  buyForm.style.display = "none";
}

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})


let productsNew = [
    {
        id: 1,
        name:'Waffle Candle',
        image:'https://i.pinimg.com/474x/2e/0e/34/2e0e3447b7ead7c4b1facc024b5fbf20.jpg',
        detail: 'Cinnamon scented waffle candle with strawberry and cream on top',
        price:150,
    },
    {
        id: 2,
        name:'Heart candles',
        image:'https://i.pinimg.com/474x/dd/24/54/dd2454410f9b2df3347ffa85e0a3c398.jpg',
        detail: 'beeswax 4 color coffee scented coquette heart candles ',
        price:200,
    },
    {
        id: 3,
        name:'Ramen candles',
        image:'https://i.pinimg.com/564x/dc/d6/30/dcd63064d496f521911dc5d7d8bf4dcd.jpg',
        detail: 'vegan wax scented ramen candle with cheese on top',
        price:250,
    },
    {
        id: 4,
        name:'Teddy on Cake',
        image:'https://i.pinimg.com/474x/24/30/11/2430112bf8daeab1a08364322d95757e.jpg',
        detail: 'multicolor citrus scented cupcake candles veganwax',
        price:300,
    },
    {
        id: 5,
        name:'Rose Candles',
        image:'https://i.pinimg.com/474x/6f/e6/e3/6fe6e3aa6ca6f7e3099226091264f376.jpg',
        detail: 'jasmine scented mini rose candles two piece veganwax',
        price:400,
    },
    {
        id: 6,
        name:'Pink cake',
        image:'https://i.pinimg.com/564x/e8/5d/bf/e85dbf143ad32251ccbbad79874fbbde.jpg',
        detail: 'Pink Strawberry cream scented candle with strawberries',
        price:250,
    }

]

let listCards  = [];

function initApp2(){
    productsNew.forEach((value, key) =>{
        let newDiv = document.createElement('product-card');
        newDiv.style.cssText="width: 350px;position: relative;box-shadow: 0 2px 7px #dfdfdf;margin: 50px auto;background: #fafafa;"
        //newDiv.classList.add('');
        newDiv.innerHTML = ` <div class="product-card">
        <div class="badge">HOT</div>
        <div class="product-pic">
          <img src="${value.image}" alt="">
        </div>
        <div class="product-details">
          <span class="product-catagory">${value.name}</span>
          <h4><a href="products.html">All-Cake Collection</a></h4>
          <p>${value.detail}</p>
          <div class="product-bottom-details">
            <div class="product-price">${value.price} ₺</div>
            <div class="product-links">
              <a href=""><i class="fa fa-heart like" ></i></a>
              <button class="button-test"  onclick="addToCard(${key})"><i class="fa fa-shopping-cart add-cart"></i></button>
            </div>
          </div>
        </div>
      </div>`;
        list.appendChild(newDiv);
    })
}

initApp2();

function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(productsNew[key]));
        listCards[key].quantity = 1;
    }
    console.log('LİST CARD : ', listCard);
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice + '₺';
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * productsNew[key].price;
    }
    reloadCard();
}