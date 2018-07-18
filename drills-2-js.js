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
//=====================Warning functins as return values
function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
    return function(location) {
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard has triggered ${warningCounter} time(s) today!`);
    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const hurricaneWarning = hazardWarningCreator('Hurricane coming for you');
const tornadoWarning = hazardWarningCreator('Tornado near')



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
    return  arr[0]+arr[1];
    
}

const jamaa = anotherarray.map(result);
console.log(jamaa);


//======================= reduce
let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
function convert(input){
    input = input.split(" ");
    return input;
}
let resul = convert(input);
console.log(resul);

function check(total,item){
        if(item.length === 3){
            total +=" ";
        }else{
           let element = item.slice(-1).toUpperCase();
            total +=element;
        } 
    return total;
}

const myOutput = resul.reduce(check,"");
console.log(myOutput);
