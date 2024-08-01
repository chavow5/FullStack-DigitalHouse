const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/views/home.html');
})
app.get('/about', (req, res) =>{
    res.sendFile(__dirname + '/views/about.html');
})

// para poner la app en publico y estatico
const path = require('path')
const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

// Rutas de Archivos
// principal index
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
    //me entro con join no con resolve
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
    const now = new Date(); // agrego una hora para saber el tiempo de actualizacion 
    console.log(`Actualizacion: ${now}`)
});