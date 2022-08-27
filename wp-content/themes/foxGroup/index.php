<?php
/*
Template Name: foxIndex
*/
?>
    <!DOCTYPE html>
<html lang="<?php language_attributes(); ?>">
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.7/dist/css/splide.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
              integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
              crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/style.css">
        <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/responsive.css">
        <link href="<?php bloginfo('template_url'); ?>/assets/css/index/page_f9e7f16ea387c4c6a73a27c383bf4649_v1.css" type="text/css" rel="stylesheet">
        <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/index/template_a5f575e69280e711e955943376a69e45_v1.css">
        <title>FOX group</title>
<!--        --><?php //get_header() ?>
    </head>
<body>
<div id="panel"></div>

<div class="menu">
    <div class="container menu-show" onclick="addMenu()">
        <a href="" class="logo">
            <img src="<?php bloginfo('template_url'); ?>/assets/img/FOX DESIGN STUDIOd 1.png" alt="">
        </a>
        <div class="hamburger-perent">
            <div class="hamburger">
            </div>
        </div>
    </div>
    <div class="menu-body">
        <div class="hide-menu">
            <a href="">Partfolio</a>
            <a href="">Xizmatlar</a>
            <a href="">Biz haqimizda</a>
            <a href="">Kontaktlar</a>
            <div class="footer-menu container">
          <span>
            <h2 class="on-lng" id="uz" onclick="uz()">UZ</h2>
            &nbsp;&nbsp;&nbsp;
            <h2 id="ru" onclick="ru()">RU</h2>
          </span>
                <a href="tel: +998907885624">+988 (90) 788-56-24</a>
            </div>
        </div>
    </div>
