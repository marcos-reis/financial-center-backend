import express from "express"
const app = express()
const PORT = 3000
app.get("/",(_,res)=>res.send("Hello World!"))
app.get("/health", (_,res)=>res.sendStatus(200))
app.listen( PORT , () => { console.log(`Listening on port ${ PORT }`) })