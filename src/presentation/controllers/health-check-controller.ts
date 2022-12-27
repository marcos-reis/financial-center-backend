import { Controller } from "../interfaces";

export class HealthCheck implements Controller{
    async handle (req:Controller.Input):Promise<Controller.Output> {
        return {statusCode:200,data:null}
    }

}