import React from "react";
import "./App.css";
import AutoCompleteComponent from './AutoCompleteComponent';
import writers from './writers'

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <div className="App-component">

          <AutoCompleteComponent items={writers} />
        </div>
      </div>
    );
  }
}

export default App;