require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDb = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.json())


//rotes
app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 3000;


const start = async () =>{
    try{
        await connectDb(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listing on port: ${port}`));
    }catch(error){
        console.log(error)
    }
}
start()