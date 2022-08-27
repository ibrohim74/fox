function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
  
// setCookie('user', 'John', {secure: true, 'max-age': 3600});
function setCookie(name, value, options = {}) {
  
    options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
}
  
      // перенести потом в отдельный файл
$(document).ready(function(){
  
          $('.lang-switch a').each(function(){
              var a = this;
              var url = $(this).data('url');
              if (url.indexOf('depotwpf.ru') > -1) return;
              if (url=="https://www.depotwpf.com/") return;
              $.get("/get_url_status_code.php?url="+url, function(status){
                  if (status == 200){
                      a.href = url;
                  }
              });
          }); 
  
          if (getCookie('BITRIX_SM_new_track_id')){
              var track_id = getCookie('BITRIX_SM_new_track_id');
              $('span.depotid').text("Track ID: " + track_id);
              $('a[href="mailto:hello@depotwpf.ru"]').text('hello+'+ track_id +'@depotwpf.ru');
              $('a[href="mailto:hello@depotwpf.ru"]').attr('href', 'mailto:hello+'+ track_id +'@depotwpf.ru');
  
              if (window.ct){
                  ct('set_attrs', '{"track_id":"' + track_id + '"}');
              }
              
              if (window.ym && !getCookie('metrikaID')){
                ym(24966098, 'getClientID', function(clientID) {
                    $.post('/metrika_track.php', {track_id, clientID}, function(response) {
                        if (response == 'done'){ // обновили, ставим куку. 
                            setCookie('metrikaID', clientID, {secure: true, 'max-age': 3600*24*7});
                        }
                    });
                });
              }
          }
          
          $( window ).mouseup(function() {
            if(
                window.getSelection().toString().indexOf("+7 (495)") !== -1 ||
                window.getSelection().toString().indexOf("@depotwpf.ru") !== -1
            ){
                yaCounter24966098.reachGoal('copy-contacts');
                yaCounter24966098.reachGoal('any-contact');
                gtag('event', 'allContact');
            }
          });

          $('a[href^="tel:"]').on('click touchstart', function(){
            yaCounter24966098.reachGoal('tel-click');
            yaCounter24966098.reachGoal('any-contact');
            gtag('event', 'allContact');
          });

          $('#mailto-email').on('click touchstart', function(){
            yaCounter24966098.reachGoal('email-send');
            yaCounter24966098.reachGoal('any-contact');
            gtag('event', 'allContact');
          });
  
          $('#form-brend').click(function(){
              yaCounter24966098.reachGoal('form-brend-click');
          });
  
          $('a.show-callback').click(function(){
              yaCounter24966098.reachGoal('form-callback-click');
          });
  
  
          $('a.socs').click(function(){
              yaCounter24966098.reachGoal('to-socs');
          });  
          
          $('.first-section__btn a').click(function () {
            yaCounter24966098.reachGoal('getbrand-1-click');
          });

          $('.applications-title').click(function () {
            yaCounter24966098.reachGoal('brandnub-tab-click');
          });

          $('.how-much__baner-btn a').click(function () {
            yaCounter24966098.reachGoal('bb-price-click');
          });

          $('.brendbuk-baner__btn a').click(function () {
            yaCounter24966098.reachGoal('bb-callback-click');
          });

          $('.best-section__btn a').click(function () {
            yaCounter24966098.reachGoal('bb-port-click');
          });

          
          
          
  });
  
  
  $(document).ready(function(){
  
      const items = document.querySelectorAll(".accordion button");
  
      function toggleAccordion() {
      const itemToggle = this.getAttribute('aria-expanded');
      
      for (i = 0; i < items.length; i++) {
          items[i].setAttribute('aria-expanded', 'false');
      }
      
      if (itemToggle == 'false') {
          this.setAttribute('aria-expanded', 'true');
      }
      }
  
      items.forEach(item => item.addEventListener('click', toggleAccordion));
  
  });


jQuery(function ($) {
    $.fn.hScroll = function (amount) {
        amount = amount || 120;
        $(this).bind("DOMMouseScroll mousewheel", function (event) {

            var oEvent = event.originalEvent, 
                direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
                position = $(this).scrollLeft();

            if ( this.clientWidth >= (this.scrollWidth - $(this).scrollLeft()) && direction < 0 ) {
                return;
            }

            if ($(this).scrollLeft() == 0 && direction >0 ){
                return;
            }

            position += direction > 0 ? -amount : amount;
            $(this).scrollLeft(position);
            event.preventDefault();
        })
    };
});

$(document).ready(function() {
    $('.nowrap').hScroll(60); // You can pass (optionally) scrolling amount
    $('.news_slider').slick({
        dots: true,
    });
});

  