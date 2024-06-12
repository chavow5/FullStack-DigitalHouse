const express = require('express');
const app = express();
app.listen(3000,() => {
    console.log('servidor corriendo en el puerto 3000');
})

// para poner la app en publico y estatico
const path = require('path')
const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));
