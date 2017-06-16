import React, {Component} from "react";
import "./App.css";
import CountryList from "./CountryList";
import CurrencyValue from "./CurrencyValue";

class App extends Component {

  render() {
    return (
      <div className="App">
        <CountryList />
        <CurrencyValue />
      </div>
    );
  }
}

export default App;
