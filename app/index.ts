import { Express, Request, Response } from "express";
import express from "express";
import * as path from "path";

const app: Express = express();

const publicPath: string = path.resolve(path.join(__dirname, "../public"));
console.log("publicPath :", publicPath)

app.use(express.static(publicPath));

app.get("/api", (req: Request, res: Response): void => {
    res.send("You have reached the API!");
});

app.get("*", (req: Request, res: Response): void => {
    res.sendFile(path.join(publicPath, "./index.html"));
})
    

const port: number = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}!`));
