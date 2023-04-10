import { Server } from "socket.io";
// export const io = null

const socketCon = (server) => {

    const io = new Server(server, {
        // cors: "http://localhost:3000"
        cors: {
            origin: "*"
        }
    });

    io.on("connection", (socket) => {
        console.log("some has connected")
        socket.emit("hello", "fuck you");
        socket.on("disconnect", () => {
            console.log("some has disconnected")
        })
    });
    return io

}

export default socketCon

