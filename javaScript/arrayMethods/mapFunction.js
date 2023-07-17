const array1 = [1,2,3,4,5];

// const array2 = array1.map( x  =>{return x * 2});
console.log(array1.map((x) => {
   let newX =  x + 1;
    let newerX = newX * 2;
    return newerX;
}));

//.map function applies the  lines of code written to every element in the array and creates a new array with the result it
//does not directly affect the array it is called upons