const array = [10,1,20,3,4];

const sum = array.reduce((x,y) => {return x * y}, 0)

console.log(sum);

const largest = array.reduce((x,y) =>{
    if (x > y){
        return x;
    }
    else{
        return y;
    }
});

console.log(largest);

// the .reduce function gives a single result from some line of code run on each  element of the array. In its callback function
//it takes in two parameters the first being the previous value initialized to the first element of the array array[0] if an initial value
//is not given after the declaration of the function. and a current value which is initialized to the second element array[1] of the array
//if an initial value is not given.  If an initial value is given  the previous value becomes the initial value and the current value
//becomes the first element of the array array[0].