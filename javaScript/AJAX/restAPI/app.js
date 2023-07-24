import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'
import url from 'url'
import apiRouter from './routes/apiRouter.mjs'
import homeRouter from './routes/homeRouter.mjs'
//Global variables
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//server configuration
const port = 5000
const  hostname = '127.0.0.1'
//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'./public')))//method to identify folder with static files.
//routes
app.use('/',homeRouter);
app.use('/api',apiRouter);
//server configuration
app.listen(port,hostname, ()=>{
    console.log(`Server is listening at http://${hostname}:${port}`)
})