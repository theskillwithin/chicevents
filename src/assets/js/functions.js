  const chic = {
    mobileNav () {
      const mq = window.matchMedia('(max-width: 890px)')
      const header = document.querySelector('header')
      const headerNav = header.querySelector('nav')
      const navUl = headerNav.querySelector('ul')
      const navHamburger = header.querySelector('.hamburger')
      const top = document.querySelector('header .top')
      if (mq.matches) {
        headerFire()
      }

      mq.addListener(() => {
        if (mq.matches) {
          headerFire()
        }
      })

      function headerFire () {
        navUl.classList.add('mobile')

        document.addEventListener('click', event => {
          if (event.target === top) return
          if (event.target === top.querySelector('.container')) return

          if (!navUl.classList.contains('mobile')) {
            navUl.classList.toggle('mobile')
            // navUser.classList.toggle('mobile')
            navHamburger.classList.toggle('mobile')
          }
        })
      }

      navHamburger.addEventListener('click', event => {
        navUl.classList.toggle('mobile')
        navHamburger.classList.toggle('mobile')
        event.stopPropagation()
      })
    }
  }
  chic.mobileNav()
