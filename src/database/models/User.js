module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let col = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        image_product: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        role: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };

    let config = {
        tableName: 'users',
        timestamps: false
       
    }
    const User = sequelize.define(alias,col,config);

    User.associate = function (models) {
        User.hasMany (models.Sale, {
            as: 'sales',
            foreignKey: 'user_id'
        })
    }

   
    return User
};