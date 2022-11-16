const db = require('../models');

const User = db.User;

const register = async(req,res)=>{
    try {
        const { username,email,password } = req.body;
        const user = await User.findOne({where:{email}});

        if (!user) {
            const newUser = await User.create({username,email,password});
            await newUser.save();
            res.status(201).json({
                message:"Compte bien crée",
                data:newUser
            });
        } else {
            res.status(409).json({
                message:"Compte existe déjà avec cette addresse email"
            });
        }
    } catch (error) {
        throw new Error(error);
    }
}

const login = async(req,res)=>{
    try {
        const { username,password } = req.body;

        const user = await User.findOne({where:{username}});
        if (user) {
            if (user.password == password ) {
                res.status(200).json({
                    message:"Utilisateur connecté"
                });
            } else {
                res.status(400).json({
                    message:"Mot de passe invalid"
                });
            }
        } else {
            res.status(404).json({
                message:"Compte non trouvé"
            });
        }
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {register,login}