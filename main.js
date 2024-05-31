

        var swiper = new Swiper(".mySwiper", {
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
        


        let bir = document.querySelector('.span1')
        let ikki = document.querySelector('.span2')
        let uch = document.querySelector('.span3')
        let menu = document.getElementById('menu')
        let menubar = document.querySelector('.menu-bar')

        menu.addEventListener( 'click',() =>{
           
          uch.classList.toggle('remove')
          bir.classList.toggle('button1')
          ikki.classList.toggle('button2')
          menu.classList.toggle('menu1')
           menubar.classList.toggle('bar')
           
        })
      



        
  