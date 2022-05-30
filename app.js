//Declaracion de frameworks
const express = require('express');
const app = express();
const path = require('path')

//Declaracion de puertos
const port = 3000

//montar el servidor                                                                                                                                                                                                                                                                                                                             
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    console.log(__dirname)
})


//>montar rutas 

// views
const views = path.join(__dirname, 'views/')
// public
const public = path.join(__dirname, 'public/')

// hhtp routes
const hhtpRaiz = '/'
const htppHome = '/home'
const httpCarrito = '/carrito'
const httpLogIn = '/login'
const httpProducto = '/productDetail'
const httpListadoCelulares = '/listadoDeCelulares'

// html
const homeHtml = 'home.html'
const carritoHtml = 'carrito.html'
const loginHtml ='login.html'
const productoHtml = 'productDetail.html'
const listadoCelularesHtml = 'listadoDeCelulares.html'


// Define the static file path
app.use(express.static(__dirname +'/public/'));

app.get(hhtpRaiz, (req, res) => {
    res.sendFile(path.join(views, homeHtml))
})

app.get(htppHome, (req, res) => {
    res.sendFile(path.join(views, homeHtml))
})

app.get(httpCarrito, (req, res) => {
    res.sendFile(path.join(views, carritoHtml))
})

app.get(httpLogIn, (req, res) => {
    res.sendFile(path.join(views, loginHtml))
})

app.get(httpProducto, (req, res) => {
    res.sendFile(path.join(views, productoHtml))
})
 app.get(httpListadoCelulares,(req,res)=>{
     res.sendFile(path.join(views, listadoCelularesHtml))
 })
