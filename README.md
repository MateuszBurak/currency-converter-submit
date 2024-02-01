# Mateusz Burak - simple currency converter using *submit*

## Homepage and portfolio

This project is a part of my learning process of becomming a Frontend developer. You can check the main homepage below.

[Link to the homepage](https://mateuszburak.github.io/Public-homepage/) |
[Link to the homepage's repository](https://github.com/MateuszBurak/Public-homepage)

## Currency converter - submit - January 31th, 2024

[Link to the converter](https://mateuszburak.github.io/currency-converter-submit/) |
[Link to the converter's repository](https://github.com/MateuszBurak/currency-converter-submit)

This converter converts currency values from PLN to EUR, USD and GBP. It follows BEM convention.

## How to use

To use it, simply input the amount and choose the currency you want the outcome to be in.

## Code

Since this simple converter does not use api, as it's mostly meant to practice the *input* element, it uses convertion data from early 2023.

It uses ES6+ features.

It's code consists of 3 functions:

```javascript
const calculate = (amount, currency, signElement) => {

        const currencyEUR = 4.63;
        const currencyUSD = 4.16;
        const currencyGBP = 5.23;

        switch (currency) {
            case "EUR":
                signElement.innerText = " €";
                return amount / currencyEUR;
            case "USD":
                signElement.innerText = " $";
                return amount / currencyUSD;
            case "GBP":
                signElement.innerText = " £";
                return amount / currencyGBP;
        }
    }
```

```javascript
const calculateResult = (event) => {

        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const signElement = document.querySelector(".js-sign");

        const result = calculate(+amountElement.value, currencyElement.value, signElement);

        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = result.toFixed(2);

    }
```

```javascript
{
        const init = () => {

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", calculateResult)

    }
    init();
}
```
