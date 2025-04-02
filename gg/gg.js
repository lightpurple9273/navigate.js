const tools = {
    greet(name) {
        console.log(`Hello, ${name}!`);
    },
    farewell(name) {
        console.log(`Goodbye, ${name}!`);
    },  
    ClickChallengeButton(){
        const challengeRadioButton = document.querySelector('[data-qa="game-type-challenge"] input[type="radio"]');
        if (challengeRadioButton) {
            challengeRadioButton.click();
            console.log("Challenge button clicked!");
        } else {
            console.log("Challenge button not found.");
        }
    }
  
};
