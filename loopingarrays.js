function forwardLeft(arr) {
    const firstArray = arr.filter(
        function(items) { 
            if (items[0] >= 0 && items[1] >= 0) {
            return items;
            }
        }
    );
    const secondArray = firstArray.map(
        function(items) {
            return items[0] + items[1];
        }
    );
    let finalArray = secondArray.forEach(function(item) {
        console.log(item);
    })
    console.log(firstArray);
    console.log(secondArray);
}

let myArray = [[0,0], [2,3], [-2,3], [-3,-3]];

forwardLeft(myArray);


// shorter
// function forwardLeft(arr) {
//    return arr.filter(
//         function(items) { 
//             if (items[0] >= 0 && items[1] >= 0) {
//             return items;
//             }
//         }
//     ).map(
//         function(items) {
//             return items[0] + items[1];
//         }
//     ).forEach(function(item) {
//         console.log(item);
//     })
// }

// let myArray = [[0,0], [2,3], [-2,3], [-3,-3]];

// forwardLeft(myArray);