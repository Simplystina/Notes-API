const express = require("express")
//const cors = require("cors")
const {connect} = require("./Database/database")
const auth = require("./Middleware/auth")
const bodyParser = require("body-parser")


require("dotenv").config()

//import Routers
const authRouter = require("./Routers/auth")
const noteRouter = require("./Routers/notes")


const PORT = process.env.PORT || 3334
connect()

const app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', authRouter)

app.use('/note', auth ,noteRouter)

app.get('/',(req,res)=>{
    res.status(200).send({message:"Home Route",status:true})
})

app.use("*",(req,res)=>{
    return res.status(404).json({message:"route not found"})
})

app.listen(PORT, ()=>{
    console.log("Server is listening at ",PORT)
})