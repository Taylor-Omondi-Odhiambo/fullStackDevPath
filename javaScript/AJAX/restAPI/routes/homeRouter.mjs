import express from 'express'
import path from 'path'
import url from 'url';
const router = express.Router()
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/',(req,res)=>{
    // const filePath = path.join(__dirname,'/views/index.html')
    // res.sendFile(filePath)
    res.sendFile(path.join(__dirname,'../views/index.html'))
})

export default router