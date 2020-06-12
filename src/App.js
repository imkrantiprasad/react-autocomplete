import React, { Component } from "react";
import Autocomplete from "./Autocomplete";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Autocomplete
          suggestions={["Ahmad Faraz",
            "Faiz Ahmad Faiz",
            "Rahat Indori",
            "Jaun Elia",
            "Tehzeeb Hafi",
            "Mirza Ghalib",
            "Gulzar",
            "Javed Akhtar",
            "Ada Jafri",
            "Firaq Gorakhpuri",
            "Sahil Ludhianvi",
            "Bashir Badr",
            "Majrooh Sultanpuri"]}
        />
      </div>
    );
  }
}

export default App;