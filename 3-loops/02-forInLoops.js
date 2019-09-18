// great for iterating over values in an object. Properties in an object are whats called 'enumerable'
// for in loops iterate over an objects enumerable properties

let student = {
    name: 'Peter',
    awesome: true,
    degree: 'JavaScript',
    week: 1
};

// console.log(student.name)

for (let item in student) {
    // console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat in catArray) {
    // console.log(cat);
    console.log(catArray[cat]);
}

/*
CHALLENGE
************
​
    - write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name
*/

let name = 'doNoVaN';
let capName;

for (let index in name) {
    // console.log(n);
    if (index == 0) {
        capName = name[index].toUpperCase();
    } else {
        capName += name[index].toLowerCase();
    }
}

console.log(capName);