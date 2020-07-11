import Button from "./Button";
import React from "react";

import "./css/ButtonChart.css";

const ButtonChart = ({clickHandler}) => {

  const handleClick = buttonName => {
    clickHandler(buttonName);
  };

    return (
      <div className="component-button-panel">
        <div>
          <Button name="AC" clickHandler={handleClick} orangered/>
          <Button name="+/-" clickHandler={handleClick} orangered/>
          <Button name="%" clickHandler={handleClick} orangered/>
          <Button name="÷" clickHandler={handleClick} orangered />
        </div>
        <div>
          <Button name="7" clickHandler={handleClick} white/>
          <Button name="8" clickHandler={handleClick} white/>
          <Button name="9" clickHandler={handleClick} white/>
          <Button name="x" clickHandler={handleClick} orangered />
        </div>
        <div>
          <Button name="4" clickHandler={handleClick} white/>
          <Button name="5" clickHandler={handleClick} white/>
          <Button name="6" clickHandler={handleClick} white/>
          <Button name="-" clickHandler={handleClick} orangered />
        </div>
        <div>
          <Button name="1" clickHandler={handleClick} white/>
          <Button name="2" clickHandler={handleClick} white/>
          <Button name="3" clickHandler={handleClick} white/>
          <Button name="+" clickHandler={handleClick} orangered />
        </div>
        <div>
          <Button name="0" clickHandler={handleClick} white wide />
          <Button name="." clickHandler={handleClick} orangered/>
          <Button name="=" clickHandler={handleClick} orangered />
        </div>
      </div>
    );
  }

  export default ButtonChart;
