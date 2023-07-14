const array = [1,2,3,4,5,6,7,8,9,10];

console.log(array.splice(1,2,9,8,7,6,5,4,3,2,1,0));
console.log(array);

//.splice is a method that can be used to delete and add elements from an array. It actually affects the array specified so it should
//be used with caution. The first parameter given is the index you should start deleting from the index specified is also included
//in the deletion. The second parameter is the number of elements to be deleted moving forward in the array srarting from the index
//you specified. You cannot reverse the direction by giving a negative number
//If you wish to add elements to the array after deletion in order to replace the deleted ones you can add the new elements you want to
//add as additonal parameters in the order you want. If you only wish to add elements without deleting any give 0 as the second
//parameter(number of elements to be deleted).