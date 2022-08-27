<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>FOX group</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous" referrerpolicy="no-referrer"/>
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/navbar.css">
    <?php wp_head();?>
</head>
<body>
<div class="menu menu-glass">
    <div class="container menu-show">
        <a href="" class="logo">
            <img src="<?php bloginfo('template_url'); ?>/assets/img/FOX DESIGN STUDIOd 1.png" alt="">
        </a>
        <div class="hamburger-perent" onclick="addMenu()">
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