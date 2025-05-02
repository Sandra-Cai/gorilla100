// @input Component.ScriptComponent GorillaPinchButton
// @input Component.ScriptComponent HundredMenPinchButton
// @input Component.ScreenImage GorillaBloodBar
// @input Component.ScreenImage HundredMenBloodBar

// Helper to show the correct blood bar
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

// Add event listeners to Pinch Buttons
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

// Setup both buttons
setupPinchButton(script.GorillaPinchButton, "Gorilla", script.GorillaBloodBar);
setupPinchButton(script.HundredMenPinchButton, "100 Men", script.HundredMenBloodBar);
