'use strict';
// ----------test------------ //
// $(function () {
//     alert('ok!');
// });

// ----- header scroll-fixed ----- //
$(function () {
  $(window).on('load scroll', function () {
    const $homeHeader = $('.header');
    const $scrollVal = $(window).scrollTop();
    if ($scrollVal > 100) {
      $homeHeader.addClass('is-show');
    } else {
      $homeHeader.removeClass('is-show');
    }
  });
});

// ----- header&hamburger-scroll-color ----- //
$(window).scroll(function () {
  var imgHeight = $('.swiper-wrapper').outerHeight();
  if ($(window).scrollTop() < imgHeight) {
    $('.site-ttl, .header-nav-link, .hamburger__line, .hamburger__line::before, .hamburger__line::after, .hamburger-label').removeClass('black');
    $('.js-header-logo02').removeClass('is-show');
    $('.js-header-logo01').addClass('is-show');
  } else {
    $('.site-ttl, .header-nav-link, .hamburger__line, .hamburger__line::before, .hamburger__line::after, .hamburger-label').addClass('black');
    $('.js-header-logo02').addClass('is-show');
    $('.js-header-logo01').removeClass('is-show');
  }
});

// ----- main-visual swiper ----- //
$(function () {
  let swipeOption = {
    loop: true, // エンドレスリピートさせる
    effect: 'fade', // これがフェードのオプション
    autoplay: {
      delay: 4000, // 自動再生スピード
      disableOnInteraction: false, // ユーザが指やスマホでスライダーに触った時、スライドを止めないように設定するオプション
    },
    speed: 2000,
  };
  new Swiper('.swiper-container-mv', swipeOption);
});

// ----- ふわっと表示 AOS ----- //
AOS.init({
  duration: 1000,
  easing: 'ease-in',
  once: true,
});
// ----- ふわっと表示 ----- //
// $(function () {
//   $(window).scroll(function () {
//     $('#scroll-fade-message, #scroll-fade-feature01, #scroll-fade-feature02, #scroll-fade-feature03, #scroll-fade-plan, #scroll-fade-info, #scroll-fade-info-access, #scroll-fade-info-map, #scroll-fade-footer').each(function () {
//       var targetElement = $(this).offset().top;
//       var scroll = $(window).scrollTop();
//       var windowHeight = $(window).height();
//       if (scroll > targetElement - windowHeight + 100) {
//         $(this).css('opacity', '1');
//         $(this).css('transform', 'translateY(0');
//       }
//     });
//   });
// });

// ----- tab ----- //
$(function () {
  let tabs = $('.tab');
  $('.tab').on('click', function () {
    $('.is-active').removeClass('is-active');
    $(this).addClass('is-active');
    const index = tabs.index(this);
    $('.tab-content').removeClass('is-show').eq(index).addClass('is-show');
  });
});

// ----- modal ----- //
$(function () {
  $('.js-modal-open').each(function () {
    $(this).on('click', function () {
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      $(modal).fadeIn(300);
      $('body').addClass('is-no-scroll');
      return false;
    });
  });
  $('.js-modal-close').on('click', function () {
    $('.js-modal').fadeOut(300);
    $('body').removeClass('is-no-scroll');
    return false;
  });
});

// ----- hamburger ----- //
$(function () {
  $('#js-hamburger').click(function () {
    $('body').toggleClass('is-drawerActive');

    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', 'true');
      $('#js-global-menu').attr('area-hidden', 'false');
      $('.hamburger-label').removeClass('black');
    } else {
      $(this).attr('aria-expanded', 'false');
      $('#js-global-menu').attr('area-hidden', 'true');
      $('.hamburger-label').addClass('black');
    }
  });

  $('#js-drawer-background').click(function () {
    $('body').removeClass('is-drawerActive');
    $('#js-hamburger').attr('aria-expanded', 'false');
    $('#js-global-menu').attr('area-hidden', 'true');
    $('.hamburger-label').addClass('black');
  });

  $('.hamburger-nav-link').click(function () {
    $('body').removeClass('is-drawerActive');
    $('#js-hamburger').attr('aria-expanded', 'false');
    $('#js-global-menu').attr('area-hidden', 'true');
    $('.hamburger-label').addClass('black');
  });
});

// ----- flatpickr ----- //
flatpickr('#flatpickr', {
  locale: 'ja',
  minDate: 'today',
  mode: 'range',
});
