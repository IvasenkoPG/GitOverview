// створювання структури сайту
$("body").append("<div id='wrapper'><div class='message'><div class='container'><div class='row'><div class='col-md-12'><h2 id='special-message'>Ми раді вітати Вас у нашому магазині</h2></div></div></div></div><header></header><div class='content_main'></div><div class='footer'></div></div>");
$('#wrapper').prependTo('body');

//Хедер

$("header").append("<div class='menu-top'><div class='container'><div class='row'><div class='col-md-12'><ul class='links-top'><li class='contact'><a href='../feedback/feedback.html'>Контакти</a></li><li class='log in'><a href='../log in/log in.html'>Вхід</a></li><li class='sign up'><a href='../sign up/sign up.html'>Зареєструватися</a></li><li class='top-cart'><img class='img-cart' src='../../images/cart-icon.svg' alt='logo'><a href='../cart/cart.html'> Кошик <span> (0) </span></a><div class='add-cart'><div class='liner'><p class='empty'>Ваш кошик порожній</p></div> </div></li></ul><ul class='menu-header'><li class='head-left'><span>{</span><h3 class='classy'>CASUAL - як стиль життя</h3><span>}</span><ul><li><a href='about.html'>Про нас</a></li><li><a href='../goods_man/goods_man.html'>Мужський</a></li><li><a href='../goods_womens/goods_womens.html'>Жіночій </a></li></ul></li><li class='logo'><a href='../../index.html'><img src='../../images/logo.png' alt='logo'></a><h4 class='name-logo'>ДЖИНСОВИЙ ОДЯГ</h4></li><li class='head-right'><span>{</span><h3 class='classy'>Бездоганна якість</h3><span>}</span><div class='search-box'><form class='search-form'><input class='search' type='text' placeholder='пошук товару'><button type='submit'>Пошук</button></form></li></ul></div></div></div></div>");

//Полоса страниц

$("body").append("<div class='menu-breadcrumbs'><div class='container'><div class='row'><div class='col-md-12'><ul class='breadcrumbs'><li class='home'><a href='../../index.html'>Головна</a><span class='gap'>/</span></li><li class='breadcrumbs-about'><em>Про нас</em></li></ul></div></div></div></div>");
$(".menu-breadcrumbs").insertAfter("header");


//Контент для страницы  О нас

$(".content_main").append("<div class='info-pages'><div class='container'><div class='row'><div class='col-md-12'><div class='top-info'><h5>О Компанії</h5><img src='../../images/about/about_img_1.jpg' alt='picture_1'><p>Бренд LTB &nbsp;- частина сім'ї одного з найбільших європейських холдингів з виробництва і продажу одягу CAK GROUP.<br>Коріння історії корпорації CAK TEXTILE [Чак Текстиль] йдуть в далекий 1948 рік, саме завдяки такій багаторічної історії продукція компанії не тільки увійшла в історію сучасної<br>моди, але і встигла закріпитися в свідомості мільйонів покупців<br>в усьому світі, як синонім бездоганної якості і стилю.</p><p>Історія бренду LTB Jeans почалася в 1994 році, коли корпорація CAK Group вирішує запустити дизайнерську марку джинсового одягу в стилі <span>casual</span>, яка б не просто підкреслювала стиль сучасної молоді, а й відображала філософію їхнього життя. Найвища якість, інноваційні технології виробництва, унікальний авторський стиль одягу і високі ідеали компанії -&nbsp;Швидко зробили LTB Jeans справжнім «must-have» в гардеробі кожного поціновувача casual. Сьогодні фірмові магазини LTB<br>відкриті в більш, ніж 30 країнах світу на п'яти континентах.</p><p>Хочете дізнатися про нас більше? Просто загляньте в один з<br>найближчих магазинів LTB.</p></div></div></div></div></div>");




// Футер

$(".footer").append("<div class='container'><div class='row'><div class='col-md-12'><div class='footer-letter'><div class='newLetter'><form class='newLetter-form'><label class='newLetter-email'>Підпишіться на нашу розсилку</label><input class='box-email' type='text' name='email' placeholder='Укажіть Ваш email'><button type='submit'>Відправити</button></form></div> </div><div class='menu-footer'><div class='links-footer'><ul><li><a href='about.html'>Про нас</a></li><li><a href='../goods_man/goods_man.html'>Мужський джинсовий одяг</a></li><li><a href='../goods_womens/goods_womens.html'>Жіночій джинсовий одяг</a></li><li><a href='../feedback/feedback.html'>Контакти</a></li><li><a href='../log in/log in.html'> Вхід</a></li><li><a href='../sign up/sign up.html'>Зареєструватися</a></li><li><a href='../cart/cart.html'> Кошик</a></li><li><a href='../delivery/delivery.html'>Доставка</a></li><li><a href='../payment/payment.html'> Оплата</a></li></ul></div></div><div class='social-footer'><div class='social'><ul><li><a href='https://www.facebook.com/' target='blank'><img src='../../images/facebook.png' alt='facebook'></a></li><li><a href='https://twitter.com' target='blank'><img src='../../images/twitter.png' alt='twitter'></a></li><li><a href='https://www.instagram.com/' target='blank'><img src='../../images/instagram.png' alt='instagram'></a></li></ul><p class='copyright'>© 'Інтернет-магазин LTBjeans' 2017</p></div></div></div></div></div>");





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
