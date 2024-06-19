const express = require('express');
const app = express();
app.listen(3000,() => {
    console.log('servidor corriendo en el puerto 3000')
    console.log('localhost:3000');;

})

// para poner la app en publico y estatico
const path = require('path')
const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

// para llamar al home.html uso app.get
// app.get('/', (req, res) =>{
//     res.sendFile(path.resolve(__dirname, 'clases\primer-proyecto\views\home.html'));
// })
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
    //me entro con join no con resolve
});