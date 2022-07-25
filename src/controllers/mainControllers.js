// requerir modulos
const shuffle = require ('../modules/shuffleArray')
// requerir librerias fs y path
const fs = require ('fs');
const path = require ('path')


// leer el archivo
const filePath = path.join(__dirname, "../data/productsDataBase.json")

// controller
const controller = {
    index: (req, res) => {
        let article = ["article01", "article02", "article03", "article04"];
        let products = JSON.parse(fs.readFileSync (filePath, "utf-8"));
        // most searched
        let searchedProducts = products.filter (item => {
            return item.section == "lo mas buscado"
        });
        // phones
        let phones = products.filter (item => {
            return item.category == "phones"
        });
        // tabs
        let tablets = products.filter (item => {
            return item.category == "tablets"
        });
        //laptops
        let laptops = products.filter (item => {
            return item.category == "laptops"
        });

        return res.render(path.join(__dirname,'../views/index'), {products: products, searchedProducts: shuffle(searchedProducts), article: article, tablets :shuffle(tablets), phones: shuffle(phones), laptops: shuffle(laptops)});
    }

};

module.exports = controller;