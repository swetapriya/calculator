import React from "react";

import "./css/Button.css";

const Button=({name,clickHandler,orangered,wide})=>  {
    const handleClick = () => {
        clickHandler(name);
    };

    const className = [
        "component-button",
        orangered ? "orangered" : "white",
        wide ? "wide" : "",
    ];

    return (
        <div className={className.join(" ").trim()}>
            <button onClick={handleClick}>{name}</button>
        </div>
    );
}

export default Button;
