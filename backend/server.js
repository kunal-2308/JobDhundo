//Imports :
const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('../backend/DbConfig/dbConfig');
const cors = require('cors');
const cookieParser = require('cookie-parser');


//Calls:
dotenv.config();
connectDb();

//Middlewares:
let app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors({origin:'*'}));
app.use(cookieParser());


//Port Call:
const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
})