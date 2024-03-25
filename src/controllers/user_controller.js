const userModel = require("../models/user_model");

const createUser = async (req, res) => {
    try {
        const{
            user_name,
            lastname,
            nacionality,
            document,
            user_email,
            password,
            user_active
        } = req.body;
       
        const newUser = await userModel.create({
            user_name,  
            lastname,  
            nacionality,
            document,
            user_email,
            password,
            user_active
        });

        res.status(201).json(newUser);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const login = async (req, res) => {
    try {
        const{
            user_email,
            password
        } = req.body;
        const user = await userModel.findOne({ user_email });
        if (!user) {
            return res.status(400).json({ message: "Usuario no encontrado" });
        }
        if (user.password !== password) {
            return res.status(400).json({ message: "Contraseña incorrecta" });
        }        
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getUser = async (req, res) => {
    try {
        const {id} = req.params;
        console.log(id);
        const user = await userModel.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    createUser,
    login,
    getUser 
};