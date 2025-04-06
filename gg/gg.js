const tools = {
setCheckbox(checkboxSelector, targetStatus, clickTargetSelector) {
  const checkbox = document.querySelector(checkboxSelector);

  if (checkbox) {
    // Get the current status of the checkbox
    const currentStatus = checkbox.checked;

    // Only click if the current status is different from the target status
    if (currentStatus !== targetStatus) {
      //checkbox.click();
      const clickTarget = document.querySelector(clickTargetSelector);
        clickElement(clickTarget);
    }
  } else {
    console.error('Checkbox not found');
  }
},


setSlider(sliderProportion) {
  const slider = document.querySelector('.styles_rangeslider__8vVg3');
  
  const sliderRect = slider.getBoundingClientRect();
  const maxX = sliderRect.right; // Rightmost position
  const minX = sliderRect.left; // Leftmost position
  const targetX = minX + ( maxX - minX ) * sliderProportion

  // Simulate mousedown at the current handle position
  triggerEvent(slider, 'mousedown', targetX, sliderRect.top + sliderRect.height / 2);
  setTimeout(() => {
    console.log("This happens after 100ms");
    triggerEvent(document, 'mouseup', maxX, sliderRect.top + sliderRect.height / 2); // Release the handle
  }, 100); // 100ms delay

  },

  
  // Function to trigger events
  triggerEvent(element, eventType, clientX, clientY) {
    const event = new MouseEvent(eventType, {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: clientX,
      clientY: clientY,
    });
    element.dispatchEvent(event);
    console.log(`Event triggered: ${eventType} at ${clientX}`);
  },

  // Function to simulate clicking on an element
clickElement(element) {
  const rect = element.getBoundingClientRect();
  const clientX = rect.left + rect.width / 2;  // Get the center of the element
  const clientY = rect.top + rect.height / 2;  // Get the center of the element

  // Trigger a click event at the center of the element
  triggerEvent(element, 'mousedown', clientX, clientY);
  //triggerEvent(element, 'mouseup', clientX, clientY);
  //triggerEvent(element, 'click', clientX, clientY);  // Optional: you can dispatch a 'click' event as well
  setTimeout(() => {
    //console.log("This happens after 100ms");
    triggerEvent(document, 'mouseup', clientX, clientY); // Release the handle
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
