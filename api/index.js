import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();



// DB user: dumitrur128 DB pas: kOpQ6uU903QYqMUC

mongoose.connect(process.env.MONGO).then(() => {
    console.log("MDB connected");
}).catch((err) => {
    console.log("Error: " + err);
});

const app = express();

app.listen(3000, () =>{
    console.log('Server is runing on port 3000');
});

