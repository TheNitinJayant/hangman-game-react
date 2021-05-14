import React, { Component } from "react";

import "./Winner.css";

export default class Winner extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }} className="winner">
                <h1>Congratulations!!! you Win</h1>
                <button
                    onClick={() => {
                        this.props.reset();
                    }}
                    className="reset-button"
                >
                    Reset
                </button>
            </div>
        );
    }
}
