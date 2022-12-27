import express from "express"
import setupRoutes from "./config/routes"
const app = express()
const PORT = 3000
setupRoutes(app)
app.listen( PORT , () => { console.log(`Listening on port ${ PORT }`) })