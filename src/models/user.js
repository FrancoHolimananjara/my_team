
module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define('User' , {
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        timestamps:true,
        freezeTableName:true
    })

    return User;
}