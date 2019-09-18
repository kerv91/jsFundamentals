//FOR OF FOR ARRAYS
// loop over iterable properties
    //iterable meaning able to 'parse' through with numbers
    
    // we cannot use a for of loop with an object becaause objects do not have indexes or iterable properties 
    // - objects are enumerable

let student = { 
    name: 'Peter',
    awesome: true,
    degree: 'Javascript',
    week: 1
};

for (let item of student) {
    console.log(item)
}

let dogArray = ['husky', 'german shepard', 'pug', 'border collie', 'chihuahau'];

for (dog of Array) {
    console.log(dog, 'goes bark');
}