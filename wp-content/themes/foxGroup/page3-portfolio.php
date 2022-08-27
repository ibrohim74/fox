<?php
/*
Template Name: foxPortfolio
*/
?>
<html lang="<?php language_attributes(); ?>">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio</title>
    <link rel="stylesheet" href="<?php bloginfo('template_url');?>/assets/css/portfolio.css">
    <?php get_header()?>
</head>
<body
style=" cursor: url(<?php bloginfo('template_url'); ?>/assets/img/curSvg.svg), auto;">
<div class="container">
    <div class="text-header-portfolio">
        <h1>Fox design studio </h1>
        <h1>O’zbekistondagi №1 brending agentligi</h1>
    </div>
    <div class="info-head">
        <div class="info-item">
            <div class="info-item-circle">
                <ion-icon name="document-text-outline"></ion-icon>
            </div>
            <div class="info-item-text">
                <h1>1000+ <br>
                    loyihalar</h1>
            </div>
        </div>
        <div class="info-item">
            <div class="info-item-circle">
                <ion-icon name="rocket-outline"></ion-icon>
            </div>
            <div class="info-item-text">
                <h1>reytingda <br>
                    Top 10</h1>
            </div>
        </div>
        <div class="info-item">
            <div class="info-item-circle">
                <ion-icon name="flash-outline"></ion-icon>
            </div>
            <div class="info-item-text">
                <h1>5+ yildan <br> bozorda</h1>
            </div>
        </div>
    </div>
    
    <section class="xizmat">
        <div class="xizmat-text"><h1>Xizmatlar</h1></div>
        <div class="xizmat-boxes">
            <div class="xizmat1">
                <div class="xizmat-box-item">
                    <div class="xizmat-box-img"><img src="<?php bloginfo('template_url'); ?>/assets/img/portfolio/xizmatlar/brending.png" alt=""></div>
                    <div class="xizmat-box-text">
                        Brending
                    </div>
                </div>
                <div class="xizmat-box-item">
                    <div class="xizmat-box-img"><img src="<?php bloginfo('template_url'); ?>/assets/img/portfolio/xizmatlar/nayming.png" alt=""></div>
                    <div class="xizmat-box-text">
                        Naming
                    </div>
                </div>
                <div class="xizmat-box-item">
                    <div class="xizmat-box-img"><img src="<?php bloginfo('template_url'); ?>/assets/img/portfolio/xizmatlar/rebrending.png" alt=""></div>
                    <div class="xizmat-box-text">
                        Rebrending
                    </div>
                </div>
            </div>
            <div class="xizmat2">
                <div class="xizmat-box-item">
                    <div class="xizmat-box-img"><img src="<?php bloginfo('template_url'); ?>/assets/img/portfolio/xizmatlar/qadoqDizayn.png" alt=""></div>
                    <div class="xizmat-box-text">
                        Qadoq dizayni
                    </div>
                </div>
                <div class="xizmat-box-item">
                    <div class="xizmat-box-img"><img src="<?php bloginfo('template_url'); ?>/assets/img/portfolio/xizmatlar/brendbook.png" alt=""></div>
                    <div class="xizmat-box-text">
                        Brendbook
                    </div>
                </div>
                <div class="xizmat-box-item">
                    <div class="xizmat-box-img"><img src="<?php bloginfo('template_url'); ?>/assets/img/portfolio/xizmatlar/brendaoudit.png" alt=""></div>
                    <div class="xizmat-box-text">
                        Brend auditi
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container">
        <h1 class="normal-title">Bu bizning loyihalarimiz</h1>
        <div class="portfolio">
            <div class="st-content">
                <div class="st-db">
                    <img src="<?php bloginfo('template_url'); ?>/assets/img/vaza.png" alt="">
                    <img src="<?php bloginfo('template_url'); ?>/assets/img/open.png" alt="">
                </div>
                <div class="st-one">
                    <img src="<?php bloginfo('template_url'); ?>/assets/img/sut.png" alt="">
                </div>
            </div>

            <div class="nd-content">
                <div class="nd-st">
                    <img src="<?php bloginfo('template_url'); ?>/assets/img/nd-st.png" alt="">
                </div>
                <div class="nd-nd">
                    <img src="<?php bloginfo('template_url'); ?>/assets/img/nd-nd.png" alt="">
                </div>
            </div>

            <div class="rd-content">
                <div class="rd-st">
                    <img src="<?php bloginfo('template_url'); ?>/assets/img/juise.png" alt="">
                </div>
                <div class="rd-nd">
                    <img src="<?php bloginfo('template_url'); ?>/assets/img/magnum.png" alt="">
                </div>
            </div>

            <div class="th-content" style="margin-bottom: 100px">
                <div class="th-st">
                    <img src="<?php bloginfo('template_url'); ?>/assets/img/th-st.png" alt="">
                </div>
                <div class="th-db">
                    <img src="<?php bloginfo('template_url'); ?>/assets/img/db-st.png" alt="">
                    <img src="<?php bloginfo('template_url'); ?>/assets/img/db-nd.png" alt="">
                </div>
            </div>

        </div>
    </section>

</div>



<?php get_footer()?>
