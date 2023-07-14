import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import cors from 'cors'
import apiRouter from './routes/apiRouter.mjs'
import homeRouter from './routes/homeRouter.mjs'
//server configuration
const port = 5000
const  hostname = '127.0.0.1'
//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//routes
app.use('/',homeRouter);
app.use('/api',apiRouter);
//server configuration
app.listen(port,hostname, ()=>{
    console.log(`Server is listening at http://${hostname}:${port}`)
})