import { Request, Response } from "express";
import express from "express"
import getResonseTime from "./middleware/middleware";
import client from "prom-client";
import { getTotalRequest } from "./monitoring/getTotalRequest";
const app = express()

//ugly
// app.use(getResonseTime);

//
app.use(getTotalRequest)
app.get("/users",(req : Request,res:Response)=>{
    const user = {
        "name" : "Abhijit jha",
        "age" : 20
    }

    // for(let i = 0;i<10000000000;i++){}
    res.json(user).status(200);
});


app.get("/metrics",async(req : Request,res : Response)=>{
    const metrics = await client.register.metrics();
    res.set("Content-Type",client.register.contentType);
    console.log(metrics);
    res.end(metrics);
})
app.listen(3000)