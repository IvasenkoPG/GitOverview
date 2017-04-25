// створювання структури сайту
$("body").append("<div id='wrapper'><div class='message'><div class='container'><div class='row'><div class='col-md-12'><h2 id='special-message'>Ми раді вітати Вас у нашому магазині</h2></div></div></div></div><header></header><div class='content_main'></div><div class='footer'></div></div>");
$('#wrapper').prependTo('body');

//Хедер

$("header").append("<div class='menu-top'><div class='container'><div class='row'><div class='col-md-12'><ul class='links-top'><li class='contact'><a href='../feedback/feedback.html'>Контакти</a></li><li class='log in'><a href='../log in/log in.html'>Вхід</a></li><li class='sign up'><a href='../sign up/sign up.html'>Зареєструватися</a></li><li class='top-cart'><img class='img-cart' src='../../images/cart-icon.svg' alt='logo'><a href='../cart/cart.html'> Кошик <span> (0) </span></a><div class='add-cart'><div class='liner'><p class='empty'>Ваш кошик порожній</p></div> </div></li></ul><ul class='menu-header'><li class='head-left'><span>{</span><h3 class='classy'>CASUAL - як стиль життя</h3><span>}</span><ul><li><a href='../about/about.html'>Про нас</a></li><li><a href='../goods_man/goods_man.html'>Мужський</a></li><li><a href='../goods_womens/goods_womens.html'>Жіночій </a></li></ul></li><li class='logo'><a href='../../index.html'><img src='../../images/logo.png' alt='logo'></a><h4 class='name-logo'>ДЖИНСОВИЙ ОДЯГ</h4></li><li class='head-right'><span>{</span><h3 class='classy'>Бездоганна якість</h3><span>}</span><div class='search-box'><form class='search-form'><input class='search' type='text' placeholder='пошук товару'><button type='submit'>Пошук</button></form></li></ul></div></div></div></div>");

//Полоса страниц

$("body").append("<div class='menu-breadcrumbs'><div class='container'><div class='row'><div class='col-md-12'><ul class='breadcrumbs'><li class='home'><a href='../../index.html'>Головна</a><span class='gap'>/</span></li><li class='breadcrumbs-about'><em>Оплата</em></li></ul></div></div></div></div>");
$(".menu-breadcrumbs").insertAfter("header");


//Контент для страницы  Оплата

$(".content_main").append("<div class='payment-info-pages'><div class='container'><div class='row'><div class='col-md-12'><p>&nbsp;</p><p><span><strong>Способи оплати</strong></span><div class='b-content'>&nbsp;</div></p>Оплата тільки після отримання замовлення:<p></p><ul><li><span>&#8277;Готівковий розрахунок - оплата при отриманні замовлення кур'єром.</span><span>&nbsp;</span></li><li><span>&#8277;Безготівковий - оплата картою при отриманні у відділенні Нової Пошти або офіційному магазині LTB у Вашому місті.</span></li></ul><p>&nbsp;</p><p><div class='b-content'>&nbsp;</div><img src='../../images/money.png' alt='payment'><img src='../../images/credit-cards.png' alt='payment-cart'></p></div> </div></div></div>");




// Футер

$(".footer").append("<div class='container'><div class='row'><div class='col-md-12'><div class='footer-letter'><div class='newLetter'><form class='newLetter-form'><label class='newLetter-email'>Підпишіться на нашу розсилку</label><input class='box-email' type='text' name='email' placeholder='Укажіть Ваш email'><button type='submit'>Відправити</button></form></div> </div><div class='menu-footer'><div class='links-footer'><ul><li><a href='../about/about.html'>Про нас</a></li><li><a href='../goods_man/goods_man.html'>Мужський джинсовий одяг</a></li><li><a href='../goods_womens/goods_womens.html'>Жіночій джинсовий одяг</a></li><li><a href='../feedback/feedback.html'>Контакти</a></li><li><a href='../log in/log in.html'> Вхід</a></li><li><a href='../sign up/sign up.html'>Зареєструватися</a></li><li><a href='../cart/cart.html'> Кошик</a></li><li><a href='../delivery/delivery.html'>Доставка</a></li><li><a href='payment.html'> Оплата</a></li></ul></div></div><div class='social-footer'><div class='social'><ul><li><a href='https://www.facebook.com/' target='blank'><img src='../../images/facebook.png' alt='facebook'></a></li><li><a href='https://twitter.com' target='blank'><img src='../../images/twitter.png' alt='twitter'></a></li><li><a href='https://www.instagram.com/' target='blank'><img src='../../images/instagram.png' alt='instagram'></a></li></ul><p class='copyright'>© 'Інтернет-магазин LTBjeans' 2017</p></div></div></div></div></div>");
var cart = {};
var counter = function () {
    $.ajax({
        dataType: 'json',
        type: 'GET',
        url: '/cart',
        success: function (data) {
            checkCart();
            numberCart();
        }
    });

    function numberCart(){
        var b = 0;
        for(var key in cart){
            b +=cart[key];
        }
        $(".top-cart span").html(b);
        $(".liner p").html(b);
    }

    function checkCart() {
//    проверяем наличие корзині localStorage
        if(localStorage.getItem('cart') !=null){
            cart = JSON.parse(localStorage.getItem('cart'));
        }
    }
};
counter();

$(document).ready(function(){
    $(".newLetter-form").submit(function() {
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: '/posting',
            data: form_data,
            success: function() {
                alert("Ваше сообщение отпрвлено!");
            }
        });
    });
});