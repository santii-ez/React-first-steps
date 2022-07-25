module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let col = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50)
        },
        description: {
            type: dataTypes.TEXT
        },
        price_product: {
            type: dataTypes.FLOAT.UNSIGNED
        },
        discount: {
            type: dataTypes.DECIMAL(5).UNSIGNED
        },
        category: {
            type: dataTypes.STRING(50)
        },
        image_product: {
            type: dataTypes.STRING(200)
        },
        section: {
            type: dataTypes.STRING(50)
        },
        brand: {
            type: dataTypes.STRING(50)
        }
    };

    let config = {
        tableName: 'products',
        timestamps: false
       
    }
    const Product = sequelize.define(alias,col,config);

    Product.associate = function (models) {
        Product.belongsToMany(models.Sale, {
            as: "sales",
            through: 'sales_detail',
            foreignKey: 'product_id',
            otherKey: 'sale_id',
            timestamps: false
        })
    }

    return Product
};