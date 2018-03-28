'use strict';

(function () {
  const overlay = document.createElement('div');
  overlay.className = 'overlay-bg';
  document.body.appendChild(overlay);

  const App = {
    sliders() {
      $('.tour-catalog').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [{
          breakpoint: 1285,
          settings: {
            dots: true,
            arrows: false
          }
        }, {
          breakpoint: 1190,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            arrows: false
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
          }
        }]
      });

      $('.partners').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [{
          breakpoint: 1285,
          settings: {
            dots: true,
            arrows: false
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            arrows: false
          }
        }]
      });

      $('.reviews').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
          breakpoint: 1285,
          settings: {
            dots: true,
            arrows: false
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
          }
        }]
      });
    },

    accord() {
      const $accord = $('.js-accord');
      let busy = false;
      $accord.on('click', function () {
        console.log(1);
        if (busy) return false;

        busy = true;

        if ($(this).hasClass('active')) {
          $(this).next().slideUp(() => busy = false);
          $(this).removeClass('active');
        } else {
          $accord.next().slideUp();
          $accord.removeClass('active');

          $(this).next().slideDown(() => busy = false);
          $(this).addClass('active');
        }
      });
    },

    menu() {
      const menu = document.querySelector('.menu');
      const btn = document.querySelector('.header__btn');
      const dropBtn = menu.querySelectorAll('.menu__drop');
      let busy = false;

      btn.addEventListener('click', function () {
        if (this.classList.contains('active')) {
          menu.classList.remove('opened');
          this.classList.remove('active');
          document.body.classList.remove('popup-opened');
        } else {
          overlay.classList.add('showed');
          menu.classList.add('opened');
          this.classList.add('active');
          document.body.classList.add('popup-opened');
        }
      });

      overlay.onclick = function () {
        this.classList.remove('showed');
        menu.classList.remove('opened');
        btn.classList.remove('active');
        document.body.classList.remove('popup-opened');
      };

      dropBtn.forEach(drop => {
        drop.addEventListener('click', function () {
          if (busy) return false;

          busy = true;

          if (this.classList.contains('active')) {
            this.classList.remove('active');
            $(this.parentNode).next().slideUp(() => busy = false);
          } else {
            dropBtn.forEach(item => {
              item.classList.remove('active');
              $(item.parentNode).next().slideUp();
            });
            this.classList.add('active');
            $(this.parentNode).next().slideDown(() => busy = false);
          }
        });
      });

      $('.js-blog-view').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.js-blog-nav',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
          breakpoint: 700,
          settings: {
            arrows: false
          }
        }]
      });
      $('.js-blog-nav').slick({
        slidesToShow: 7,
        asNavFor: '.js-blog-view',
        arrows: false,
        focusOnSelect: true,
        responsive: [{
          breakpoint: 480,
          settings: {
            slidesToShow: 5
          }

        }, {
          breakpoint: 700,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        }]
      });
      $('.js-post-view').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }]
      });
    },

    init() {
      this.sliders();
      this.accord();
      this.menu();

      $('.js-dropdown-box').each(function () {
        $(this).dropdown({
          prefix: $(this).data('prefix')
        });
      });
    }
  };

  window.addEventListener('load', () => {
    window.svg4everybody();
    App.init();
  });

  document.documentElement.addEventListener('touchstart', event => {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }, false);
})();