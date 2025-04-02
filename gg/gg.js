const tools = {

    turnDefaultSettingToggleOff() {
        const checkbox = document.querySelector('.toggle_toggle__qfXpL');
          if (checkbox && checkbox.checked) {
                checkbox.checked = false; // Uncheck the checkbox if it's checked
          }
    },
    
    clickChallengeButton(){
        const challengeRadioButton = document.querySelector('[data-qa="game-type-challenge"] input[type="radio"]');
        if (challengeRadioButton) {
            challengeRadioButton.click();
            console.log("Challenge button clicked!");
        } else {
            console.log("Challenge button not found.");
        }
    },

    farewell(name) {
        console.log(`Goodbye, ${name}!`);
    },  
    
    greet(name) {
        console.log(`Hello, ${name}!`);
    }
  
};
