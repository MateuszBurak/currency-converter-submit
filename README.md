# Mateusz Burak - simple currency converter using *submit*

## Homepage and portfolio

This project is a part of my learning process of becomming a Frontend developer. You can check the main homepage below.

[Link to the homepage](https://mateuszburak.github.io/Public-homepage/) |
[Link to the homepage's repository](https://github.com/MateuszBurak/Public-homepage)

## Currency converter - submit - January 31th, 2024

[Link to the converter](https://mateuszburak.github.io/currency-converter-submit/) |
[Link to the converter's repository](https://github.com/MateuszBurak/currency-converter-submit)

This simple converter does not use api, as it's mostly meant to practice the *submit* element

```javascript
formElement.addEventListener("submit", (event) => {
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
})
```
