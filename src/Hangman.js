import React, { Component } from "react";
import DisplayBoard from "./Components/DisplayBoard";
import Header from "./Components/Header";
import Input from "./Components/Input";

import { getRandomWord } from "./words";

import Man from "./Components/Man";
import GameOver from "./Components/GameOver";
import Winner from "./Components/Winner";

import "./Hangman.css";

const emptySpace = "___";
const MAX_WRONG = 6;

class Hangman extends Component {
    constructor(props) {
        super(props);

        this.state = {
            word: getRandomWord(),
            guessedWord: new Set(),
            wrongGuesses: 0,
            isGameOver: false,
            isWinner: false,
        };

        this.getInput = this.getInput.bind(this);
        this.getGuessedWord = this.getGuessedWord.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    componentDidMount() {
        console.log("word is", this.state.word);
    }

    getInput(letter) {
        let newWrongGuesses =
            this.state.wrongGuesses +
            (this.state.word.includes(letter) ? 0 : 1);
        this.setState((state) => ({
            guessedWord: state.guessedWord.add(letter),
            wrongGuesses: newWrongGuesses,
            isWinner: this.getGuessedWord().join("") === state.word,
            isGameOver: newWrongGuesses > MAX_WRONG - 1 ? true : false,
        }));
    }

    getGuessedWord() {
        let answer = this.state.word;

        let answerArray = answer.split("").map((letter) => {
            return this.state.guessedWord.has(letter) ? letter : emptySpace;
        });

        return answerArray;
    }

    resetGame() {
        this.setState({
            word: getRandomWord(),
            wrongGuesses: 0,
            guessedWord: new Set(),
            isGameOver: false,
            isWinner: false,
        });
    }

    render() {
        const game = (
            <div className="game">
                <DisplayBoard word={this.getGuessedWord()} />
                <Input getInput={this.getInput} />
            </div>
        );

        const winnerORLoser = this.state.isWinner ? (
            <Winner reset={this.resetGame} />
        ) : this.state.isGameOver ? (
            <GameOver word={this.state.word} reset={this.resetGame} />
        ) : (
            game
        );

        return (
            <div className="hangman-container">
                <Header attempts={MAX_WRONG - this.state.wrongGuesses} />
                <Man wrongGuesses={this.state.wrongGuesses} />
                {winnerORLoser}
            </div>
        );
    }
}

export default Hangman;
