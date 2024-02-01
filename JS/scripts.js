{
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
    const calculateResult = (event) => {

        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const signElement = document.querySelector(".js-sign");

        const result = calculate(+amountElement.value, currencyElement.value, signElement);

        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = result.toFixed(2);

    }
    const init = () => {

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", calculateResult)

    }
    init();
}