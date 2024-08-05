let express = require('express');
let app = express();

// para configurar EJS
app.set('view engine', 'ejs');

const mainRoutes = require('./routes/mainRoutes.js');
app.use(express.static('./public'));

app.use('/', mainRoutes);

app.listen(3000, ()=>{
    console.log('servidor 3000');
    
});