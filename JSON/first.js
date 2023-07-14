import { rejects } from "assert";
import file from "fs" 
import { resolve } from "path";
let testPerson = {
    name: "Taylor",
    age: 19,
    email: function(){
        return "tayloromondi@gmail.com";
    }
}
let testData = JSON.stringify(testPerson);
console.log(testData);
let testDataObject = JSON.parse(testData)
console.log(testDataObject);

let data = file.readFile('C:\Users\taylo\Documents\FullStackWebDev\JSON\people.json','utf-8',(err,result) =>{
    if (err){
        console.log(err)
        return
    }
    try{
        const info = JSON.parse(result)
    } 
    catch(err){
        console.log(err)
    }
    
})

console.log(data)

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(xhttp.responseText);
        console.log(response.people)
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();