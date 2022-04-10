let counter_basket = document.querySelector('.counter_basket');
let buy_click;
for (let i = 0; i < 3; i++) {
    buy_click = document.querySelector('.buy_button');
}

const headphones = [
    {
        id: 1,
        type: "wired",
        img: "./img/Apple%20BYZ%20S852I.png",
        title: "Apple BYZ S852I",
        price: 2927,
        oldPrice: "3527 ₽",
        rate: 4.7
    },
    {
        id: 2,
        type: "wired",
        img: "./img/Apple%20EarPods.png",
        title: "Apple EarPods",
        price: 2327,
        oldPrice: '',
        rate: 4.5
    },
    {
        id: 3,
        type: "wired",
        img: "./img/Apple%20EarPods%20P.png",
        title: "Apple EarPods",
        price: 2927,
        oldPrice: '',
        rate: 4.5
    },
    {
        id: 4,
        type: "wired",
        img: "./img/Apple%20BYZ%20S852I.png",
        title: "Apple BYZ S852I",
        price: 2927,
        oldPrice: "",
        rate: 4.7
    },
    {
        id: 5,
        type: "wired",
        img: "./img/Apple%20EarPods.png",
        title: "Apple EarPods",
        price: 2327,
        oldPrice: '',
        rate: 4.5
    },
    {
        id: 6,
        type: "wired",
        img: "./img/Apple%20EarPods%20P.png",
        title: "Apple EarPods",
        price: 2927,
        oldPrice: '',
        rate: 4.5
    },
    {
        id: 7,
        type: "wireless",
        img: "./img/AppleAirPods.png",
        title: "Apple AirPods",
        price: 9527,
        oldPrice: "",
        rate: 4.7
    },
    {
        id: 8,
        type: "wireless",
        img: "./img/GERLAX%20GH-04.png",
        title: "GERLAX GH-04",
        price: 6527,
        oldPrice: '',
        rate: 4.7
    },
    {
        id: 9,
        type: "wireless",
        img: "./img/BOROFONE%20BO4.png",
        title: "BOROFONE BO4",
        price: 7527,
        oldPrice: '',
        rate: 4.7
    }
];

const wirelessHeadphones = [];

let count_headphones = headphones.length;

headphones.forEach(function (item, i, array) {
    if (headphones[i].type == "wired") {
        let wiredContainer = document.querySelector(".headphones_wrapper");
        wiredContainer.insertAdjacentHTML('beforeEnd',
            '                    <div class="product_block" data-id=' + headphones[i].id + '>\n' +
            '                        <img class="product_img" src=' + headphones[i].img + ' alt="">\n' +
            '                        <div class="headphones_info">\n' +
            '                            <p class="name_headphones">' + headphones[i].title + '</p>\n' +
            '                            <div class="price">\n' +
            '                                <p class="new_price">' + headphones[i].price + ' ₽</p>\n' +
            '                                <p class="old_price">' + headphones[i].oldPrice + ' </p>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="buy">\n' +
            '                            <div class="rating_info">\n' +
            '                                <img src="img\\Star.png" alt="" class="star">\n' +
            '                                <p class="rating">' + headphones[i].rate + '</p>\n' +
            '                            </div>\n' +
            '                            <button class="buy_button">Купить</button>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>');
    } else {
        let wirelessContainer = document.querySelector(".wireless_headphones_wrapper");
        wirelessContainer.insertAdjacentHTML('beforeEnd',
            '                    <div class="product_block" data-id=' + headphones[i].id + '>\n' +
            '                        <img class="product_img" src=' + headphones[i].img + ' alt="">\n' +
            '                        <div class="headphones_info">\n' +
            '                            <p class="name_headphones">' + headphones[i].title + '</p>\n' +
            '                            <div class="price">\n' +
            '                                <p class="new_price">' + headphones[i].price + ' ₽</p>\n' +
            '                                <p class="old_price">' + headphones[i].oldPrice + ' </p>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="buy">\n' +
            '                            <div class="rating_info">\n' +
            '                                <img src="img\\Star.png" alt="" class="star">\n' +
            '                                <p class="rating">' + headphones[i].rate + '</p>\n' +
            '                            </div>\n' +
            '                            <button class="buy_button">Купить</button>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>');
    }
})


if (window.sessionStorage.getItem('cont') == null) {
    counter_basket.classList.add("counter_none");
} else counter_basket.classList.remove("counter_none");

let counter = 0;

let counterBaskets = document.querySelector(".counter_basket")


let buyButton = document.querySelectorAll(".buy_button");
buyButton.forEach(button => {
    button.addEventListener('click', () => {
        counter++;
        counter_basket.classList.remove("counter_none");
        counterBaskets.textContent = counter;
        sessionStorage.setItem('cont', counter);
        console.log("awdawdawd");
    });
})

counterBaskets.textContent = sessionStorage.getItem("cont");


let product = document.querySelectorAll(".product_block");
let products = [];

product.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        console.log(element.dataset.id)
        let target = event.target;
        if (target.className == 'buy_button') {
            products.push(element.dataset.id)
            sessionStorage.setItem("product", products)
        }
    })
})


