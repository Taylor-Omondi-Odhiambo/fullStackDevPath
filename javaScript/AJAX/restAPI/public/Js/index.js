let retrieveButton = document.getElementById("externalRetrieval")
retrieveButton.addEventListener('click',()=>{
    let xhr = new XMLHttpRequest()
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true)
    xhr.send()
    xhr.onload = ()=>{
        let data = JSON.parse(xhr.responseText)
        dataDisplay(data)
    }
})

function dataDisplay(users){
    let htmlTemplate = ''
    for(let user of users){
        htmlTemplate += `<li>${user.id}</li>
                        <li>${user.title}</li`
    }
    document.getElementById("outsideInfo").innerHTML = `<ul>${htmlTemplate}</ul>`
}