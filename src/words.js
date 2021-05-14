const Words = ["BROWSER", "ORANGE", "HOST"];

const getRandomWord = () => {
    return Words[Math.floor(Math.random() * Words.length)];
};

export { Words, getRandomWord };
