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
        name:'pink cake',
        image:'https://i.pinimg.com/564x/e8/5d/bf/e85dbf143ad32251ccbbad79874fbbde.jpg',
        detail: 'Pink Strawberry cream scented candle with strawberries and pink hearts on top',
        price:150,
    },
    {
        id: 2,
        name:'purple cake',
        image:'https://i.pinimg.com/originals/92/ca/90/92ca9012356d30c25003e26cdede15c8.jpg',
        detail: 'Caramel and nuts scented purple cake candle with big cherry and sprinkles on top',
        price:200,
    },
    {
        id: 3,
        name:'cheesecake candle',
        image:'https://i.pinimg.com/474x/93/61/86/936186107e6c0953668d7dba0393d378.jpg',
        detail: 'Two vanilla and strawberry frosted scented cheescake candles two piece set',
        price:250,
    },
    {
        id: 4,
        name:'birthday bundle',
        image:'https://i.pinimg.com/originals/af/41/d7/af41d7e3457d480749e9f1558711bb40.jpg',
        detail: 'Lemoncake cherry blossom scented birthday bundle, contains: 4 candles and custom letter',
        price:300,
    },
    {
        id: 5,
        name:'Classic bday candle',
        image:'https://i.etsystatic.com/29913609/r/il/528bd9/4727185967/il_1588xN.4727185967_imfb.jpg',
        detail: 'Two birthday cake classic scented candles with sprinkles and whipped cream on top',
        price:400,
    },
    {
        id: 6,
        name:'flower tiramisu',
        image:'https://i.pinimg.com/474x/6f/37/4b/6f374bbe0bb9bda140f6ead02950eed8.jpg',
        detail: 'white and yellow jasmine scented three frosted layered tiramisu candle',
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