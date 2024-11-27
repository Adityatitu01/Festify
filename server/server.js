const express = require('express');
const app = express();
require('dotenv').config(); 
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const PORT = process.env.PORT || 3003;
const errorMiddleware = require('./middlewares/error-middleware')
const cors = require('cors')

//<--------------------------------------CORS DEFINITION-----------------------------------------------> .


var corsOptions = {
    origin: 'https://festify-sigma.vercel.app',
    methods:"GET, POST,PUT,DELETE, PATCH, HEAD",
    optionsSuccessStatus: 200,
    Credentials:true,
  }
  app.use(cors(corsOptions))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/',userRoutes);

app.use(errorMiddleware);

connectDB();

app.listen(PORT, () => {
    console.log(`I'm running on port: ${PORT}`);
});
