let counterBaskets = document.querySelector(".counter_basket")
counterBaskets.textContent = sessionStorage.getItem("cont");

const headphones = [
    {
        id: 1,
        type: "wired",
        img: "./img/Apple%20BYZ%20S852I.png",
        title: "Apple BYZ S852I",
        price: 2927,
        oldPrice: "3527 ₽",
        rate: 4.7,
        counter: 0
    },
    {
        id: 2,
        type: "wired",
        img: "./img/Apple%20EarPods.png",
        title: "Apple EarPods",
        price: 2327,
        oldPrice: '',
        rate: 4.5,
        counter: 0
    },
    {
        id: 3,
        type: "wired",
        img: "./img/Apple%20EarPods%20P.png",
        title: "Apple EarPods",
        price: 2927,
        oldPrice: '',
        rate: 4.5,
        counter: 0
    },
    {
        id: 4,
        type: "wired",
        img: "./img/Apple%20BYZ%20S852I.png",
        title: "Apple BYZ S852I",
        price: 2927,
        oldPrice: "",
        rate: 4.7,
        counter: 0
    },
    {
        id: 5,
        type: "wired",
        img: "./img/Apple%20EarPods.png",
        title: "Apple EarPods",
        price: 2327,
        oldPrice: '',
        rate: 4.5,
        counter: 0
    },
    {
        id: 6,
        type: "wired",
        img: "./img/Apple%20EarPods%20P.png",
        title: "Apple EarPods",
        price: 2927,
        oldPrice: '',
        rate: 4.5,
        counter: 0
    },
    {
        id: 7,
        type: "wireless",
        img: "./img/AppleAirPods.png",
        title: "Apple AirPods",
        price: 9527,
        oldPrice: "",
        rate: 4.7,
        counter: 0
    },
    {
        id: 8,
        type: "wireless",
        img: "./img/GERLAX%20GH-04.png",
        title: "GERLAX GH-04",
        price: 6527,
        oldPrice: '',
        rate: 4.7,
        counter: 0
    },
    {
        id: 9,
        type: "wireless",
        img: "./img/BOROFONE%20BO4.png",
        title: "BOROFONE BO4",
        price: 7527,
        oldPrice: '',
        rate: 4.7,
        counter: 0
    }
];

let headphonesBasket = [];

let products = new Set(sessionStorage.getItem('product').split(","))

let counter = sessionStorage.getItem('product').split(",").reduce(function (acc, el) {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
}, {});


for (let index in counter) {
    headphones[index - 1].counter = counter[index];

}


products.forEach(product => {
    headphones.forEach(headphone => {
        if (product == headphone.id) {
            headphonesBasket.push(headphone);
        }
    })

})

headphonesBasket.forEach(function (item, i, array) {
    let wiredContainer = document.querySelector(".basket_headphones_wrapper");
    wiredContainer.insertAdjacentHTML('beforeEnd', ' ' +
        '<div class="basket_product_block" data-id=' + headphonesBasket[i].id + '>\n' +
        '                <div class="basket_wrapper">\n' +
        '                    <img class="basket_product_img" src=' + headphonesBasket[i].img + ' alt="">\n' +
        '                    <div class="basket_headphones_info">\n' +
        '                        <p class="basket_name_headphones">' + headphonesBasket[i].title + '</p>\n' +
        '                        <div class="basket_price">\n' +
        '                            ' + headphonesBasket[i].price + ' ₽\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div>\n' +
        '                        <img class="delete" src="img\\del.png" alt="">\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="counter_item">\n' +
        '                    <div class="sub_counter_item">\n' +
        '                        <img src="img\\-.png" class="counter_minus" alt="">\n' +
        '                        <p class="outcome">' + headphonesBasket[i].counter + '</p>\n' +
        '                        <img src="img\\+.png" class="counter_plus" alt="">\n' +
        '                    </div>\n' +
        '                    <div class="last_price">\n' +
        '                        ' + headphonesBasket[i].price * headphonesBasket[i].counter + ' ₽\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>')
})

let product = document.querySelectorAll(".basket_product_block");

let totlePrice = document.querySelector(".final_price")
let finalPrice = 0;

product.forEach(prices => {
    let price = prices.querySelector(".last_price");
    let priceText = price.textContent;
    finalPrice += +priceText.trim().slice(0, priceText.trim().length - 2);
    totlePrice.textContent = finalPrice + " ₽"
})

product.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        let target = event.target;
        let basketQuantity = item.querySelector(".outcome");
        let price = item.querySelector(".last_price");
        if (target.className == 'counter_plus') {
            let counterResultPlus = ++headphonesBasket[index].counter
            basketQuantity.textContent = counterResultPlus;
            price.textContent = headphones[item.dataset.id - 1].price * counterResultPlus + " ₽";
            finalPrice += headphones[item.dataset.id - 1].price;
            totlePrice.textContent = finalPrice + " ₽";
            counterBaskets.textContent++;
        }
        if (target.className == 'counter_minus') {
            let counterResultMinus = headphonesBasket[index].counter
            if (counterResultMinus > 1) {
                counterResultMinus = --headphonesBasket[index].counter
                basketQuantity.textContent = counterResultMinus;
                price.textContent = headphones[item.dataset.id - 1].price * counterResultMinus + " ₽";
                finalPrice -= headphones[item.dataset.id - 1].price;
                totlePrice.textContent = finalPrice + " ₽";
                counterBaskets.textContent--;
            }
        }
        if (target.className == 'delete') {
            headphonesBasket.splice(index, 1)
            item.style.display="none";
            counterBaskets.textContent -= basketQuantity.textContent;

            let newTextPrice = totlePrice.textContent;
            let newIntPrice =+ newTextPrice.slice(0, newTextPrice.length - 2);

            let itemPrice = price.textContent;
            let itemIntPrice =+ itemPrice.trim().slice(0, itemPrice.trim().length -2)

            totlePrice.textContent = newIntPrice - itemIntPrice + " ₽";
        }

    })
})

totlePrice.textContent = finalPrice + " ₽";
