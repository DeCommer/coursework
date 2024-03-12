
function getSum(a, b) {
    return a + b;
}
const getSum2 = (a, b) => {
    return a + b
}
const getSum3 = (a,b) => a + b;
// console.log(getSum(4,5));
// console.log(getSum2(1,2));
// console.log(getSum3(2,3));
document.getElementById('res').textContent = `${getSum(4,5)}, ${getSum2(1,2)}, ${getSum3(2,3)}`
const countOccurs = (str, char) => {
    charCount = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i].toLowerCase() === char) {
            charCount++;
        }
    }
    return charCount;
}
// console.log(countOccurs("Shit stains are a problem sometimes", 's'));

let arr1 = [2, 3, 4, 500, 6, 7, 80, 900, 5, 4, 6, 3, 8]
const maxNum = (arr) => {
    let total = 0;
    let max = 0
    for(let i = 1; i < arr1.length; i++) {
        total += arr[i];
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
// console.log(maxNum(arr1));

const titleCase = (str) => {
    let words = str.toLowerCase().split(' ')
    for(let i=0; i<words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
document.getElementById('titleCase').textContent =`${titleCase("This text has been made title case.")}`;
const reverseStr = (str) => str.split('').reverse().join('')
document.getElementById('reverse').textContent = `${reverseStr('This string is reversed')}`

const palindrome = (str) => {
    let specChar = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    let rev = specChar.split('').reverse().join('');
    if (specChar === rev) {
        // console.log(`${str} is a palindrome`)
        return `${str} is a palindrome`
    }else {
        // console.log(`${str} is not a palindrome`)
        return `${str} is not a palindrome`
    }
}
document.getElementById('palindrome').textContent = `${palindrome("Go hang a salami! I'm a lasagna hog!")}`;
document.getElementById('not-palindrome').textContent = `${palindrome("glurg")}`;

const removeDupes = (arr) => {
    let uArr = []

    for(let i = 0; i < arr.length; i++) {
        if(!uArr.includes(arr[i])) {
            uArr.push(arr[i]);
        }
    }
    return uArr;
}
document.getElementById('no-duplicates').textContent = `Original: 2,2,3,5,4,4,7 Duplicates removed: ${removeDupes([2,2,3,5,4,4,7])}`

//DICE GAME ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
document.getElementById('roll-btn').addEventListener('click', () => {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const resultText = document.getElementById('result-text')
    const diceTotal = dice1 + dice2;
    document.getElementById('dice-1-result').textContent = dice1;
    document.getElementById('dice-2-result').textContent = dice2;

    if(diceTotal == 7 || diceTotal == 11) {
        resultText.textContent = `Total is ${diceTotal}. You win!`
    }else if(diceTotal == 2 || diceTotal == 3 || diceTotal == 12) {
        resultText.textContent = `Total is ${diceTotal}. You lose!`
    }else {
        resultText.textContent = `Total is ${diceTotal}. Roll again.`
    }
})

//phone number formatter ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const phUsrIn = document.getElementById('ph-usr-in');
const phEntBtn = document.getElementById('ph-enter-btn');
const phResult = document.getElementById('ph-num-result');
const formatPhoneNum = () => {
    const numbers = phUsrIn.value;
    const areaCode = numbers.slice(0, 3);
    const pre = numbers.slice(3, 6);
    const remaining = numbers.slice(6);

    if(numbers.length < 10) {
        phResult.textContent = 'Enter at least 10 digits'
    }else {
        setTimeout(() => {
            phResult.textContent = '';
        },3000);
        phResult.textContent = `(${areaCode}) ${pre}-${remaining}`;
    }
};
phEntBtn.addEventListener('click', () => {
    formatPhoneNum();
});
//Deck of cards +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const suits = ['C', 'D', 'H', 'S'];
const cardVals = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

for(let i = 0; i < suits.length; i++) {
    for(j = 0; j < cardVals.length; j++) {
        console.log(cardVals[j], suits[i])
    }
}
