window.addEventListener('load', function () {
    const cartIcon = () => {
        if (localStorage.carrito && localStorage.carrito != '{}') {
            document.querySelector('#cart-icon').innerHTML='<i class="fa-solid fa-cart-plus"></i>'
        } else {
          document.querySelector('#cart-icon').innerHTML='<i class="fa-solid fa-cart-shopping"></i>'
        }
      }
    
      cartIcon()
})