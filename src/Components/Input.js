import React, { Component } from "react";
import Keyboard from "./Keyboard";

class Input extends Component {
    render() {
        return (
            <div className="input-container">
                <Keyboard getInput={this.props.getInput} />
            </div>
        );
    }
}

export default Input;
