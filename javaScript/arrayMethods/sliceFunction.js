const array = [1,2,3,4,5,6,7];

console.log(array.slice(-2));
console.log(array.slice(1,3));
console.log(array.slice(2));
//.slice is a function that returns a copy of a portion that of the specified array. It does not make any changes to the array.
//the first  number specified is the starting index of the array where the copy array's elements should start from and the next number
//specified is the index after the final index that should be in the new array e.g array.slice(0,2) this will make the new array
//to have elements from index 0 to index 1.
//if only one parameter is specified the method will return an array starting from that the index of the specified number to the end
//you can give a negative number is order to have elemets from the end of the array e.g -1 will give the last element in the array
//-2 will give the last 2 elements in the array. Note that the order of the returned elements when giving negative numbers as will
//still be in the normal order from index 0 to the last index of the array.