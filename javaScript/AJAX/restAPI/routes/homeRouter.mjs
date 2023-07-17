import express from 'express'
import path from 'path'
const router = express.Router()

router.get('/',(req,res)=>{
    res.sendFile('C:\Users\taylo\Documents\FullStackWebDev\javaScript\AJAX\restAPI\views\index.html')
})

export default router