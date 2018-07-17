function average(numbers) {
    let sum = 0;
    numbers.forEach(element => {
        return sum += element;
    });
    let avg = sum/numbers.length;
    return avg;
}

console.log(average([10,2]));
