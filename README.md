# nosql-tweets
Tarea 01 curso Node JS

Validaciones de campos:
1. names: debe ser obligatorio y controlar los espacios en blanco
2. surnames: debe ser obligatorio y controlar los espacios en blanco
3. birthdate: debe ser de tipo fecha y por defecto debe ser una instancia de fecha de
cuando se genere
4. email: debe ser obligatorio, controlar los espacios y debe ser único.
5. password: debe ser obligatorio y controlar los espacios. (No necesito que generen
los hash con el bcrypt por ahora)
6. avatar: controlar los espacios y por defecto venga un string vacío
7. banner, biography, location y website: gestionarlo de la misma forma de avatar.
8. Deben habilitar los timestamp para cada modelo.
9. Aplicar referencias cuando corresponda.
10. Crear la configuración del server sin las rutas y middlewares de rutas, para que no
molesten
11. Añadir todas las dependencias necesarias para su server



### Pruebas
```sh
pealejosb@ubunto:/opt/pealejosb/nosql-tweets$ npm start

> nosql-tweets@1.0.0 start /opt/pealejosb/nosql-tweets
> nodemon app.js

[nodemon] 1.19.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node app.js`
Server corriendo en puerto : 6666
DB conectada
***************************************************************
---- INGRESANDO USUARIO CON E-MAIL UNICO (     user_20200928113148@gmail.com        ) ---
***************************************************************
USUARIO A CREAR {
  name: 'goku',
  surnames: 'Son',
  password: '123456789',
  email: '     user_20200928113148@gmail.com        ',
  avatar: 'https://i.pinimg.com/564x/a4/f7/ac/a4f7acf38a8e618a4371f4c86c68c8c2.jpg'
}
USUARIO DB : {
  avatar: 'https://i.pinimg.com/564x/a4/f7/ac/a4f7acf38a8e618a4371f4c86c68c8c2.jpg',
  banner: '',
  biography: '',
  location: '',
  website: '',
  _id: 5f71f3d4564bd65fb688b084,
  name: 'goku',
  surnames: 'Son',
  password: '123456789',
  email: 'user_20200928113148@gmail.com',
  birthdate: 2020-09-28T14:31:48.385Z,
  createdAt: 2020-09-28T14:31:48.392Z,
  updatedAt: 2020-09-28T14:31:48.392Z,
  __v: 0
}
***************************************************************
***************************************************************
    INGRESANDO USUARIO CON E-MAIL REPETIDO (     user_20200928113148@gmail.com        )  
***************************************************************
error  E11000 duplicate key error collection: tarea-01.users index: email_1 dup key: { : "user_20200928113148@gmail.com" }
***************************************************************
***************************************************************
---- TWEET INGRESADO DEL USUARIO CREADO CON ID (5f71f3d4564bd65fb688b084) ---
***************************************************************
{
  _id: 5f71f3d4564bd65fb688b086,
  userId: {
    avatar: 'https://i.pinimg.com/564x/a4/f7/ac/a4f7acf38a8e618a4371f4c86c68c8c2.jpg',
    banner: '',
    biography: '',
    location: '',
    website: '',
    _id: 5f71f3d4564bd65fb688b084,
    name: 'goku',
    surnames: 'Son',
    password: '123456789',
    email: 'user_20200928113148@gmail.com',
    birthdate: 2020-09-28T14:31:48.385Z,
    createdAt: 2020-09-28T14:31:48.392Z,
    updatedAt: 2020-09-28T14:31:48.392Z,
    __v: 0
  },
  message: '¡Hola, mi nombre es Goku! ',
  createdAt: 2020-09-28T14:31:48.412Z,
  updatedAt: 2020-09-28T14:31:48.412Z,
  __v: 0
}
***************************************************************



```



Reconstruir los módulos de node con el comando

```
npm install
```
