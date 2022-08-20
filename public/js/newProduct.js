window.addEventListener('load', ()=> {
    //query selectors
    let titleNewProduct = document.querySelector('#name');
    let titleError = document.querySelector('#titleError');

    let descriptionNewProduct = document. querySelector('#description');
    let descriptionError = document.querySelector('#descriptionError');

    let imagesNewProduct = document.querySelector('#images');
    let imagesError = document.querySelector('#imagesError');

    let brandNewProduct = document.querySelector('#brandNewProduct');
    let brandError = document.querySelector('#brandError');

    let sectionNewProduct = document.querySelector('#sectionNewProduct');
    let sectionError = document.querySelector('#sectionError');

    let priceNewProduct = document.querySelector('#priceNewProduct');
    let errorPrice = document.querySelector('#priceError');

    let discountNewProduct = document.querySelector('#discountNewProduct');
    let discountError = document.querySelector('#discountError');

    let formNewProduct = document.querySelector('#formNewProduct');

    //on time validations
    let erroresNewProduct = {};

    //title
    titleNewProduct.addEventListener('blur', () => {
        if(titleNewProduct.value == '') {
            erroresNewProduct.name = 'Este campo es obligatorio';
            titleError.innerHTML = erroresNewProduct.name;
        } else if(titleNewProduct.value.length < 5) {
            erroresNewProduct.name = 'Debe ingresar mínimo 5 caracteres';
            titleError.innerHTML = erroresNewProduct.name;
        } else {
            titleError.innerHTML = '';
        }
    });

    //description
    descriptionNewProduct.addEventListener('blur', () => {
        if(descriptionNewProduct.value.length < 20) {
            descriptionNewProduct.name = 'Debe ingresar mínimo 20 caracteres';
            descriptionError.innerHTML = descriptionNewProduct.name;
        } else {
            descriptionError.innerHTML = '';
        }
    });

    //images
    imagesNewProduct.addEventListener('change', () => {
        //img extension
        let imgProduct = imagesNewProduct.value
        let extProduct = imgProduct.split('.').pop();

        if(extProduct == 'jpg' || extProduct == 'jpeg' || extProduct == 'jng' || extProduct == 'gif') {
            imagesError.innerHTML = '';
        } else {
            erroresNewProduct.images = 'Ingrese un archivo válido';
            imagesError.innerHTML = erroresNewProduct.images;
        }
    });

    //brand
    brandNewProduct.addEventListener('change', () => {
        if(brandNewProduct.value == 'Elige la marca'){
            erroresNewProduct.brand = 'Elija una marca';
            brandError.innerHTML = erroresNewProduct.brand;
        } else {
            brandError.innerHTML = '';
        }
    });

    //section
    sectionNewProduct.addEventListener('change', () => {
        if(sectionNewProduct.value == 'Elige una sección'){
            erroresNewProduct.section = 'Elija una sección';
            sectionError.innerHTML = erroresNewProduct.section;
        } else {
            sectionError.innerHTML = '';
        }
    });

    //price
    priceNewProduct.addEventListener('blur', () => {
        if(priceNewProduct.value <= 0) {
            erroresNewProduct.price = 'Ingrese un valor mayor a 0';
            errorPrice.innerHTML = erroresNewProduct.price;
        } else {
            errorPrice.innerHTML = '';
        }
    });

    //discount
    discountNewProduct.addEventListener('blur', () => {
        if(discountNewProduct.value <= 0) {
            erroresNewProduct.discount = 'Ingrese un valor mayor a 0';
            discountError.innerHTML = erroresNewProduct.discount;
        } else {
            discountError.innerHTML = '';
        }
    });

    //prevent default
    formNewProduct.addEventListener('submit', (e) => {
        //title
        titleNewProduct.addEventListener('blur', () => {
            if(titleNewProduct.value == '') {
                erroresNewProduct.name = 'Este campo es obligatorio';
                titleError.innerHTML = erroresNewProduct.name;
            } else if(titleNewProduct.value.length < 5) {
                erroresNewProduct.name = 'Debe ingresar mínimo 5 caracteres';
                titleError.innerHTML = erroresNewProduct.name;
            } else {
                titleError.innerHTML = '';
            }
        });

        //description
        descriptionNewProduct.addEventListener('blur', () => {
            if(descriptionNewProduct.value.length < 20) {
                descriptionNewProduct.name = 'Debe ingresar mínimo 20 caracteres';
                descriptionError.innerHTML = descriptionNewProduct.name;
            } else {
                descriptionError.innerHTML = '';
            }
        });

        //images
        imagesNewProduct.addEventListener('change', () => {
            //img extension
            let imgProduct = imagesNewProduct.value
            let extProduct = imgProduct.split('.').pop();

            if(extProduct == 'jpg' || extProduct == 'jpeg' || extProduct == 'jng' || extProduct == 'gif') {
                imagesError.innerHTML = '';
            } else {
                erroresNewProduct.images = 'Ingrese un archivo válido';
                imagesError.innerHTML = erroresNewProduct.images;
            }
        });

        //brand
        brandNewProduct.addEventListener('change', () => {
            if(brandNewProduct.value == 'Elige la marca'){
                erroresNewProduct.brand = 'Elija una marca';
                brandError.innerHTML = erroresNewProduct.brand;
            } else {
                brandError.innerHTML = '';
            }
        });

        //section
        sectionNewProduct.addEventListener('change', () => {
            if(sectionNewProduct.value == 'Elige una sección'){
                erroresNewProduct.section = 'Elija una sección';
                sectionError.innerHTML = erroresNewProduct.section;
            } else {
                sectionError.innerHTML = '';
            }
        });

        //price
        priceNewProduct.addEventListener('blur', () => {
            if(priceNewProduct.value <= 0) {
                erroresNewProduct.price = 'Ingrese un valor mayor a 0';
                errorPrice.innerHTML = erroresNewProduct.price;
            } else {
                errorPrice.innerHTML = '';
            }
        });

        //discount
        discountNewProduct.addEventListener('blur', () => {
            if(discountNewProduct.value <= 0) {
                erroresNewProduct.discount = 'Ingrese un valor mayor a 0';
                discountError.innerHTML = erroresNewProduct.discount;
            } else {
                discountError.innerHTML = '';
            }
        });

        //errors
        if(Object.keys(erroresNewProduct) > 1) {
            e.preventDefault();
            alert('Ingrese los datos correctos');
        };
    });
});