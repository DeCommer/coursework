const select = document.querySelectorAll('.currency');
const number = document.getElementById('number');
const output = document.getElementById('output');
const result = document.getElementById('result');


fetch('https://api.frankfurter.app/currencies').then((data) => data.json())
    .then((data) => {
        display(data);
    });

function display(data) {
    const entries = Object.entries(data);

    console.log(entries);

    for (let i = 0; i < entries.length; i++) {
        select[0].innerHTML += `<option value = "${entries[i][0]}"> ${entries[i][0]} : ${entries[i][1]} </option>`;
        select[1].innerHTML += `<option value = "${entries[i][0]}"> ${entries[i][0]} : ${entries[i][1]} </option>`;
    }
}

function updateval() {
    let curr1 = select[0].value;
    let curr2 = select[1].value;
    let val = number.value;

    if (curr1 != curr2) {
        convert(curr1, curr2, val);
    }else {
        //result.textContent = `${val} ${curr1} is ${val} ${curr2}`;
        output.value = 1;
    }

    function convert(currency1, currency2, value) {
        const host = "api.frankfurter.app";
        fetch(`https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`)
          .then((val) => val.json())
          .then((val) => {
            let resultNum = Object.values(val.rates)[0]
            console.log(resultNum);
            output.value = resultNum;
            result.textContent = `${value} ${currency1} is ${resultNum} ${currency2}.`; //Shows results above form
          });
  
    }
}