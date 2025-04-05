const tools = {

setSlider(sliderProportion) {
  const slider = document.querySelector('.styles_rangeslider__8vVg3');
  
  const sliderRect = slider.getBoundingClientRect();
  const maxX = sliderRect.right; // Rightmost position
  const minX = sliderRect.left; // Leftmost position
  const targetX = minX + ( maxX - minX ) * sliderProportion

  // Function to trigger events
  function triggerEvent(element, eventType, clientX, clientY) {
    const event = new MouseEvent(eventType, {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: clientX,
      clientY: clientY,
    });
    element.dispatchEvent(event);
    console.log(`Event triggered: ${eventType} at ${clientX}`);
  }

  // Simulate mousedown at the current handle position
  triggerEvent(slider, 'mousedown', targetX, sliderRect.top + sliderRect.height / 2);
  setTimeout(() => {
    console.log("This happens after 100ms");
    triggerEvent(document, 'mouseup', maxX, sliderRect.top + sliderRect.height / 2); // Release the handle
  }, 100); // 100ms delay

  },


    turnDefaultSettingToggleOff() {
        const checkbox = document.querySelector('.toggle_toggle__qfXpL');
          if (checkbox && checkbox.checked) {
            checkbox.click(); // Simulate a user click to toggle it off
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

    greetFullname(firstname,lastname){
    console.log(`Hello, ${firstName} ${lastName}!`);
    },
    
    greet(name) {
        console.log(`Hello, ${name}!`);
    }
  
};
