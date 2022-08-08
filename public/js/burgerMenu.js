window.addEventListener("DOMContentLoaded", function () {

    const iconoMenu = document.querySelector('.burger-menu');
    
    const menu = document.querySelector('#menu');
    const burgerClose = document.querySelector('.burger-close')
    
    iconoMenu.addEventListener('click', function() {
        iconoMenu.style.display = "none"
        menu.classList.toggle('active');
        document.body.classList.toggle('opacity')
    })
    
    burgerClose.addEventListener('click', function(){
        iconoMenu.style.display = "block"
        menu.classList.toggle('active')
    })

  
})
