import React from "react";

import "./KeyboardButton.css";

export default function KeyboardButton(props) {
    const { letter } = props;

    const handleClick = () => {
        console.log("click");
        props.getInput(letter);
    };

    return (
        <button className="keyboard-button" onClick={handleClick} type="button">
            {letter}
        </button>
    );
}
