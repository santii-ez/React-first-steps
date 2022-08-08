
const container = document.querySelector('.cart-container')
const subtotal = document.getElementById('subtotal')
const total = document.getElementById('total')
const amount = document.querySelectorAll('amount')
const templateCarrito = document.getElementById('template-carrito').content
const button = document.getElementById('discount-button');
const input = document.getElementById('discount-input')

carrito = JSON.parse(localStorage.getItem('carrito'))
const fragment = document.createDocumentFragment()


const imprimirCarrito = () => {
    if(carrito) {
    Object.values(carrito).forEach(item => {
        templateCarrito.querySelector('div.amount').textContent = parseInt(item.price_product) * parseInt(item.cantidad);
        templateCarrito.querySelector('h4.description').textContent = item.description;
        templateCarrito.querySelector('span.number').textContent = item.cantidad
        templateCarrito.querySelector('img').src = item.image_product

        //botones
        templateCarrito.querySelector('.fa-circle-minus').dataset.id = item.id
        templateCarrito.querySelector('.fa-circle-plus').dataset.id = item.id
        templateCarrito.querySelector('.remove').dataset.id = item.id
    
        const clone = templateCarrito.cloneNode(true)
    
        fragment.appendChild(clone)
        
    })
}
   container.appendChild(fragment)
}

const subtotalImprimir = () => {
    if(carrito) {
        let suma = 0
        Object.values(carrito).forEach(item => { 
            unitaryPrice = parseInt(item.price_product) * parseInt(item.cantidad)       
            suma = suma + unitaryPrice
        })
        subtotal.innerText = suma
    }
}

const discountImprimir = () => {
    if (sessionStorage.discount == 'MEGAOFERTA') {
        price = subtotal.textContent

        document.getElementById('discount-code-box').style.display = 'flex'
        document.querySelector('.h4-discount').innerText = "Descuento (15%)"
        document.getElementById('discount').innerText = (price * 0.15).toFixed(2)
        
}
}

const totalImprimir = () => {
    let priceWithoutDiscount = subtotal.textContent
    
    let discount = document.getElementById('discount').textContent
    
    if(discount) {
        total.innerText = priceWithoutDiscount - discount
    } else {
        total.innerText = priceWithoutDiscount
    }
}

// Llamada a las funciones 

    imprimirCarrito()
    subtotalImprimir()
    discountImprimir()
    totalImprimir()

// Eventos


   container.addEventListener('click', (e) => {
          
    if(e.target.classList.contains('fa-circle-plus')) {
             
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        
        carrito[e.target.dataset.id] = { ...producto }

        container.innerHTML = ''

        imprimirCarrito()
        subtotalImprimir()
        discountImprimir()
        totalImprimir()

        localStorage.setItem('carrito', JSON.stringify(carrito))

    } else if ((e.target.classList.contains('fa-circle-minus'))) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
            
        } else {
            carrito[e.target.dataset.id] = {...producto}
        }
        container.innerHTML = ''

        imprimirCarrito()
        subtotalImprimir()
        discountImprimir()
        totalImprimir()

        localStorage.setItem('carrito', JSON.stringify(carrito))
    }
    e.stopPropagation()
})

container.addEventListener('click', (e) => {
          
    if(e.target.classList.contains('remove')) {
        delete carrito[e.target.dataset.id]
    }
    container.innerHTML = ''

    imprimirCarrito()
    subtotalImprimir()
    discountImprimir()
    totalImprimir()
    
    localStorage.setItem('carrito', JSON.stringify(carrito))

    if (localStorage.carrito && localStorage.carrito != '{}') {
        document.querySelector('#cart-icon').innerHTML='<i class="fa-solid fa-cart-plus"></i>'
    } else {
      document.querySelector('#cart-icon').innerHTML='<i class="fa-solid fa-cart-shopping"></i>'
    }

    e.stopPropagation()

})


button.addEventListener('click', (e) => {
    e.preventDefault()
    if (input.value == 'MEGAOFERTA') {
        sessionStorage.setItem('discount', 'MEGAOFERTA' )
        price = subtotal.textContent

        document.getElementById('discount-code-box').style.display = 'flex'
        document.querySelector('.h4-discount').innerText = "Descuento (15%)"
        document.getElementById('discount').innerText = (price * 0.15).toFixed(2)

        totalImprimir()
        
    }
   
})

