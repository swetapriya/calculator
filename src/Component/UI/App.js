import React from "react";
import Display from './Display';
import ButtonChart from './ButtonChart';
import calculate from "../Logics/Calculate";

import "./css/App.css"

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <hr/>
        <ButtonChart clickHandler={this.handleClick} />
      </div>
    );
  }
}
