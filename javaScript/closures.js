let myName = "Taylor";

function print (){
    console.log(myName);
}

print()

function outerFunction (){
    let outerVariable = "I am a variable in the outer function";

    return function innerFunction(innerVariable){
        console.log(outerVariable);
    }
}

const newFunction = outerFunction()
newFunction()

//In js functions have the ability to access external variables so if a function is defined inside a function the inner function will
//have accesss to the variables and parameters of its outer function also known as its parent function, but the parent function will 
//not have access to the variables and parameters of its inner function also known as its child function.