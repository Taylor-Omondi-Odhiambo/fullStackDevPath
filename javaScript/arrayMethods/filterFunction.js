const array = [1,2,3,4,5,6,7,8,9,10];

const even = array.filter((x) => {
   return x % 2 !== 0;
});

console.log(even);

//iterates through the array and creates a new array with only the elements in the array that met the condition.
//note that these array methods can be chained together. It is good practice to have each additional method on a new line instead of
//all one line e.g
/*array.map()
    .filter
Instead of array.map().filter() */