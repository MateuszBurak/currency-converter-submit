let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let signElement = document.querySelector(".js-sign");

const calculateResult = (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result = resultElement.value;

    let currencyEUR = 4.63;
    let currencyUSD = 4.16;
    let currencyGBP = 5.23;

    switch (currency) {
        case "EUR":
            result = amount / currencyEUR;
            signElement.innerText = " €";
            break;
        case "USD":
            result = amount / currencyUSD;
            signElement.innerText = " $";
            break;
        case "GBP":
            result = amount / currencyGBP;
            signElement.innerText = " £";
            break;
    }

    resultElement.innerText = result.toFixed(2);
}

formElement.addEventListener("submit", calculateResult)