import express from 'express'
const app = express()
import { exportImages } from 'pdf-export-images'
import cors from 'cors'
import device from 'express-device';
import router from './routes/authroute.js';
import dotenv from 'dotenv'
import http from 'http'
import connectDB from './database/connection.js'
import socketCon from './socket.js'
import extract from 'pdf-text-extract'
import useragent from 'express-useragent';

app.use(cors())
app.use(useragent.express());
dotenv.config()
app.use(device.capture());
app.use(useragent.express());
const server = http.createServer(app)
// const io = new Server(server, {
//     pingTimeout: 60000,
//     cors: {
//         origin: "http://localhost:3000"
//     }
// })
const options = {
    cwd: "./"
}
connectDB()
export const io = socketCon(server)
export const HELLO = "HELLO"

// console.log('Exported', io)
app.get('/image/pdf', (req, res) => {
    // exportImages('./rekha.pdf', './out/')
    //     .then(images => {

    //         console.log('Exported', images)
    //         return res.status(200).json({ images: images })

    //     })
    //     .catch(console.error)


    extract('./rekha.pdf', options, function (err, pages) {
        if (err) {
            console.dir(err)
            return
        }
        console.dir('extracted pages', pages)
    })
}
)
app.get('/device', (req, res) => {

    res.send(req.useragent);
    // res.send("Hi to " + req.device.type + " User");

})

server.listen(process.env.PORT, () => {
    console.log(`listening to port ${process.env.PORT}`)
})
app.use(router)
// export { io }
