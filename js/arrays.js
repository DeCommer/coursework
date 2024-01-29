

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let arr2 = ['f', 'g', 'h', 'i', 'j']

//slice Returns a section of the array
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(`Slice method `, arr.slice())
// console.log(`Spread method: `, [...arr]);
// console.log(arr.at(2));

//splice deletes a section after second argument
// console.log(arr.splice(0,3));
// console.log(arr.splice(-1));

// //concat places two arrays together
// const letters = arr.concat(arr2);//mutates
// console.log(letters);
// console.log([...arr, ...arr2]); //does not mutate.

// //Join joins arrays by separator
// console.log(letters.join(' 🔵 '));

//At method

// const arr = [23, 11, 64];

// console.log(arr[0]);
// console.log(arr.at(0)); //same but simpler

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1) [0]);
// console.log(arr.at(-1)); //simpler
// const myName = 'Joseph DeCommer'
// const myInit = myName.at(0) + myName.at(7);
// console.log(myInit);

//For Each -

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
let total = 0;

for (const [i, movement] of movements.entries()) {
    if(movement > 0) {
        console.log(`${i + 1}: You made a deposit of: $${movement}.`);
    }else {
        console.log(`${i + 1}: You made a witdrawl of: $${Math.abs(movement)}.`);
    }
}
console.log('-----------ForEach------------')
movements.forEach(function(movement, i, arr) {
    if(movement > 0) {
        console.log(`${i + 1}: You made a deposit of: $${movement}.`);
        total += movement;
    }else {
        console.log(`${i + 1}: You made a witdrawl of: $${Math.abs(movement)}.`);
        total += movement;
    }
});
console.log(`Total Balance: $${total}`);



