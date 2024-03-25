const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_name: {type: "string", required: true},
    lastname: {type: "string", required: true},
    nacionality: {type: "string", required: true},
    document: {type: "string", required: true, unique: true},
    user_email: {type: "string", required: true, unique: true},
    password: {type: "string", required: true},
    user_active: {type: "boolean", required: true, default: false},
});
//en la exportacion, mogoose crea un modelo cuya colección en la base de datos
//se llamará "User" y tendrá la estructura ya definida en el esquema "userSchema"

module.exports = mongoose.model("User_signup-login", userSchema);