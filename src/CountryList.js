import React from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import { observer, inject } from "mobx-react";

const CountryList = inject("CurrencyStore")(
  observer(({ CurrencyStore }) => {
    return (
      <Select
        name="countries"
        value={CurrencyStore.selectedCountry}
        options={CurrencyStore.countries.slice()}
        onChange={selected => CurrencyStore.selectCountry(selected.value)}
      />
    );
  })
);

export default CountryList;
