import {action, autorun, computed, observable, runInAction} from "mobx";

const baseCurrency = "EUR";
const currencyCodes = ["GBP", "USD"];

class CurrencyStore {
    @observable selectedCountry = "";

    @observable currencies = [];

    constructor() {
        //updates every day
        this.fetchCurrencies();
        setInterval(() => {
            this.fetchCurrencies();
        }, 86400);
        autorun(() => console.log(this.currencyValue));
    }

    @computed
    get currencyValue() {
        return this.selectedCountry && this.currencies && this.currencies.length > 0
            ? this.currencies
                .filter(currency => currency.code === this.selectedCountry)
                .map(
                    currency =>
                        currency.hasOwnProperty("currency") ? currency.currency : 0
                )
            : 0;
    }

    @computed
    get countries() {
        return this.currencies.map(currency => {
            return {value: currency["code"], label: currency["code"]};
        });
    }

    @action
    fetchCurrencies() {
        Promise.all(currencyCodes.map(code => this.fetchUrl(code)))
            .then(currencies =>
                currencies.map(v => {
                    return {code: Object.keys(v)[0], currency: v[Object.keys(v)[0]]};
                })
            )
            .then(currencies => this.currencies = currencies);
    }

    fetchUrl(currencyCode) {
        return fetch(
            `http://api.fixer.io/latest?base=${baseCurrency}&symbols=${currencyCode}`,
            {mode: "cors"}
        ) // Call the fetch function passing the url of the API as a parameter
            .then(response => response.json())
            .then(result => result.rates)
            .catch(e => console.error("Fetching failed", e));
    }

    selectCountry(index) {
        this.selectedCountry = index;
    }

}

export default new CurrencyStore();
