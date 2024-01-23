'use strict'


// const calcAvereage = (a, b, c) => (a + b + c) / 3;

// let scoreDolph = Math.round(calcAvereage(44, 23, 71));
// let scoreKoala = Math.round(calcAvereage(65, 54, 49));

// const checkWinner = function(avgDolph, avgKoala) {
//     if(avgDolph > 2 * avgKoala) {
//         console.log(`Dolphins win ${avgDolph} vs. ${avgKoala}!`);
//     }else if (avgKoala > 2 * avgDolph) {
//         console.log(`Koalas win ${avgDolph} vs. ${avgKoala}!`);
//     }else {
//         console.log("Draw");
//     }
// }

// checkWinner(scoreDolph, scoreKoala);

// scoreDolph = Math.round(calcAvereage(85, 54, 41));
// scoreKoala = Math.round(calcAvereage(23, 34, 27));
// checkWinner(scoreDolph, scoreKoala);

// const bills = [125, 555, 44];

// ********* Functions with Arrays ********************

// const calcTip = function(bill) {
//     if(bill >= 50 && bill <= 300) {
//         bill *= 0.15
//         return bill
//     }else {
//         bill *= 0.2
//         return bill
//     }
// }

// const betterCalcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 :
//     bill * 0.2
// }

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// const tips2 = [betterCalcTip(bills[0]), betterCalcTip(bills[1]), betterCalcTip(bills[2])]
// const totals2 = [bills[0] + tips2[0], bills[1] + tips2[1], bills[2] + tips2[2]]

// console.log(`The bills are: ${bills}, the tips are: ${tips}, and the totals are: ${totals}`)
// console.log(`The bills are: ${bills}, the tips are: ${tips2}, and the totals are: ${totals2}`)

// ********* Functions with Objects ********************

const mark = {
    firstName : "Mark",
    lastName : "Miller",
    mass : 78,
    height : 1.69,
    calcBMI : function() { this.bmi = Math.floor(this.mass / this.height ** 2)
        return this.bmi}
};

const john = {
    firstName : "John",
    lastName : "Smith",
    mass : 92,
    height : 1.95,
    calcBMI : function() { this.bmi = Math.floor(this.mass / this.height ** 2) 
    return this.bmi}
};

john.calcBMI(), mark.calcBMI();

if (john.bmi > mark.bmi) {
    console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})`)
}else if(mark.bmi > john.bmi){
    console.log(`${mark.firstName} 's BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})`)
}



const joseph = {
    firstName : "Joseph",
    lastName : "DeCommer",
    age: 2024 - 1979,
    job : "trader",
    friends : ["Constance", "Spoons", "Self"]
};

const chalSent  = `${joseph.firstName} is ${joseph.age} has ${joseph.friends.length} friends, and his best friend is ${joseph.friends[0]}`

console.log(chalSent)
