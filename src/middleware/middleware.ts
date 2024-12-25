import { NextFunction, Request, Response } from "express";

//This approach is Not good for async calls
export default function getResonseTime(req: Request,res : Response,next :NextFunction){
    const startTime = Date.now();
    next(); 
    const endTime = Date.now();
    console.log(`It took ${endTime - startTime}ms to resolve the request`);
}
