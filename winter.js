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
        name:'gingerbread man candle',
        image:'https://i.pinimg.com/564x/f7/48/4d/f7484d35bd898de71f7000fa3e3aedf3.jpg',
        detail: 'Cinnamon scented gingerbread man candle veganwax',
        price:150,
    },
    {
        id: 2,
        name:'Snowman Candle',
        image:'https://i.pinimg.com/474x/53/d8/a0/53d8a0c85e0f2369950ef50bcfaad95b.jpg',
        detail: 'Vanilla scented holiday snowman candles collection',
        price:200,
    },
    {
        id: 3,
        name:'Glove Candle',
        image:'https://i.pinimg.com/564x/fe/df/14/fedf14d69e3fa61497e5fce9a3b1e3a2.jpg',
        detail: ' textured Ginger scented red glove candle veganwax',
        price:250,
    },
    {
        id: 4,
        name:'Winterman Candle',
        image:'https://i.pinimg.com/474x/ee/21/b2/ee21b25c79ea312772c8dc4ca6ee8cf6.jpg',
        detail: 'Cozy carrot cake scented snowman candle 3 color option',
        price:300,
    },
    {
        id: 5,
        name:'Ghost Candles',
        image:'https://i.pinimg.com/474x/cb/1b/41/cb1b4176857513f54bd3b569d8edce21.jpg',
        detail: 'Cinammon Spice scented 3 piece candle cute ghost and pumpkins mini set ',
        price:400,
    },
    {
        id: 6,
        name:'Pine Tree Candle',
        image:'https://i.pinimg.com/474x/91/80/b1/9180b14e418bf749ee4e3a3b225d98d6.jpg',
        detail: 'Rosemary scented pine tree holiday candles green and beige two piece set',
        price:250,
    },
    {
        id: 7,
        name:'Pine Candle',
        image:'https://i.pinimg.com/474x/88/6e/22/886e22052415d823ba89b2341b614a01.jpg',
        detail: 'Vanilla, Salted-Caramel, Dark Chocolate scented 3 piece pine candles big size',
        price:250,
    },
    {
        id: 8,
        name:'Fairy and Elves',
        image:'https://i.pinimg.com/474x/38/31/96/3831965f28b541fe63a472be0078e17b.jpg',
        detail: 'spicy scent of cinnamon, clove, and nutmeg cake, with a touch of vanilla and raisins scented candle collection',
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
          <h4><a href="winter.html">Winter Collection</a></h4>
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