  'use strict'

  var hrtcup = {
    runSwiper: function () {
      var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        slideClass: 'swiper-slide',
        spaceBetween: 10,
        centeredSlides: true,
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
      })
    },
    mobileNav: function () {
      var mq = window.matchMedia('(max-width: 890px)'),
        header = document.querySelector('header'),
        headerNav = header.querySelector('nav'),
        navUl = headerNav.querySelector('ul'),
        navUser = headerNav.querySelector('.user'),
        navHamburger = header.querySelector('.hamburger'),
        top = document.querySelector('header .top')
      if (mq.matches) {
        headerFire()
      }

      mq.addListener(function () {
        if (mq.matches) {
          headerFire()
        }
      })

      function headerFire () {
        navUl.classList.add('mobile')
        navUser.classList.add('mobile')

        document.addEventListener('click', function (event) {
          if (event.target === top) return
          if (event.target === top.querySelector('.container')) return

          if (!navUl.classList.contains('mobile')) {
            navUl.classList.toggle('mobile')
            navUser.classList.toggle('mobile')
            navHamburger.classList.toggle('mobile')
          }
        })
      }

      navHamburger.addEventListener('click', function (event) {
        navUl.classList.toggle('mobile')
        navUser.classList.toggle('mobile')
        navHamburger.classList.toggle('mobile')
        event.stopPropagation()
      })
    }
  }
  hrtcup.runSwiper()
  hrtcup.mobileNav()

