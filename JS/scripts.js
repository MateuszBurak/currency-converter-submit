{
    const formElement = document.querySelector(".js-form");
    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");
    const signElement = document.querySelector(".js-sign");

    const calculateResult = (event) => {
        event.preventDefault();

        const amount = amountElement.value;
        const currency = currencyElement.value;
        let result = resultElement.value;

        const currencyEUR = 4.63;
        const currencyUSD = 4.16;
        const currencyGBP = 5.23;

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
}