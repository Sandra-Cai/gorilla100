// @input Component.ScriptComponent GorillaPinchButton
// @input Component.ScriptComponent HundredMenPinchButton
// @input Component.ScreenImage GorillaBloodBar
// @input Component.ScreenImage HundredMenBloodBar

/**
 * Shows the selected blood bar and hides the other.
 * @param {Component.ScreenImage} selectedBar - The blood bar to show.
 * @param {string} label - The label for logging.
 */
function showBloodBar(selectedBar, label) {
    if (script.GorillaBloodBar) {
        script.GorillaBloodBar.enabled = false;
    }
    if (script.HundredMenBloodBar) {
        script.HundredMenBloodBar.enabled = false;
    }
    if (selectedBar) {
        selectedBar.enabled = true;
        print(label + " blood bar shown");
    }
}

/**
 * Sets up a PinchButton to show a blood bar when pressed.
 * @param {Component.ScriptComponent} pinchButtonComponent - The PinchButton's ScriptComponent.
 * @param {string} label - The label for logging.
 * @param {Component.ScreenImage} bloodBar - The blood bar to show.
 */
function setupPinchButton(pinchButtonComponent, label, bloodBar) {
    if (!pinchButtonComponent) {
        print(label + " PinchButton is missing!");
        return;
    }
    var pinchButton = pinchButtonComponent.api.pinchButton;
    if (!pinchButton) {
        print(label + " PinchButton API is missing!");
        return;
    }
    pinchButton.onButtonPinched.add(function() {
        print(label + " button pressed");
        showBloodBar(bloodBar, label);
    });
}

// Set up both buttons
setupPinchButton(script.GorillaPinchButton, "Gorilla", script.GorillaBloodBar);
setupPinchButton(script.HundredMenPinchButton, "100 Men", script.HundredMenBloodBar);
