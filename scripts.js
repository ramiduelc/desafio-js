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

    if (currencyconvertde.value == "real" && currencySelect.value == "dolar") {
        currancyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencyconvertde.value == "real" && currencySelect.value == "euro") {
        currancyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencyconvertde.value == "real" && currencySelect.value == "libra") {
        currancyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencyconvertde.value == "real" && currencySelect.value == "peso") {
        currancyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue / pesoToday)
    }

    if (currencyconvertde.value == "real" && currencySelect.value == "bitcoin") {
        currancyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelect.value == "dolar" && currencyconvertde.value == "real") {
        currancyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue /dolarToday)
    }

   

    function formatCurrency() {

        switch (currencyconvertde.value) {
            case "dolar":
                currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(inputCurrencyValue);
                break;

            case "euro":
                currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "EUR",
                }).format(inputCurrencyValue);
                break;

            case "libra":
                currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-GB", {
                    style: "currency",
                    currency: "GBP",
                }).format(inputCurrencyValue);
                break;
             
            case "real":
                currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(inputCurrencyValue);
                break;

            default:
                break;
        }
    }

    formatCurrency()

}

function changeCurrency() {
    const nomeMoeda2 = document.getElementById("nome-moeda-select-2")
    const nomeMoeda1 = document.getElementById('nome-moeda-select-1')
    const currencyImage = document.querySelector('.currency-img')
    const currencyconvertde = document.querySelector('.currency-convertde')


    if (currencyconvertde.value == 'real') {
        nomeMoeda1.innerHTML = 'Real Brasileiro'
        currencyconvertde.src = './assets/real.png'
    }

    if (currencyconvertde.value == 'dolar') {
        nomeMoeda1.innerHTML = 'Dolar Americano'
        currencyconvertde.src = './assets/dolar.png'
    }

    if (currencyconvertde.value == 'euro') {
        nomeMoeda1.innerHTML = 'Euro'
        currencyconvertde.src = './assets/euro.png'
    }

    if (currencyconvertde.value == 'libra') {
        nomeMoeda1.innerHTML = 'Libra'
        currencyconvertde.src = './assets/libra.png'
    }

    if (currencySelect.value == 'dolar') {
        nomeMoeda2.innerHTML = 'Dólar americano'
        currencyImage.src = './assets/dolar.png'
    }

    if (currencySelect.value == 'libra') {
        nomeMoeda2.innerHTML = 'Libra'
        currencyImage.src = './assets/libra.png'
    }

    if (currencySelect.value == 'euro') {
        nomeMoeda2.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
    }
    
    if (currencySelect.value == 'peso') {
        nomeMoeda2.innerHTML = 'Peso Argentino'
        currencyImage.src = './assets/pesoargentino.png'
    }
    if (currencySelect.value == 'bitcoin') {
        nomeMoeda2.innerHTML = 'Bitcoin '
        currencyImage.src = './assets/bitcoin.png'
    }

    /*
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
    */
    convertValues()

}

currencyconvertde.addEventListener('change', changeCurrency) // aqui pega o evento de mudança do primeiro select
currencySelect.addEventListener('change', changeCurrency)
convertbutton.addEventListener("click", convertValues)