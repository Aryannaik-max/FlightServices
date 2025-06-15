const express = require('express');
const bodyParser = require('body-parser');

const { PORT, DB_SYNC } = require('./config/serverConfig');
const db = require('./models/index');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.listen(PORT,()=>{
    console.log(`server connected at PORT: ${PORT}`);
    if(DB_SYNC){
        db.sequelize.sync({alter:true});
    }
})