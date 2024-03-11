
let userInput = document.getElementById('date');
let futureDate = new Date().toISOString().split('T')[0];
let result = document.getElementById('result');

let additional = document.getElementById('additional');

function calculateAge() {
    let bd = new Date(userInput.value);
    let bdHours = bd.getHours(userInput.value);
    let bdMinutes = bd.getMinutes(userInput.value);
    let bdSeconds = bd.getSeconds(userInput.value);
    let d1 = bd.getDate();
    let m1 = bd.getMonth() + 1;
    let y1 = bd.getFullYear();

    let today = new Date();

    bdHours = (Math.abs(bd - Date.now()) / 36e5).toFixed(0);
    bdMinutes = (Math.abs(bd - Date.now()) / 36e5 * 24).toFixed(0);
    bdSeconds = (Math.abs(bd - Date.now()) / 36e5 * 60).toFixed(0);

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if(bd > Date.now()) {
        result.innerHTML = `You have not been born yet.`;
    } else {
        if(m2 >= m1) {
            m3 = m2 - m1;
        }else {
            y3--;
            m3 = 12 + m2 - m1;
        }

        if(d2 >= d1) {
            d3 = d2 - d1;
        }else {
            m3--;
            d3 = getDaysInMonth(y1, m1) + d2 - d1; 
        }

        if(m3 < 0) {
            m3 = 11;
            y3--;
        }

        result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old.`;

        additional.innerHTML = `In addition, you are ${bdHours} hours, ${bdMinutes} minutes and ${bdSeconds} seconds old`;
    }
 }; 

 function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
 }