</div>
<div class="all-sections">
    <section class="main-slider">

        <a class="main-slider-item " href="#baikal" id="bx_3218110189_26822">
            <div class="main-slider__bg">
                <img src="<?php bloginfo('template_url'); ?>/assets/img/index/5b861919fa08c341f2bf963f9748b304.jpg" alt="Мы перезапустили легендарный «Байкал 1977», создав новый визуальный образ бренда, который соответствует платформе – природный источник вдохновения" title="Мы перезапустили легендарный «Байкал 1977», создав новый визуальный образ бренда, который соответствует платформе – природный источник вдохновения">
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <span>Мы перезапустили легендарный «Байкал 1977», создав новый визуальный образ бренда, который соответствует платформе – природный источник вдохновения</span>
                    </div>
                </div>
            </div>
        </a>

        <a class="main-slider-item main-slider-item--video" href="#ocard" id="bx_3218110189_25759">
            <div class="main-slider__bg">
                <div class="main-slider-item__video">
                    <video playsinline width="100%" height="100%" preload="auto" autoplay="true" loop="true" muted="muted" src="<?php bloginfo('template_url'); ?>/assets/img/video/1742984be918a3cb7054107f836a740d.mp4"></video>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <span>Для бренда Ocard в Depot разработали нейминг, легенду бренда, дизайн и форму бутылки для воды с золотом, которая становится значимым и премиальным подарком</span>
                    </div>
                </div>
            </div>
        </a>

        <a class="main-slider-item " href="https://www.depotwpf.ru/portfolio/milgrad/" id="bx_3218110189_22412">
            <div class="main-slider__bg">
                <img src="<?php bloginfo('template_url'); ?>/assets/img/index/51c4ed08a36b02ad4344e3ff51d7fcda.jpg" alt="В Depot провели ребрендинг торговой марки «Милград». Синие котики покорили весь мир!" title="В Depot провели ребрендинг торговой марки «Милград». Синие котики покорили весь мир!">
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <span>В Depot провели ребрендинг торговой марки «Милград». Синие котики покорили весь мир!</span>
                    </div>
                </div>
            </div>
        </a>

        <a class="main-slider-item " href="/portfolio/bryanskiy_molochnyy_kombinat/" style="background-color:#925cc8;" id="bx_3218110189_1">
            <div class="main-slider__bg">
                <img src="<?php bloginfo('template_url'); ?>/assets/img/index/e30cc426e025b2b6a35c0554e312f03c.jpg" alt="В Depot разработана айдентика и дизайн упаковки продукции «Брянского молочного комбината»" title="В Depot разработана айдентика и дизайн упаковки продукции «Брянского молочного комбината»">
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <span>В Depot разработана айдентика и дизайн упаковки продукции «Брянского молочного комбината»</span>
                    </div>
                </div>
            </div>
        </a>

        <a class="main-slider-item " href="/portfolio/saito/" style="background-color:#d3bf9e;" id="bx_3218110189_2">
            <div class="main-slider__bg">
                <img src="<?php bloginfo('template_url'); ?>/assets/img/index/96f89d4ad9e99e9a96c2f7da7ddfc6e7.jpg" alt="Unilever и Depot вывели в масс-маркет новый премиальный чайный бренд Saito" title="Unilever и Depot вывели в масс-маркет новый премиальный чайный бренд Saito">
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <span>Unilever и Depot вывели в масс-маркет новый премиальный чайный бренд Saito</span>
                    </div>
                </div>
            </div>
        </a>

        <a class="main-slider-item main-slider-item--video" href="/portfolio/obnovlyennyy_dizayn_kfc/" style="background-color:#e1dfe1;" id="bx_3218110189_15924">
            <div class="main-slider__bg">
                <div class="main-slider-item__video">
                    <video playsinline width="100%" height="100%" preload="auto" autoplay="true" loop="true" muted="muted" src="<?php bloginfo('template_url'); ?>/assets/img/video/5a845198592ef1e2562f55907e501600.mp4"></video>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <span>В Depot провели адаптацию глобального дизайна сети ресторанов KFC для России</span>
                    </div>
                </div>
            </div>
        </a>

        <a class="main-slider-item main-slider-item--video" href="/portfolio/wonder_lab/" style="background-color:#7d7cbc;" id="bx_3218110189_15926">
            <div class="main-slider__bg">
                <div class="main-slider-item__video">
                    <video playsinline width="100%" height="100%" preload="auto" autoplay="true" loop="true" muted="muted" src="<?php bloginfo('template_url'); ?>/assets/img/video/6fdff5bd0d5143fbccc0f545306d8c84.mp4"></video>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <span>Команда Depot разработала новый бренд бытовой химии и моющих средств WONDER LAB</span>
                    </div>
                </div>
            </div>
        </a>

        <a class="main-slider-item main-slider-item--video" href="/portfolio/blanc_bleu/" id="bx_3218110189_25758">
            <div class="main-slider__bg">
                <div class="main-slider-item__video">
                    <video playsinline width="100%" height="100%" preload="auto" autoplay="true" loop="true" muted="muted" src="<?php bloginfo('template_url'); ?>/assets/img/video/590c116b1fe2af726259fd0e9d27ede3.mp4"></video>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <span>Команда Depot разработала новый бренд премиальной воды Blanc Bleu для рынков Центральной Азии, России и Европы</span>
                    </div>
                </div>
            </div>
        </a>
    </section>

    <section class="main-text">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 d-none d-lg-block" style="display: flex !important; flex-direction: column; justify-content: center; align-items: center;">
                    <!--
    <a class="main_img_a" href="/contacts/"><img src="/local/templates/main/img/frommaket/main/join_team_rus_v.svg" alt=""></a>
    -->
                    <a class="main_img_anew" href="/contacts/">
                        <img src="<?php bloginfo('template_url');?>/assets/img/FOX.png" style="width: 87%" alt="">
                    </a>                </div>
                <div class="col-12 col-xl-6">
                    <div class="main-text">
                        <h1 style="font-weight: 500; margin-bottom:16px;" class="title">Depot&nbsp;— брендинговое агентство, которое приносит счастье своим клиентам!</h1>

                        <p>

                            <a target="_blank" href="/upload/iblock/436/436da1f9a4a1eda993fb95738ef88091.pdf" class="button button_g">Скачать презентацию</a></p>

                        <p>
                            Мы создаём бренды с нуля и обновляем уже существующие: проводим анализ рынка, разрабатываем стратегию бренда и его позиционирование, нейминг, фирменный стиль и дизайн упаковки, строим систему интегрированных коммуникаций бренда.
                        </p>
                        <p>
                            Повышение уровня лояльности потребителей, снижение расходов на рекламные кампании, придание продукту добавочной ценности, формирование положительного имиджа фирмы — брендинговое агентство полного цикла Depot решает как перечисленные, так и иные задачи.
                        </p>
                        <h2 class="main_h2">Depot&nbsp;— брендинговое агентство №1 в России</h2>
                        <p>На счету агентства — более пяти тысяч успешных кейсов, награды большинства международных премий и первое место российского рейтинга креативности в категории «Брендинг». В нашем арсенале — команда топовых специалистов и глобальная поддержка международного брендингового альянса GLBA. Мы гордимся, что вот уже 23 года развиваем индустрию брендинга в Москве, России и за ее пределами.</p>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="clients">
        <div class="slider">
            <div class="slider-track">
                <!--1-slide -->
                <div class="slide">
                    <img src="<?php bloginfo('template_url');?>/assets/img/logoClients/azr%20textile.png" alt="1">
                </div>
                <div class="slide">
                    <img src="<?php bloginfo('template_url');?>/assets/img/logoClients/epalogo.jpg" alt="2">
                </div>
                <div class="slide">
                    <img src="<?php bloginfo('template_url');?>/assets/img/logoClients/garant2.png" alt="3">
                </div>
                <div class="slide">
                    <img src="<?php bloginfo('template_url');?>/assets/img/logoClients/gmc_logo.png" alt="4">
                </div>
                <div class="slide">
                    <img src="<?php bloginfo('template_url');?>/assets/img/logoClients/IMG_3935.PNG" alt="5">
                </div>
                <div class="slide">
                    <img src="<?php bloginfo('template_url');?>/assets/img/logoClients/LOGO.png" alt="6">
                </div>
                <div class="slide">
                    <img src="<?php bloginfo('template_url');?>/assets/img/logoClients/logo1313.png" alt="6">
                </div>
                <div class="slide">
                    <img src="<?php bloginfo('template_url');?>/assets/img/logoClients/logo_delta-08.png" alt="6">
                </div>
                <div class="slide">
                    <img src="<?php bloginfo('template_url');?>/assets/img/logoClients/Vector%20Smart%20Object.png" alt="6">
                </div>
                <!--1-slide double-->
                <div class="slide">
                    <img src="<?php bloginfo('template_url');?>/assets/img/logoClients/azr%20textile.png" alt="1">
                </div>
                <div class="slide">
                    <img src="<?php bloginfo('template_url');?>/assets/img/logoClients/epalogo.jpg" alt="2">
                </div>
                <div class="slide">
                    <img src="<?php bloginfo('template_url');?>/assets/img/logoClients/garant2.png" alt="3">
                </div>
                <div class="slide">
                    <img src="<?php bloginfo('template_url');?>/assets/img/logoClients/gmc_logo.png" alt="4">
                </div>
                <div class="slide">
                    <img src="<?php bloginfo('template_url');?>/assets/img/logoClients/IMG_3935.PNG" alt="5">
                </div>
                <div class="slide">
                    <img src="<?php bloginfo('template_url');?>/assets/img/logoClients/LOGO.png" alt="6">
                </div>
                <div class="slide">
                    <img src="<?php bloginfo('template_url');?>/assets/img/logoClients/logo1313.png" alt="6">
                </div>
                <div class="slide">
                    <img src="<?php bloginfo('template_url');?>/assets/img/logoClients/logo_delta-08.png" alt="6">
                </div>
                <div class="slide">
                    <img src="<?php bloginfo('template_url');?>/assets/img/logoClients/Vector%20Smart%20Object.png" alt="6">
                </div>
            </div>
        </div>
    </section>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <section class="nawards" id="awards">
                    <div class="nawards__title main-stats__title">Награды агентства в брендинге:</div>
                    <div class="nawards__blocks">
                        <div class="nawards__block">
                            <div class="nawards__img"><img src="<?php bloginfo('template_url'); ?>/assets/img/index/n1.svg"></div>
                        </div>
                        <div class="nawards__block">
                            <div class="nawards__img"><img src="<?php bloginfo('template_url'); ?>/assets/img/index/n2.jpg"></div>
                        </div>
                        <div class="nawards__block">
                            <div class="nawards__img"><img src="<?php bloginfo('template_url'); ?>/assets/img/index/n3.svg"></div>
                        </div>
                        <div class="nawards__block">
                            <div class="nawards__img"><img src="<?php bloginfo('template_url'); ?>/assets/img/index/n4.png"></div>
                        </div>
                        <div class="nawards__block">
                            <div class="nawards__img"><img src="<?php bloginfo('template_url'); ?>/assets/img/index/n5.png"></div>
                        </div>
                        <div class="nawards__block">
                            <div class="nawards__img"><img src="<?php bloginfo('template_url'); ?>/assets/img/index/n6.svg"></div>
                        </div>
                        <div class="nawards__block">
                            <div class="nawards__img"><img src="<?php bloginfo('template_url'); ?>/assets/img/index/n7.jpg"></div>
                        </div>
                        <div class="nawards__block">
                            <div class="nawards__img"><img src="<?php bloginfo('template_url'); ?>/assets/img/index/n8.jpeg"></div>
                        </div>
                        <div class="nawards__block">
                            <div class="nawards__img" style="padding: 10px;"><img src="<?php bloginfo('template_url'); ?>/assets/img/index/n9.svg"></div>
                        </div>
                        <div class="nawards__block">
                            <div class="nawards__img"><img src="<?php bloginfo('template_url'); ?>/assets/img/index/n10.png"></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>


    <section class="main-stats">
        <div class="container">
            <div class="row">
                <div class="col-md-12">



                    <div class="main-stats__title">382 клиента доверили нам 5787 проектов. Среди них:</div>
                    <div class="main-stats__blocks">
                        <a href="/services/graficheskiy-dizayn-upakovki-i-etiketki/" class="main-stats__block">
                            <div class="main-stats__num">4322</div>
                            <div class="main-stats__name">дизайнов упаковки</div>
                        </a>
                        <a href="/services/sozdanie-firmennogo-stilya/" class="main-stats__block">
                            <div class="main-stats__num">1113</div>
                            <div class="main-stats__name">фирменных стилей</div>
                        </a>
                        <a href="/services/razrabotka-nazvaniya/" class="main-stats__block">
                            <div class="main-stats__num">900</div>
                            <div class="main-stats__name">названий бренда</div>
                        </a>
                        <a href="/services/razrabotka-brend-buk-branch-buk/" class="main-stats__block">
                            <div class="main-stats__num">969</div>
                            <div class="main-stats__name">брендбуков</div>
                        </a>
                        <a href="/services/dizayn-etiketki/" class="main-stats__block">
                            <div class="main-stats__num">370</div>
                            <div class="main-stats__name">дизайнов этикетки</div>
                        </a>
                        <a href="/services/rebranding/" class="main-stats__block">
                            <div class="main-stats__num">794</div>
                            <div class="main-stats__name">ребрендингов</div>
                        </a>
                        <a href="/services/korporativnyy-brending/" class="main-stats__block">
                            <div class="main-stats__num">351</div>
                            <div class="main-stats__name">корпоративных брендов</div>
                        </a>
                        <a href="/services/riteyl-brending/" class="main-stats__block">
                            <div class="main-stats__num">231</div>
                            <div class="main-stats__name">ритейл-брендов</div>
                        </a>
                        <a href="/services/razrabotka-dizayn-strategii/" class="main-stats__block">
                            <div class="main-stats__num">2007</div>
                            <div class="main-stats__name">дизайн-стратегий</div>
                        </a>
                        <a href="/services/audit-brenda/" class="main-stats__block">
                            <div class="main-stats__num">2074</div>
                            <div class="main-stats__name">аудитов бренда</div>
                        </a>

                    </div>


                </div>
            </div>
        </div>
    </section>


    <style>
        .project-list .project-item__image .project-item__description {
            display:none;
        }
    </style>

    <section class="project-list">
        <div class="container">

            <div class="row">
                <div class="col-md-12">
                    <div class="main-stats__title">А это некоторые наши работы:</div>

                </div>
            </div>


            <div class="row">

                <div class="col-xl-6 col-md-12">
                    <div class="row">
                        <div id="bx_1847241719_6566" class="col-xl-6 col-md-6 col-sm-6 col-12">
                            <a href="/portfolio/veka/" class="project-item project-item-with-text project-item-alt-hover">
                                <div class="project-item__image">

                                    <picture class="twopic">
                                        <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/9619b66e37cb586fc37648b7bc4f108a.jpg" alt="VEKA" title="VEKA">
                                        <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/11c4a042e3a750c1c760b3e8e10ee19a.jpg" alt="VEKA" title="VEKA">
                                    </picture>


                                    <div class="project-item__description" style="background-color:#3a3a3a">
                                        <div class=" col-10">
                                            <div class="project-item__head">VEKA</div>
                                            Аудит бренда, Исследование и анализ, Создание фирменного стиля, Разработка позиционирования, Разработка архитектуры бренда, Разработка брендбук, бранчбук, Разработка дизайн-стратегии, Разработка коммуникационной стратегии, Workshops										</div>
                                    </div>

                                </div>
                                <span>VEKA</span>

                            </a>

                        </div>
                        <div id="bx_1847241719_25753" class="col-xl-6 col-md-6 col-sm-6 col-12">
                            <a href="https://www.depotwpf.ru/portfolio/betsiti/" class="project-item project-item-with-text project-item-alt-hover">
                                <div class="project-item__image">

                                    <picture class="twopic">
                                        <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/037b0786d016d1f68190c1141e372828.png" alt="Бетсити" title="Бетсити">
                                        <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/91a2e687176710dd85bd6921103357a1.png" alt="Бетсити" title="Бетсити">
                                    </picture>


                                    <div class="project-item__description" style="background-color:#3a3a3a">
                                        <div class=" col-10">
                                            <div class="project-item__head">Бетсити</div>
                                            Аудит бренда, разработка фирменного стиля, разработка позиционирования, дизайн интерфейсов и WEB										</div>
                                    </div>

                                </div>
                                <span>Бетсити</span>

                            </a>

                        </div>
                        <div id="bx_1847241719_25754" class="col-xl-6 col-md-6 col-sm-6 col-12">
                            <a href="https://www.depotwpf.ru/portfolio/ocard/" class="project-item project-item-with-text project-item-alt-hover">
                                <div class="project-item__image">

                                    <picture class="twopic">
                                        <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/b2191c5c54c6625142a0df6d7ceddee4.jpg" alt="Ocard" title="Ocard">
                                        <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/ac9e37070c4cf36a0f2782f33cc40720.jpg" alt="Ocard" title="Ocard">
                                    </picture>


                                    <div class="project-item__description" style="background-color:#3a3a3a">
                                        <div class=" col-10">
                                            <div class="project-item__head">Ocard</div>
                                            Нейминг: Разработка названия бренда, создание легенды бренда, дизайн этикетки, дизайн упаковки										</div>
                                    </div>

                                </div>
                                <span>Ocard</span>

                            </a>

                        </div>
                        <div id="bx_1847241719_6565" class="col-xl-6 col-md-6 col-sm-6 col-12">
                            <a href="/portfolio/lipetsk_coffee_company/" class="project-item project-item-with-text project-item-alt-hover">
                                <div class="project-item__image">

                                    <picture class="twopic">
                                        <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/9e5e29c4c1b5b19d3dc8d546064d270a.png" alt="Lipetsk Coffee Company" title="Lipetsk Coffee Company">
                                        <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/42c690b9acd4a83f506bf4787fc9e663.jpg" alt="Lipetsk Coffee Company" title="Lipetsk Coffee Company">
                                    </picture>


                                    <div class="project-item__description" style="background-color:#3a3a3a">
                                        <div class=" col-10">
                                            <div class="project-item__head">Lipetsk Coffee Company</div>
                                            Lipetsk Coffee Company — это новая сеть кофеен третьей волны родом из Липецка. Бренд уникален и самобытен с момента появления идеи о создании первой кофейни. Команда нашего агентства разработала для бренда нейминг, логотип и фирменный стиль.										</div>
                                    </div>

                                </div>
                                <span>Lipetsk Coffee Company</span>

                            </a>

                        </div>
                    </div>
                </div>
                <div id="bx_1847241719_23728" class="col-xl-6 col-md-6 col-sm-6 col-12">
                    <a href="https://www.depotwpf.ru/portfolio/chizhik/" class="project-item project-item-with-text">
                        <div class="project-item__image">
                            <picture class="twopic">
                                <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/a7e61bad1dd1d738602792ea8869fc68.jpg" alt="Чижик" title="Чижик">
                                <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/e0926fb2c7d42759c418bd0308c40138.jpg" alt="Чижик" title="Чижик">
                            </picture>


                            <div class="project-item__description" style="background-color:#3a3a3a">
                                <div class=" col-10">
                                    <div class="project-item__head">Чижик</div>
                                    Нейминг: разработка названия бренда, разработка фирменного стиля, разработка слогана, дескриптора.									</div>
                            </div>

                        </div>
                        <span>Чижик</span>

                    </a>
                </div>
            </div>

            <div class="row">

                <div id="bx_1847241719_23729" class="col-xl-3 col-md-6 col-sm-6 col-12">

                    <a href="https://www.depotwpf.ru/portfolio/kitkat_senses_spring_2021/" class="project-item project-item-with-text project-item-alt-hover">


                        <div class="project-item__image">
                            <picture class="twopic">
                                <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/8a086bb44dcd02d9bb6eceae0aeaa154.jpg" alt="KitKat® Senses® Spring 2021" title="KitKat® Senses® Spring 2021">
                                <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/644ab1d76da75b6632593d5db08d5ca8.jpg" alt="KitKat® Senses® Spring 2021" title="KitKat® Senses® Spring 2021">
                            </picture>

                            <div class="project-item__description" style="background-color:#3a3a3a">
                                <div class=" col-10">
                                    <div class="project-item__head">KitKat® Senses® Spring 2021</div>
                                    Дизайн упаковки, дизайн этикетки										</div>
                            </div>

                        </div>
                        <span>KitKat® Senses® Spring 2021</span>

                    </a>

                </div>
                <div id="bx_1847241719_25756" class="col-xl-3 col-md-6 col-sm-6 col-12">

                    <a href="https://www.depotwpf.ru/portfolio/setea/" class="project-item project-item-with-text project-item-alt-hover">


                        <div class="project-item__image">
                            <picture class="twopic">
                                <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/eecbbfb554dc3bf12397f26e4f09dbb0.png" alt="Setea" title="Setea">
                                <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/1322a225d5b5d454c38cee5502d21ccc.png" alt="Setea" title="Setea">
                            </picture>

                            <div class="project-item__description" style="background-color:#3a3a3a">
                                <div class=" col-10">
                                    <div class="project-item__head">Setea</div>
                                    Разработка фирменного стиля, cоздание легенды бренда, оформление пространств и навигация, разработка брендбука										</div>
                            </div>

                        </div>
                        <span>Setea</span>

                    </a>

                </div>
                <div id="bx_1847241719_16499" class="col-xl-3 col-md-6 col-sm-6 col-12">

                    <a href="/portfolio/cosmos_hotels_and_more/" class="project-item project-item-with-text project-item-alt-hover">


                        <div class="project-item__image">
                            <picture class="twopic">
                                <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/3325256d45adea754522037187112f43.png" alt="Cosmos Hotels & More" title="Cosmos Hotels & More">
                                <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/cf297a87bc13237deb296a95e34da3f4.png" alt="Cosmos Hotels & More" title="Cosmos Hotels & More">
                            </picture>

                            <div class="project-item__description" style="background-color:#3a3a3a">
                                <div class=" col-10">
                                    <div class="project-item__head">Cosmos Hotels & More</div>
                                    Аудит бренда, Исследования и анализ, Разработка названия, Создание фирменного стиля, Разработка позиционирования, Оформление пространств и навигация, Разработка архитектуры бренда, Разработка брендбук, бранчбук, Создание креативных текстов, Разработка дизайн-стратегии										</div>
                            </div>

                        </div>
                        <span>Cosmos Hotels & More</span>

                    </a>

                </div>
                <div id="bx_1847241719_23734" class="col-xl-3 col-md-6 col-sm-6 col-12">

                    <a href="https://www.depotwpf.ru/portfolio/zdorovoshchi/" class="project-item project-item-with-text project-item-alt-hover">


                        <div class="project-item__image">
                            <picture class="twopic">
                                <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/2264b74e09e0043a90089a69a6cb3e73.jpg" alt="Здоровощи" title="Здоровощи">
                                <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/10328a6ebb5c4fdcbeaa4f92122bc62e.jpg" alt="Здоровощи" title="Здоровощи">
                            </picture>

                            <div class="project-item__description" style="background-color:#3a3a3a">
                                <div class=" col-10">
                                    <div class="project-item__head">Здоровощи</div>
                                    Разработка позиционирования, дизайн этикетки, дизайн упаковки										</div>
                            </div>

                        </div>
                        <span>Здоровощи</span>

                    </a>

                </div>
            </div>

            <div class="row">

                <div id="bx_1847241719_16501" class="col-xl-6 col-md-6 col-sm-6 col-12">

                    <a href="/portfolio/psb/" class="project-item project-item-with-text">
                        <div class="project-item__image">

                            <picture class="twopic">
                                <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/d458613fca10a05e6929f50446e6827f.png" alt="ПСБ" title="ПСБ">
                                <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/52bee2725135dbb5d00915971dd27cc4.png" alt="ПСБ" title="ПСБ">
                            </picture>


                            <div class="project-item__description" style="background-color:#3a3a3a">
                                <div class=" col-10">
                                    <div class="project-item__head">ПСБ</div>
                                    Исследование и анализ, Создание фирменного стиля, Разработка слогана, дескриптора, Разработка позиционирования, Оформление пространств и навигация, Разработка архитектуры бренда, Разработка брендбук, бранчбук, Разработка дизайн-стратегии, Разработка коммуникационной стратегии, Финбрендинг											</div>
                            </div>
                        </div>
                        <span>ПСБ</span>

                    </a>

                </div>
                <div id="bx_1847241719_23733" class="col-xl-6 col-md-6 col-sm-6 col-12">

                    <a href="https://www.depotwpf.ru/portfolio/zhk_eniteo/" class="project-item project-item-with-text">
                        <div class="project-item__image">

                            <picture class="twopic">
                                <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/7def62b1ff7752dd76472ed725342fd1.jpg" alt="ЖК Eniteo" title="ЖК Eniteo">
                                <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/b3f59347dfe154f42fc41f1ca86f6a90.jpg" alt="ЖК Eniteo" title="ЖК Eniteo">
                            </picture>


                            <div class="project-item__description" style="background-color:#3a3a3a">
                                <div class=" col-10">
                                    <div class="project-item__head">ЖК Eniteo</div>
                                    Нейминг: Разработка названия бренда, разработка фирменного стиля, разработка позиционирования, разработка креативной идеи, концепции продвижения											</div>
                            </div>
                        </div>
                        <span>ЖК Eniteo</span>

                    </a>

                </div>
            </div>

            <div class="row">

                <div id="bx_1847241719_23736" class="col-xl-6 col-md-6 col-sm-6 col-12">
                    <a href="https://www.depotwpf.ru/portfolio/vinoterra/" class="project-item project-item-with-text">
                        <div class="project-item__image">
                            <picture class="twopic">
                                <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/9c1c637de30ab660f74bd4d45798c2bc.png" alt="Vinoterra" title="Vinoterra">
                                <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/80fe9adadf5d12859781b17af8433360.png" alt="Vinoterra" title="Vinoterra">
                            </picture>


                            <div class="project-item__description" style="background-color:#3a3a3a">
                                <div class=" col-10">
                                    <div class="project-item__head">Vinoterra</div>
                                    Разработка фирменного стиля, разработка слогана, дескриптора; разработка креативной идеи, концепции продвижения									</div>
                            </div>

                        </div>
                        <span>Vinoterra</span>

                    </a>

                </div>
                <div class="col-xl-6 col-md-12">
                    <div class="row">
                        <div id="bx_1847241719_25757" class="col-xl-6 col-md-6 col-sm-6 col-12">
                            <a href="https://www.depotwpf.ru/portfolio/azbuka_morya/" class="project-item project-item-with-text project-item-alt-hover">
                                <div class="project-item__image">
                                    <picture class="twopic">
                                        <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/9a1f426da8d710cfc4510833c7eff9da.png" alt="Азбука Моря" title="Азбука Моря">
                                        <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/ae652e7ef3ebe2754813ca6fcdd466ff.png" alt="Азбука Моря" title="Азбука Моря">
                                    </picture>


                                    <div class="project-item__description" style="background-color:#3a3a3a">
                                        <div class=" col-10">
                                            <div class="project-item__head">Азбука Моря</div>
                                            Дизайн упаковки, дизайн этикетки										</div>
                                    </div>

                                </div>
                                <span>Азбука Моря</span>

                            </a>

                        </div>
                        <div id="bx_1847241719_16505" class="col-xl-6 col-md-6 col-sm-6 col-12">
                            <a href="/portfolio/chudo_detki/" class="project-item project-item-with-text project-item-alt-hover">
                                <div class="project-item__image">
                                    <picture class="twopic">
                                        <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/5553d40820879ac6a50128c8e9371c08.jpg" alt="«Чудо-детки»" title="«Чудо-детки»">
                                        <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/bfaefbfeec90eaed4ed2b55b599e469f.png" alt="«Чудо-детки»" title="«Чудо-детки»">
                                    </picture>


                                    <div class="project-item__description" style="background-color:#3a3a3a">
                                        <div class=" col-10">
                                            <div class="project-item__head">«Чудо-детки»</div>
                                            Графический дизайн упаковки и этикетки, Аудит бренда, Разработка дизайн-стратегии										</div>
                                    </div>

                                </div>
                                <span>«Чудо-детки»</span>

                            </a>

                        </div>
                        <div id="bx_1847241719_16506" class="col-xl-6 col-md-6 col-sm-6 col-12">
                            <a href="/portfolio/valaam/" class="project-item project-item-with-text project-item-alt-hover">
                                <div class="project-item__image">
                                    <picture class="twopic">
                                        <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/1e6844bbf1592e1a3ca5152acac8a226.jpg" alt="«Валаам»" title="«Валаам»">
                                        <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/0fa2735cec803a6ad7339932c803dd99.png" alt="«Валаам»" title="«Валаам»">
                                    </picture>


                                    <div class="project-item__description" style="background-color:#3a3a3a">
                                        <div class=" col-10">
                                            <div class="project-item__head">«Валаам»</div>
                                            Графический дизайн упаковки и этикетки, Исследования и анализ, Разработка позиционирования, Разработка брендбук, бранчбук, Создание креативных текстов, Разработка дизайн-стратегии										</div>
                                    </div>

                                </div>
                                <span>«Валаам»</span>

                            </a>

                        </div>
                        <div id="bx_1847241719_16507" class="col-xl-6 col-md-6 col-sm-6 col-12">
                            <a href="/portfolio/rnkb/" class="project-item project-item-with-text project-item-alt-hover">
                                <div class="project-item__image">
                                    <picture class="twopic">
                                        <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/ac8faa193ad3f6efe9dd82f0175cb5e4.png" alt="РНКБ" title="РНКБ">
                                        <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/f0fa338e65d6246f65b6ff4d94321063.png" alt="РНКБ" title="РНКБ">
                                    </picture>


                                    <div class="project-item__description" style="background-color:#3a3a3a">
                                        <div class=" col-10">
                                            <div class="project-item__head">РНКБ</div>
                                            Аудит бренда, Исследования и анализ, Создание фирменного стиля, Разработка позиционирования, Разработка брендбук, бранчбук, Разрабокта дизайн-стратегии, Разработка коммуникационной стратегии										</div>
                                    </div>

                                </div>
                                <span>РНКБ</span>

                            </a>

                        </div>
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="col-xl-6 col-md-12">
                    <div class="row">
                        <div id="bx_1847241719_16508" class="col-xl-6 col-md-6 col-sm-6 col-12">
                            <a href="/portfolio/invitro/" class="project-item project-item-with-text project-item-alt-hover">
                                <div class="project-item__image">

                                    <picture class="twopic">
                                        <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/ffb3dbee10ed67cfea9ced51de5945af.jpg" alt="INVITRO" title="INVITRO">
                                        <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/a945162f938a44eb7513750579fe5752.png" alt="INVITRO" title="INVITRO">
                                    </picture>


                                    <div class="project-item__description" style="background-color:#3a3a3a">
                                        <div class=" col-10">
                                            <div class="project-item__head">INVITRO</div>
                                            Аудит бренд, Создание фирменного стиля, Оформление пространств и навигация, Разработка бренд бук, бранч бук, Разработка дизайн-стратегии, Разработка коммуникационной стратегии										</div>
                                    </div>

                                </div>
                                <span>INVITRO</span>

                            </a>

                        </div>
                        <div id="bx_1847241719_16509" class="col-xl-6 col-md-6 col-sm-6 col-12">
                            <a href="/portfolio/tsentralnyy_detskiy_magazin_60_let/" class="project-item project-item-with-text project-item-alt-hover">
                                <div class="project-item__image">

                                    <picture class="twopic">
                                        <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/3e267520df2e636c37b40eaa493bb0bb.png" alt="ЦДМ" title="ЦДМ">
                                        <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/b3ff4580b143b11937f488c5a8f40cc4.png" alt="ЦДМ" title="ЦДМ">
                                    </picture>


                                    <div class="project-item__description" style="background-color:#3a3a3a">
                                        <div class=" col-10">
                                            <div class="project-item__head">ЦДМ</div>
                                            Аудит бренда, Создание фирменного стиля, Разработка слогана, дескриптора, Разработка дизайн-стратегии, Разработка коммуникационной стратегии										</div>
                                    </div>

                                </div>
                                <span>ЦДМ</span>

                            </a>

                        </div>
                        <div id="bx_1847241719_16510" class="col-xl-6 col-md-6 col-sm-6 col-12">
                            <a href="/portfolio/semeynoye_delo/" class="project-item project-item-with-text project-item-alt-hover">
                                <div class="project-item__image">

                                    <picture class="twopic">
                                        <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/468798057fe9ea1cd413c0670e112def.jpg" alt="«Семейное дело»" title="«Семейное дело»">
                                        <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/67bf21c5f34a78625af1e716e965e286.png" alt="«Семейное дело»" title="«Семейное дело»">
                                    </picture>


                                    <div class="project-item__description" style="background-color:#3a3a3a">
                                        <div class=" col-10">
                                            <div class="project-item__head">«Семейное дело»</div>
                                            Графический дизайн упаковки и этикетки, Аудит бренда, Исследование и анализ, Разработка позиционирования, Разработка дизайн-стратегии										</div>
                                    </div>

                                </div>
                                <span>«Семейное дело»</span>

                            </a>

                        </div>
                        <div id="bx_1847241719_16511" class="col-xl-6 col-md-6 col-sm-6 col-12">
                            <a href="/portfolio/prostye_pravila/" class="project-item project-item-with-text project-item-alt-hover">
                                <div class="project-item__image">

                                    <picture class="twopic">
                                        <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/91cf0b499951138b37e6eb242d2b5791.jpg" alt="«Простые правила»" title="«Простые правила»">
                                        <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/197862d4cc6657c24995fb1fddbbf236.png" alt="«Простые правила»" title="«Простые правила»">
                                    </picture>


                                    <div class="project-item__description" style="background-color:#3a3a3a">
                                        <div class=" col-10">
                                            <div class="project-item__head">«Простые правила»</div>
                                            Графический дизайн упаковки и этикетки, Аудит бренда, Исследование и анализ, Разработка позиционирования, Разработка креативной идеи, концепции продвижения, Разработка дизайн-стратегии										</div>
                                    </div>

                                </div>
                                <span>«Простые правила»</span>

                            </a>

                        </div>
                    </div>
                </div>
                <div id="bx_1847241719_16512" class="col-xl-6 col-md-6 col-sm-6 col-12">
                    <a href="/portfolio/avito/" class="project-item project-item-with-text">
                        <div class="project-item__image">
                            <picture class="twopic">
                                <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/175efad6f6c6a88737351fb7c613801a.jpg" alt="Avito" title="Avito">
                                <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/7ff9ec644853bc6c1185a67581a69c5f.png" alt="Avito" title="Avito">
                            </picture>


                            <div class="project-item__description" style="background-color:#3a3a3a">
                                <div class=" col-10">
                                    <div class="project-item__head">Avito</div>
                                    Аудит бренда, Создание фирменного стиля, Разработка бренд бук, бранч бук, Разработка дизайн-стратегии, Дизайн интерфейсов и WEB, Ребрендинг									</div>
                            </div>

                        </div>
                        <span>Avito</span>

                    </a>
                </div>
            </div>

            <div class="row">

                <div id="bx_1847241719_16513" class="col-xl-6 col-md-6 col-sm-6 col-12">

                    <a href="/portfolio/pek/" class="project-item project-item-with-text">
                        <div class="project-item__image">

                            <picture class="twopic">
                                <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/371c295081212dcd8a6969812e997ea5.jpg" alt="ПЭК" title="ПЭК">
                                <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/b926f94ed7166dfa2921e31896ccf777.png" alt="ПЭК" title="ПЭК">
                            </picture>


                            <div class="project-item__description" style="background-color:#3a3a3a">
                                <div class=" col-10">
                                    <div class="project-item__head">ПЭК</div>
                                    Аудит бренда, Исследования и анализ, Создание фирменного стиля, Разработка позиционирования, Оформление пространств и навигация, Разработка бренд бук, брачн бук, Разработка дизайн-стратегии, Разработка коммуникационной стратегии, Ребрендинг											</div>
                            </div>
                        </div>
                        <span>ПЭК</span>

                    </a>

                </div>
                <div id="bx_1847241719_25755" class="col-xl-6 col-md-6 col-sm-6 col-12">

                    <a href="https://www.depotwpf.ru/portfolio/durr/" class="project-item project-item-with-text">
                        <div class="project-item__image">

                            <picture class="twopic">
                                <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/dbc187516a3b3409587aa6e66a658d1e.jpg" alt="Твердые сыры Dürr" title="Твердые сыры Dürr">
                                <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/7123a1b01b51ddf58ad8e1c205bcd94c.png" alt="Твердые сыры Dürr" title="Твердые сыры Dürr">
                            </picture>


                            <div class="project-item__description" style="background-color:#3a3a3a">
                                <div class=" col-10">
                                    <div class="project-item__head">Твердые сыры Dürr</div>
                                    Дизайн этикетки, дизайн упаковки											</div>
                            </div>
                        </div>
                        <span>Твердые сыры Dürr</span>

                    </a>

                </div>
            </div>

            <div class="row">

                <div id="bx_1847241719_16515" class="col-xl-3 col-md-6 col-sm-6 col-12">

                    <a href="/portfolio/aydentika_moskvy/" class="project-item project-item-with-text project-item-alt-hover">


                        <div class="project-item__image">
                            <picture class="twopic">
                                <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/9446803b5e866ecacb73171744ee0fe0.jpg" alt="Айдентика Москвы" title="Айдентика Москвы">
                                <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/d1779246673cdf500948e53e91ef80a0.png" alt="Айдентика Москвы" title="Айдентика Москвы">
                            </picture>

                            <div class="project-item__description" style="background-color:#3a3a3a">
                                <div class=" col-10">
                                    <div class="project-item__head">Айдентика Москвы</div>
                                    Создание фирменного стиля, Оформление пространств и навигация, Разработка бренд бук, бранч бук, Разработка дизайн-стратегии										</div>
                            </div>

                        </div>
                        <span>Айдентика Москвы</span>

                    </a>

                </div>
                <div id="bx_1847241719_16516" class="col-xl-3 col-md-6 col-sm-6 col-12">

                    <a href="/portfolio/saito/" class="project-item project-item-with-text project-item-alt-hover">


                        <div class="project-item__image">
                            <picture class="twopic">
                                <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/f878592bac49863bc542291833266f21.jpg" alt="Saito" title="Saito">
                                <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/bc9d625532119c37ad60d4ca4432497c.png" alt="Saito" title="Saito">
                            </picture>

                            <div class="project-item__description" style="background-color:#3a3a3a">
                                <div class=" col-10">
                                    <div class="project-item__head">Saito</div>
                                    Графический дизайн упаковки и этикетки, Аудит бренда, Исследование и анализ, Разработка названия, Разработка позиционирования, Разработка дизайн-стратегии										</div>
                            </div>

                        </div>
                        <span>Saito</span>

                    </a>

                </div>
                <div id="bx_1847241719_16517" class="col-xl-3 col-md-6 col-sm-6 col-12">

                    <a href="/portfolio/livingood/" class="project-item project-item-with-text project-item-alt-hover">


                        <div class="project-item__image">
                            <picture class="twopic">
                                <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/9619345298756897a1f395b7107baf2c.jpg" alt="MAKFA" title="MAKFA">
                                <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/11a772b998fd7192b5fe250c4aadbf7e.png" alt="MAKFA" title="MAKFA">
                            </picture>

                            <div class="project-item__description" style="background-color:#3a3a3a">
                                <div class=" col-10">
                                    <div class="project-item__head">MAKFA</div>
                                    Графический дизайн упаковки и этикетки, Аудит бренда, Разработка названия, Разработка дизайн-стратегии										</div>
                            </div>

                        </div>
                        <span>MAKFA</span>

                    </a>

                </div>
                <div id="bx_1847241719_16518" class="col-xl-3 col-md-6 col-sm-6 col-12">

                    <a href="/portfolio/wonder_lab/" class="project-item project-item-with-text project-item-alt-hover">


                        <div class="project-item__image">
                            <picture class="twopic">
                                <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/974c12f47c03d0da6834d8c900a5c60e.jpg" alt="WONDER LAB" title="WONDER LAB">
                                <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/cfd2580611e126efc134c5f16cd82a13.png" alt="WONDER LAB" title="WONDER LAB">
                            </picture>

                            <div class="project-item__description" style="background-color:#3a3a3a">
                                <div class=" col-10">
                                    <div class="project-item__head">WONDER LAB</div>
                                    Графический дизайн упаковки и этикетки, Аудит бренда, Исследования и анализ, Разработка названия, Разработка позиционирования, Разработка формы упаковки, Разработка дизайн-стратегии										</div>
                            </div>

                        </div>
                        <span>WONDER LAB</span>

                    </a>

                </div>
            </div>

            <div class="row">

                <div id="bx_1847241719_23730" class="col-xl-3 col-md-6 col-sm-6 col-12">

                    <a href="https://www.depotwpf.ru/portfolio/kalinia/" class="project-item project-item-with-text project-item-alt-hover">


                        <div class="project-item__image">
                            <picture class="twopic">
                                <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/4dac75b8b8e699b1654280146a0cc2cf.jpg" alt="Kalinia" title="Kalinia">
                                <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/c3b45930878bbf515f8769cf47cc4c8a.jpg" alt="Kalinia" title="Kalinia">
                            </picture>

                            <div class="project-item__description" style="background-color:#3a3a3a">
                                <div class=" col-10">
                                    <div class="project-item__head">Kalinia</div>
                                    Исследование и анализ, нейминг: разработка названия бренда, разработка позиционирования, разработка креативной идеи, концепции продвижения; дизайн этикетки										</div>
                            </div>

                        </div>
                        <span>Kalinia</span>

                    </a>

                </div>
                <div id="bx_1847241719_20845" class="col-xl-3 col-md-6 col-sm-6 col-12">

                    <a href="/portfolio/open_group/" class="project-item project-item-with-text project-item-alt-hover">


                        <div class="project-item__image">
                            <picture class="twopic">
                                <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/bd75d8d64cad92911ce5112db282fd33.jpg" alt="OPEN group" title="OPEN group">
                                <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/419aa1c8d058dfb8107abbdec309189b.png" alt="OPEN group" title="OPEN group">
                            </picture>

                            <div class="project-item__description" style="background-color:#3a3a3a">
                                <div class=" col-10">
                                    <div class="project-item__head">OPEN group</div>
                                    Аудит бренда, Исследование и анализ, Разработка фирменного стиля, Создание инфографики и анимации, Разработка позиционирования, Разработка брендбука, бранчбука, Разработка дизайн-стратегии										</div>
                            </div>

                        </div>
                        <span>OPEN group</span>

                    </a>

                </div>
                <div id="bx_1847241719_16522" class="col-xl-3 col-md-6 col-sm-6 col-12">

                    <a href="/portfolio/iek_group/" class="project-item project-item-with-text project-item-alt-hover">


                        <div class="project-item__image">
                            <picture class="twopic">
                                <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/86b842bbfc2ce772f16e8994913b6b84.jpg" alt="IEK GROUP" title="IEK GROUP">
                                <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/608970b807f8028b608529152f5022c2.png" alt="IEK GROUP" title="IEK GROUP">
                            </picture>

                            <div class="project-item__description" style="background-color:#3a3a3a">
                                <div class=" col-10">
                                    <div class="project-item__head">IEK GROUP</div>
                                    Аудит бренда, Создание фирменного стиля, Разработка архитектуры бренда, Разработка брендбук, бранчбук, Разработка дизайн-стратегии, Разработка коммуникационной стратегии, Дизайн интерфейсов и WEB										</div>
                            </div>

                        </div>
                        <span>IEK GROUP</span>

                    </a>

                </div>
                <div id="bx_1847241719_23735" class="col-xl-3 col-md-6 col-sm-6 col-12">

                    <a href="https://www.depotwpf.ru/portfolio/rumyanovo/" class="project-item project-item-with-text project-item-alt-hover">


                        <div class="project-item__image">
                            <picture class="twopic">
                                <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/f74fbc7be47c0d851a616782b5eebbc7.png" alt="Румяново" title="Румяново">
                                <img class="twopic__img" loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/index/9534153258da70df936ae9795e3c6a89.png" alt="Румяново" title="Румяново">
                            </picture>

                            <div class="project-item__description" style="background-color:#3a3a3a">
                                <div class=" col-10">
                                    <div class="project-item__head">Румяново</div>
                                    Дизайн этикетки, дизайн упаковки										</div>
                            </div>

                        </div>
                        <span>Румяново</span>

                    </a>

                </div>
            </div>
        </div>
    </section>
    <div class="addit-button align-center">
        <a href="/portfolio/" class="button button_gray">Больше проектов</a>
    </div>
    <footer class="footer">
        <div class="container ">
            <div class="row footer_row">
                <div class="footer__phone col-lg-3 col-md-3">
                    <a href="tel:+7 (495) 363-22-88">+7 (495) 363-22-88</a>                <a>10:00 - 19:00 / Пн-Пт</a>

                </div>
                <div class="footer__time col-lg-3 col-md-3">
                    <div><a href="mailto:hello@depotwpf.ru" id="mailto-email">hello@depotwpf.ru</a></div>
                    <a href="/contacts/#form_feedback">Написать нам</a>
                </div>
                <div class="footer__address col-lg-4 col-md-4">
                    109004, Москва, Пестовский пер., д. 16, стр. 2,<br>
                    ресепшн -  4 этаж&nbsp;(м. Таганская, Марксистская)            </div>

                <div class="col-lg-2 col-md-2">
                    <div class="footer__socs fsocs2">
                        <a href="https://zen.yandex.ru/id/5de5074f43fdc000b2bfa3a7" class="socs zen"></a>
                        <a href="https://t.me/depot_branding" class="socs telegram"></a>
                        <!--<a href="http://www.facebook.com/depot.WPF" class="socs fb"></a> <a href="https://instagram.com/depot_wpf/" class="socs ins"></a>--><a href="http://www.youtube.com/user/SuperSnodo/" class="socs yt"></a> <a href="https://vk.com/depotwpf" class="socs v k"></a> <a href="https://twitter.com/depot_wpf" class="socs tw"></a>				</div>
                </div>

            </div>
            <div class="footer__middle row">
                <div class="col-xl-6 col-lg-12 ">
  
                    <div class="footer__menu">
                        <a href="/portfolio/">Портфолио</a>

                        <a href="/services/">Услуги</a>

                        <a href="/about/">О нас</a>

                        <a href="/special-projects/">Спецпроекты</a>

                        <a href="/news/">Новости</a>

                        <a href="/blog/">Блог</a>

                        <a href="/contacts/">Контакты</a>


                    </div>




                </div>
                <div class="col-xl-6 col-lg-12">




                    <!---->

                    <!---->



                    <div id="comp_06dbf2ddf18f83e3a510506b2b502c1e">


                    </div>
                </div>

            </div>
            <div class="row" style="padding-top: 27px;">
                <div class="col-xl-12 col-lg-12 ">
                    <div class="footer__text">
                        <div class="copyright">© 1998-2022 Брендинговое агентство Depot в Москве.&nbsp; Все права защищены. </div>
                        <a href="/sitemap/">Карта сайта</a>
                        <a href="/term/">Политика конфиденциальности</a>
                        <span class="depotid"></span>
                    </div>
                </div>

            </div>
        </div>
    </footer>

    <div class="go-up"></div>
    <form action="/search/" method="get" class="search-bloc">
        <div class="search-block__close"></div>
        <input type="text" name="q" placeholder="Поиск по сайту">
        <input type="submit">
    </form>

    <div class="overlay"></div>

    <div class="js--modal__order js--modal-form modal-form order-form">
        <div class="js--modal-form-close modal-form-close">&times;</div>
        <div id="comp_83f01e8ac3326e84a07bfaa54c2f11a4">
            <div class="modal__form__title">Заказать бренд</div>
            <p>

            </p>





            <form name="SIMPLE_FORM_1" action="/" method="POST" enctype="multipart/form-data"><input type="hidden" name="bxajaxid" id="bxajaxid_83f01e8ac3326e84a07bfaa54c2f11a4_Ar8Szp" value="83f01e8ac3326e84a07bfaa54c2f11a4"><input type="hidden" name="AJAX_CALL" value="Y"><input type="hidden" name="sessid" id="sessid_1" value="6905b343599a405fcbd63e45c3045157"><input type="hidden" name="WEB_FORM_ID" value="1">


                <div class="form-description">Перед началом работы нам необходимо обсудить детали. Расскажите нам о своем проекте и укажите ваши контактные данные. А мы обязательно свяжемся с вами!</div>




                <div class="form-inputs__wrap">
                    <div class="form-input__wrap js--form-input__wrap  form-input__wrap--halfwidth  js--form-validated__field">
                        <span class="form-input__label">Имя<font color="red"><span class="form-required starrequired">*</span></font>:</span>
                        <span class="form-input__input-wrap"><input type="text" class="inputtext" name="form_text_5" value></span>
                    </div>

                    <div class="form-input__wrap js--form-input__wrap  form-input__wrap--halfwidth  js--form-validated__field">
                        <span class="form-input__label">Название компании<font color="red"><span class="form-required starrequired">*</span></font>:</span>
                        <span class="form-input__input-wrap"><input type="text" class="inputtext" name="form_text_1" value></span>
                    </div>

                    <div class="form-input__wrap js--form-input__wrap  form-input__wrap--halfwidth  js--form-validated__field">
                        <span class="form-input__label">E-mail<font color="red"><span class="form-required starrequired">*</span></font>:</span>
                        <span class="form-input__input-wrap"><input data-pattern="email" type="text" class="inputtext" name="form_email_3" value size="0"></span>
                    </div>

                    <div class="form-input__wrap js--form-input__wrap  form-input__wrap--halfwidth  js--form-validated__field">
                        <span class="form-input__label">Телефон<font color="red"><span class="form-required starrequired">*</span></font>:</span>
                        <span class="form-input__input-wrap"><input type="text" class="inputtext" name="form_text_4" value></span>
                    </div>

                    <div class="form-input__wrap js--form-input__wrap   js--form-validated__field">
                        <span class="form-input__label">Описание задачи<font color="red"><span class="form-required starrequired">*</span></font>:</span>
                        <span class="form-input__input-wrap"><textarea name="form_textarea_2" cols="40" rows="5" class="inputtextarea"></textarea></span>
                    </div>

                    <div class="form-input__wrap js--form-input__wrap  form-input__wrap--halfwidth  ">
                        <span class="form-input__input-wrap"><input type="checkbox" id="15" name="form_checkbox_SIMPLE_QUESTION_978[]" value="15"><label for="15">Я хочу подписаться на новостную рассылку</label></span>
                    </div>

                    <div class="form-input__wrap js--form-input__wrap  form-input__wrap--halfwidth  js--form-validated__field">
                        <span class="form-input__input-wrap"><input type="checkbox" id="policy__agreement--check" name="form_checkbox_SIMPLE_QUESTION_848[]" value="6" class="custom--styled policy__agreement"><label for="policy__agreement--check" class="policy__agreement__text"> <span>Я согласен на обработку</span> <a target="_blank" href="/term/" class="policy__agreement__link">персональных данных</a></label></span>
                    </div>

                </div>
                <div class="captcha-wrap form-input__wrap">
                    <input type="hidden" name="captcha_sid" value="07df3b1a9fd931a46d882949c5a4f8e6"><img style="display:none" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-width="180" data-height="40"><div id="recaptcha_2d51" class="g-recaptcha" data-theme="light" data-sitekey="6LdIh78UAAAAAIpE0l_n7kyvD4c4S6712CRFSpov" data-size="invisible" data-badge="inline" data-callback="RecaptchafreeSubmitForm"></div>
                    <input type="text" style="display:none" name="captcha_word" size="30" maxlength="50" value data-class="inputtext">

                </div>

                <div class="form-button__wrap">
                    <input type="submit" class="button button--green form-submit__btn" name="web_form_submit" value="Отправить заявку">
                </div>

            </form></div></div>

    <div class="js--modal-form-cover modal-form-cover"></div>
    <button class="js--modal_order--toggler button modal_order--toggler animation-btn" id="form-brend">
        Заказать бренд
    </button>



    <link rel="stylesheet" href="css/jquery.fancybox.min.css">
    <!-- calltouch -->
    <!-- calltouch -->

