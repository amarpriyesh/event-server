import express, {json} from 'express';
import session from "express-session";
import cors from 'cors';

import TestController from "./controller/test.js"
    


    
const app = express();
app.use(
    session({
        secret: "asdfasdfasdfasdf",
        resave: false,
        saveUninitialized: true,
        // cookie: { secure: true }, // needs HTTPS
    })
);
   

    app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000", "https://priyeshportfolio.info"],

    })
);
app.use(express.json());

TestController(app)


app.listen(process.env.PORT || 4000);
