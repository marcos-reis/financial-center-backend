import {Express} from "express"
import { HealthCheck,ListCompaniesController } from "../../presentation/controllers"
import { adaptExpressRoute } from "../adapters/adapt-express-route"

const setupRoutes = (app:Express):void=>{
    app.get("/companies",adaptExpressRoute(new ListCompaniesController))
    app.get("/health", adaptExpressRoute(new HealthCheck))
}

export default setupRoutes