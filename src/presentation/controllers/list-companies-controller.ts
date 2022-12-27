import { Controller } from "../interfaces"

export class ListCompaniesController implements Controller{
   async handle (req:Controller.Input):Promise<Controller.Output> {

        const companies = [{
            id:1,
            code:"ABEV"
        }]
        if(!companies) return {statusCode:400,data:{ message: "Error"}}
        return {statusCode:200,data:companies}
    }

}