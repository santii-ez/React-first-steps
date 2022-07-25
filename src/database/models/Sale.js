module.exports = (sequelize, dataTypes) => {

    let alias = 'Sale';
    let col = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        payment_method: {
            type: dataTypes.STRING(200),
            allowNull: false
        },  
        total: {
            type: dataTypes.FLOAT(10,2).UNSIGNED,
            allowNull: false
        },
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
        }

    };
    
    let config = {
        tableName: 'sales',
        timestamps: false
    };

    const Sale = sequelize.define(alias, col, config);

    Sale.associate = function (models) {
        Sale.belongsToMany (models.Product, {
            as: "products",
            through: "sales_detail",
            foreignKey: "sale_id",
            otherKey: "product_id",
            timestamps: false
        })

        Sale.belongsTo (models.User, {
            as: 'user',
            foreignKey: 'user_id'
        })
    }

    return Sale 
}