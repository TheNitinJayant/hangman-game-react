import React, { Component } from "react";

import "./DisplayBoard.css";

class DisplayBoard extends Component {
    render() {
        const word = this.props.word;

        const letters = word.map((letter, index) => {
            return (
                <h2 key={letter + index} className="display-board-letter">
                    {letter}
                </h2>
            );
        });
        return <div className="display-board-container">{letters}</div>;
    }
}

export default DisplayBoard;
