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

let usuario = {
    name : 'goku',
    surnames:'Son',
    password:'123456789',
    email:email_time,
    avatar:'https://i.pinimg.com/564x/a4/f7/ac/a4f7acf38a8e618a4371f4c86c68c8c2.jpg'
};

// Insertar un usuario de ejemplo
let usuarioNuevo = new usermodel(usuario);
let usuarioRepetido = new usermodel(usuario);




usuarioNuevo.save( (error,usuarioDB) => {
    console.log( chalk.white("***************************************************************") );
    console.log( chalk.yellow(`---- INGRESANDO USUARIO CON E-MAIL UNICO (${email_time}) ---`) );
    console.log( chalk.white("***************************************************************") );
    console.log("USUARIO A CREAR",usuario);
    if(error){
        console.log("error ",error.errmsg);
      
    }else{
        
        console.log("USUARIO DB :",usuarioDB);
        
     
        let tweetNuevo = new tweetmodel(
            {
                userId:usuarioDB,
                message:'¡Hola, mi nombre es Goku! '
            }
        );

        tweetNuevo.save( (error,tweetDB) =>{
            if(error){
                console.log(error.errmsg);
            }else{
                console.log( chalk.white("***************************************************************") );
                console.log( chalk.yellow(`---- TWEET INGRESADO DEL USUARIO CREADO CON ID (${usuarioDB._id}) ---`) );
                console.log( chalk.white("***************************************************************") );
                console.log(tweetDB);
                console.log( chalk.white("***************************************************************") );
            }
        } );
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
}); 
//


//puerto
const port = process.env.PORT || 8000;

app.listen(port,() =>{
    console.log(`Server corrienedo en puerto : ${port}`);
});
