const express = require("express");
const mongoose = require("mongoose");
const moment = require("moment");

const chalk = require('chalk');

const usermodel = require("./models/user");
const tweetmodel = require("./models/tweet");


require("dotenv").config();

// app - expess
const app = express()

// conexión moderna

const db = async () => {
    try {
        const success = await mongoose.connect(process.env.DATABASE,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false
        });
        console.log('DB conectada');
    } catch (error) {
        console.log('Error de conexion DB',error)
        
    }
}

// ejecutar conexion db
db();

let email_time = `user_${moment().format("YYYYMMDDhmmss")}@gmail.com `;



// Insertar un usuario de ejemplo
let usuarioNuevo = new usermodel({
    name : 'goku',
    surnames:'lopez perez',
    password:'123456789',
    email:email_time,
    avatar:'goku.jpg'
});
let usuarioRepetido = new usermodel({
    name : 'goku',
    surnames:'lopez perez',
    password:'123456789',
    email:email_time,
    avatar:'goku.jpg'
});




usuarioNuevo.save( (error,usuarioDB) => {
    console.log( chalk.white("***************************************************************") );
    console.log( chalk.yellow(`---- INGRESANDO USUARIO CON E-MAIL UNICO (${email_time}) ---`) );
    console.log( chalk.white("***************************************************************") );

    if(error){
        console.log("error ",error.errmsg);
      
    }else{
        console.log(usuarioDB);
    }
    console.log( chalk.white("***************************************************************") );
} ); 

usuarioRepetido.save( (error,usuarioDB) => {
    console.log( chalk.white("***************************************************************") );
    console.log( chalk.yellow(`    INGRESANDO USUARIO CON E-MAIL REPETIDO (${email_time})  `) );
    console.log( chalk.white("***************************************************************") );

    if(error){
        console.log("error ",error.errmsg);
      
    }else{
        console.log(usuarioDB);
    }
    console.log( chalk.white("***************************************************************") );
} );
//


//puerto
const port = process.env.PORT || 8000;

app.listen(port,() =>{
    console.log(`Server corrienedo en puerto : ${port}`);
})
