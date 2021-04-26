import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import users_route from "./routes/users";


const server = express();

server.use(express.json());
server.use(express.urlencoded());
server.use(cors());

server.use("/users", users_route);

(async () => {
    try {
        const connection = await mongoose.connect(
            process.env.MONGODB_URL ?? "mongodb://localhost:27017/app",
            {
                useCreateIndex: true,
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useFindAndModify: false
            });
        if (connection) {
            server.listen(process.env.APP_PORT, () => {
                console.log(`App is running on port: ${process.env.APP_PORT}`);
            })
        }
    } catch (error) {
        console.log(error);
    }
})