import express from "express"
const  app = express()
const PORT = 3000
app.use((_,res)=>res.send("Hello World!"))
app.listen( PORT , () => {
    console.log(`Listening on port ${ PORT }`)
})