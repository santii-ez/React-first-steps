

window.addEventListener('load', function () {
    

    const container = document.querySelector('.container-detail')
    const span = document.querySelector('span')
    const comprar = document.querySelector('.button-productDetail')
    let carrito = {}
    let contador = 1
    let id = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1)
    
      


    container.addEventListener('click', (e) => {
    
        if(e.target.classList.contains('fa-circle-plus') || e.target.classList.contains('btn-plus')) {
            contador++;
            span.innerText = contador
        } else if ((e.target.classList.contains('fa-circle-minus') || e.target.classList.contains('btn-minus')) && contador > 1 ) {
            contador --;
            span.innerText = contador
        }
        e.stopPropagation()
    })

    container.addEventListener('click', (e) => {
    
        if(e.target.classList.contains('btn-primary')) {
            setCarrito(container)
            

        }
        e.stopPropagation()
    })

  
    const setCarrito = item => {
       
        // si existe localStorage con algo tengo que hacer que se sume
        if(localStorage.carrito) {
            carrito = JSON.parse(localStorage.getItem('carrito'))
            setProduct(item)

        } else {
            setProduct(item)
        } 
    } 

    const setProduct = item => {
        const producto = {
            id: id,
            name: item.querySelector('h5.name-product').textContent,
            description: item.querySelector('p.card-text').textContent,
            price_product:  item.querySelector('h5.price-product').textContent,
            image_product: item.querySelector("img").getAttribute('src'),
            cantidad: span.textContent
        }
        carrito[producto.id] = {...producto}
        console.log(carrito)
        localStorage.setItem('carrito', JSON.stringify(carrito))
        console.log(localStorage.carrito)
        cartIcon()

        toastr["success"]("¡Se Ha Agregado Con Exito!", producto.name)
    }
    
          toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-bottom-right",
            "preventDuplicates": true,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          }

  
  const cartIcon = () => {
    if (localStorage.carrito && localStorage.carrito != '{}') {
        document.querySelector('#cart-icon').innerHTML='<i class="fa-solid fa-cart-plus"></i>'
    } else {
      document.querySelector('#cart-icon').innerHTML='<i class="fa-solid fa-cart-shopping"></i>'
    }
  }

  cartIcon()
  
})