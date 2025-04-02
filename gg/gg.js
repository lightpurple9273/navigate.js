const tools = {
    setRoundTime(target_sec) {
      const slider = document.querySelector('.styles_rangeslider__8vVg3');
      const handle = slider?.querySelector('.styles_handle__h9ytQ');
    
      if (!slider || !handle) return;
    
      const minValue = parseInt(slider.getAttribute('aria-valuemin'), 10);
      const maxValue = parseInt(slider.getAttribute('aria-valuemax'), 10);
      const sliderRect = slider.getBoundingClientRect();
      const sliderWidth = sliderRect.width;
    
      // Clamp target time within allowed range
      target_sec = Math.max(minValue, Math.min(target_sec, maxValue));
    
      // Calculate target position in pixels
      const targetX = ((target_sec - minValue) / (maxValue - minValue)) * sliderWidth + sliderRect.left;
      const currentX = handle.getBoundingClientRect().left + handle.offsetWidth / 2;
    
      // Create and dispatch mouse events
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
    
      // Simulate drag sequence
      triggerEvent(handle, 'mousedown', currentX);
      triggerEvent(document, 'mousemove', targetX);
      triggerEvent(document, 'mouseup', targetX);
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
