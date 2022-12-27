import {Request,Response} from "express"

import { Controller } from "../../presentation/interfaces";
    export const adaptExpressRoute = (controller:Controller) =>{
       return async (req:Request, res:Response) =>{
          const {statusCode,data} = await controller.handle(req)
            if(!data) res.sendStatus(statusCode)
            else{
               const response = [200, 204].includes(statusCode) ? data : { error: data.message }
               res.status(statusCode).json(response)}
       }
}