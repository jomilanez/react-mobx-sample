import React from "react";
import { observer, inject } from "mobx-react";

const CurrencyValue = inject("CurrencyStore")(
  observer(({ CurrencyStore }) => {
    return <span>Conversion: {CurrencyStore.currencyValue} </span>;
  })
);

export default CurrencyValue;
