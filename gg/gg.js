const tools = {

moveSliderMaxSlowly() {
  const slider = document.querySelector('.styles_rangeslider__8vVg3');
  const handle = slider?.querySelector('.styles_handle__h9ytQ');

  if (!slider || !handle) {
    console.error("Slider or handle not found!");
    return;
  }

  const sliderRect = slider.getBoundingClientRect();
  const maxX = sliderRect.right; // Rightmost position
  const currentX = handle.getBoundingClientRect().left + handle.offsetWidth / 2;

  console.log("Current X:", currentX);
  console.log("Max X (rightmost position):", maxX);

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
  triggerEvent(handle, 'mousedown', currentX, sliderRect.top + sliderRect.height / 2);

  // Slowly move the handle (1px per 100ms)
  let currentPos = currentX;
  const step = 1; // Move 1px per step
  const interval = 100; // 100ms per step

  // Function to simulate the dragging
  function moveStep() {
    if (currentPos >= maxX) {
      triggerEvent(document, 'mouseup', currentPos, sliderRect.top + sliderRect.height / 2); // Release the handle
      return;
    }

    currentPos += step;
    triggerEvent(document, 'mousemove', currentPos, sliderRect.top + sliderRect.height / 2);

    // Manually update the slider handle's position by adjusting its style
    handle.style.left = `${currentPos - sliderRect.left}px`; // Set the handle position manually

    setTimeout(moveStep, interval); // Call moveStep every 100ms
  }

  moveStep(); // Start the movement
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
