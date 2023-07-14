let btn = document.getElementById("change")
btn.addEventListener('click',()=>{
    const getRequest = new XMLHttpRequest()
    getRequest.open('GET','dataFile.txt',true)
    getRequest.send()
    getRequest.onload = function (){
        if (getRequest.status === 200){
            let data = getRequest.responseText
            changeText(data)
            console.log("Success")
        }
    }
})

function changeText(data){
    let newData = `<h3>${data}</h3>`
    document.getElementById("information").innerHTML = newData
}
