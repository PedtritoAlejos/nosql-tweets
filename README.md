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
