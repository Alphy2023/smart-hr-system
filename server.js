import {createServer} from "http";
import next from "next";
import {Server as SocketIOServer} from "socket.io";

const dev = process.env.NODE_ENV !=='production';

const hostname = process.env.HOSTNAME || "localhost";
const port = parseInt(process.env.PORT || "8080", 10);

const app = next({dev,hostname,port});

const handler = app.getRequestHandler();

const onlineUsers = new Map();

app.prepare().then(()=>{
    const httpServer = createServer(handler)

    // const io = new SocketIOServer(httpServer, {
    //     cors: { origin: "*" },
    // });

    // io.on("connection", (socket) => {
    //     console.log(`Client connected: ${socket.id}`);
    
    //     // socket.on("user-online", async (data) => {
    //     //   const { userId, name, image, location } = data;
    //     //   onlineUsers.set(userId, { socketId: socket.id, name, image, location });
    
    //     //   // Uncomment to perform database operations
    //     //   // await db.onlineUser.upsert({
    //     //   //   where: { userId },
    //     //   //   update: { socketId: socket.id, location },
    //     //   //   create: { userId, userName: name, userImage: image, location, socketId: socket.id },
    //     //   // });
    
    //     //   io.emit("online-users", Array.from(onlineUsers.values()));
    //     // });
    //     io.emit("online-users", [{name:"jane",email:"text@gmail.com"}]);

    
    //     // socket.on("user-offline", async (userId) => {
    //     //   onlineUsers.delete(userId);
    //     //   // Uncomment to perform database operations
    //     //   // await db.onlineUser.deleteMany({ where: { userId } });
    //     //   io.emit("online-users", Array.from(onlineUsers.values()));
    //     // });
    
    // // socket.on("disconnect", async () => {
    // //   const userId = [...onlineUsers.entries()].find(([_, value]) => value.socketId === socket.id)?.[0];
    // //   if (userId) {
    // //     onlineUsers.delete(userId);
    // //     // Uncomment to perform database operations
    // //     // await db.onlineUser.deleteMany({ where: { userId } });
    // //   }
    // //   io.emit("online-users", Array.from(onlineUsers.values()));
    // // });
    // });

    httpServer.listen(port,()=>{
        console.log(`server is running on http://${hostname}:${port}`)
    })
})
