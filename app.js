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
const htpptHome = '/home'
// html
const homeHtml = 'home.html'

// Define the static file path
app.use(express.static(__dirname +'/public/'));

app.get(hhtpRaiz, (req, res) => {
    res.sendFile(path.join(views, homeHtml))
})

app.get(htpptHome, (req, res) => {
    res.sendFile(path.join(views, homeHtml))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    console.log(__dirname)
})