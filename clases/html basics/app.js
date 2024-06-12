const express = require('express');
const app = express(); // los () llaman la funcion

const port = 3030;
app.listen(port,() => console.log(`corriendo en puerto ${port}`));

// llamo la ruta con GET
app.get("/", (req,res) => {
    res.send("hola mundo")
})