</div>
<script src="<?php bloginfo('template_url'); ?>/assets/js/index/template_12eae63b8913921768d26a1b87489467_v1.js"></script>
<script>
    const settings = {
        infinite: true,
        dots: true,
        autoplay: true,
        adaptiveHeight: true,
        autoplaySpeed: 3002    };

    $(function () {
        $slick = $('.main-slider').slick(settings);

        $('.main-slider-item').on('click', function(){
            $slick.slick('slickPause');
        });

        $(window).on('resize orientationChange', function (event) {
            $('.main-slider').slick("unslick");
            $('.main-slider').slick(settings);
        });

        $('.main-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            if ($(this).find('video').length > 0)
                $(this).find('video')[0].play();
        });

    })
</script>
<script src="<?php bloginfo('template_url'); ?>/assets/js/index/jquery.inputmask.min.js"></script>
<script src="<?php bloginfo('template_url'); ?>/assets/js/index/scripts.js"></script>
<script src="<?php bloginfo('template_url'); ?>/assets/js/index/jquery.fancybox.min.js"></script>


<script src="<?php bloginfo('template_url'); ?>/assets/js/script.js"></script>
<script src="<?php bloginfo('template_url'); ?>/assets/js/main.js"></script>
<script src="<?php bloginfo('template_url'); ?>/assets/js/index/modal_forms.js"></script>


<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

<script>
    var splide = new Splide('.splide');
    splide.mount();
</script>


<?php //get_footer() ?>