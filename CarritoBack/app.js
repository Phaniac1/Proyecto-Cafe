const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

//BD
mongoose.connect(process.env.DB_URL,
{useNewUrlParser: true, 
useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Conectado a DB'));

//user: angelB password: lolteto1
//mongodb+srv://angelB:lolteto1@cluster0.sksltyz.mongodb.net/Test?retryWrites=true&w=majority

//import routes
const itemsRoutes = require('./routes/items');
const imgRoutes = require('./routes/img');

//middleware
app.use(cors());
app.use('/items', itemsRoutes);
app.use('/img', imgRoutes);
app.use(express.json());


//Ruta
app.get('/', (req, res) =>{
    res.send('Home');
});

//Inicio
app.listen(3000);

//Items

