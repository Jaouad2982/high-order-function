//=========================repeat
function repeat(fn, n) {
    for (let i = 0; i <= n; i++) {
        console.log(fn);
    }
}
function hello() {
    return "hello";
}
function goodBye() {
    return "goodbye";
}
repeat(hello(), 5);
repeat(goodBye(), 10);


//========================= average 
let myarr = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
myarr.forEach(element => {
    sum = sum + element;
    console.log(element);
});
console.log(sum);
console.log(sum / myarr.length);

let one = [1, 2];
function output(i) {
    console.log(i);
}
one.forEach(output);



//================================filter
// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function (name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {

    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charAt(0) === 'R') {
            newArray.push(arr[i]);

        }
    }
    return newArray;

}
filter(myNames);

// For Each, For, Map
//========== filter
let my = [-3, -9, 1, 2];

function fil(number) {
    return (number > 0);
}

const newArray = my.filter(fil);
console.log(newArray);

//============Map
let anotherarray = [1,2];
function result(arr){
    let newARRAY =  arr[0]+arr[1];
    return newARRAY;
}

const jamaa = anotherarray.map(result);
console.log(jamaa);