const tools = {
moveSliderMax() {
  const slider = document.querySelector('.styles_rangeslider__8vVg3');
  const handle = slider?.querySelector('.styles_handle__h9ytQ');

  if (!slider || !handle) {
    console.error("Slider or handle not found!");
    return;
  }

  const sliderRect = slider.getBoundingClientRect();
  const maxX = sliderRect.right; // Rightmost position
  const currentX = handle.getBoundingClientRect().left + handle.offsetWidth / 2;

  function triggerEvent(element, eventType, clientX) {
    const event = new MouseEvent(eventType, {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: clientX,
      clientY: sliderRect.top + sliderRect.height / 2,
    });
    element.dispatchEvent(event);
  }

  // Simulate mouse interaction
  triggerEvent(handle, 'mousedown', currentX);
  triggerEvent(document, 'mousemove', maxX);
  triggerEvent(document, 'mouseup', maxX);
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
