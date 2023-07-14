//set timeout and set interval take a callback function and the time in milliseconds
//the clearInterval and clearTimeout functions can be used to stop them if you pass the variable name tied to the timeout or interval
let count = 0;

function counter (){
    count++;
    console.log(count);
}

let countToTen = setInterval(() =>{
    counter();
    if (count === 10){
        clearInterval(countToTen);
    }
},1000)

//setTimeout has the exact same syntax but only occurs once after the specified time has passed. Use clearTimeout to stop it.
