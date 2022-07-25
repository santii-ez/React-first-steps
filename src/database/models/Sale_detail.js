module.exports = (sequelize, dataTypes) => {
    let alias = 'Sale_detail';
    let col = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false
        },  
        price: {
            type: dataTypes.FLOAT(10,2).UNSIGNED,
            allowNull: true
        },
        sale_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
        },
        product_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
        }

    }
    
    let config = {
        tableName: 'sales_detail',
        timestamps: false
    };

    const Sale_detail = sequelize.define(alias, col, config)

    return Sale_detail 
}