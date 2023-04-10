import express from 'express'
import mongoose from 'mongoose'
const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI
    ).then((result) => {
        console.log('mongo connected');
    })
        .catch((err) => { console.log(err) });
}
export default connectDB 