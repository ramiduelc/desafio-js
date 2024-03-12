const convertbutton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyconvertde = document.querySelector(".currency-convertde")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currancyValueConverted = document.querySelector(".currency-value")


    const dolarToday = 4.9
    const euroToday = 6.2
    const libraToday = 6.3
    const pesoToday = 0.005
    const bitcoinToday = 359935.65


    if (currencySelect.value == "dolar") {
        currancyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currancyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra") {
        currancyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "peso") {
        currancyValueConverted.innerHTML = new Intl.NumberFormat("ar-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue / pesoToday)
    }
    if (currencySelect.value == "bitcoin") {
        currancyValueConverted.innerHTML = new Intl.NumberFormat("bt-BT", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue)

}

function changecurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar americano"
        currencyImage.src = "./assets/dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
    if (currencySelect.value == "peso") {
        currencyName.innerHTML = "Peso Argentino"
        currencyImage.src = "./assets/pesoargentino.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues()
}


currencySelect.addEventListener("change", changecurrency)
convertbutton.addEventListener("click", convertValues)