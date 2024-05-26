import { Express, Request, Response } from "express";
import express from "express";
import * as path from "path";
import { createServer } from "http";
import { Server } from "socket.io";

const app: Express = express();

const publicPath: string = path.resolve(path.join(__dirname, "../public"));

app.use(express.static(publicPath));

app.get("/api", (req: Request, res: Response): void => {
	res.send("You have reached the API!");
});

app.get("*", (req: Request, res: Response): void => {
	res.sendFile(path.join(publicPath, "./index.html"));
});

const port: number = 4000;

const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: true,
        credentials: true
    },
});

io.on("connection", (socket) => {
    console.log("a user connected");
    
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });

    socket.on("command", (msg) => {
        io.emit("command", msg);
    });
});

server.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});
