import express from 'express';
const router = express.Router();

let employees = [
    {
        id: 41483422,
        fName: "Jason",
        surname: "Thread",
        email: "jasonthread@gmail.com",
        gender: "Male"
    },
    {
        id: 34898423,
        fName: "Laura",
        surname: "Wilson",
        email: "laura@gmail.com",
        gender: "Female"
    }
]

//Get request
router.get('/employees',(req,res)=> {
    res.json(employees)
    console.log(`POST Request received ar server.. ${new Date().toLocaleTimeString()}`)
    res.json({msg: 'GET Request is Success'});
})
function getID(){
    return Math.floor(Math.random() * 10000000)
}
//Post request
router.post('/employees',(req,res)=>{
    let employee = {
        id: getID(),
        fName: req.body.fName,
        surname: req.body.surname,
        email: req.body.email,
        gender: req.body.gender
    }
    employees.push(employee)
    console.log(`POST Request received at server.. ${new Date().toLocaleTimeString()}`)
    res.json({msg: 'POST Request is Success'});
})

//Put request
router.put('/employees:id',(req,res)=>{
    let employeeID = req.params.id
    let updateEmployee = {
        id: employeeID,
        fName: req.body.fName,
        surname: req.body.surname,
        email: req.body.email,
        gender: req.body.gender
    }
    
    let existingEmployee = employees.find((employee) =>{
        return employee.id === employeeID
    })

    employees.splice(employees.indexOf(existingEmployee),1,updateEmployee)
    console.log(`PUT Request received at server.. ${new Date().toLocaleTimeString()}`)
    res.json({msg: 'PUT Request is Success'});
})

//Delete request
router.delete('/employees:id',(req,res)=>{
    let employeeID = req.params.id
    employees =  employees.filter((employee) =>{
        return employee.id !== employeeID
    })
    console.log(`DELETE Request received at server.. ${new Date().toLocaleTimeString()}`)
    res.json({msg: 'DELETE Request is Success'});
})

export default router