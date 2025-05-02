// @input Component.ScriptComponent GorillaPinchButton
// @input Component.ScriptComponent HundredMenPinchButton
// @input Component.ScreenImage GorillaBloodBar
// @input Component.ScreenImage HundredMenBloodBar

// Hide both blood bars initially
if (script.GorillaBloodBar) {
    script.GorillaBloodBar.enabled = false;
}
if (script.HundredMenBloodBar) {
    script.HundredMenBloodBar.enabled = false;
}

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

// Show the winner's blood bar and print the result
function showFightResult(winner) {
    if (script.GorillaBloodBar) {
        script.GorillaBloodBar.enabled = false;
    }
    if (script.HundredMenBloodBar) {
        script.HundredMenBloodBar.enabled = false;
    }
    if (winner === "Gorilla" && script.GorillaBloodBar) {
        script.GorillaBloodBar.enabled = true;
    } else if (winner === "100 Men" && script.HundredMenBloodBar) {
        script.HundredMenBloodBar.enabled = true;
    }
    print("Fight result: " + winner + " wins!");
}

// Randomly pick a winner and show the result
function randomizeFight() {
    var winner = Math.random() < 0.5 ? "Gorilla" : "100 Men";
    showFightResult(winner);
}

/**
 * Sets up a PinchButton to show a blood bar when pressed.
 * @param {Component.ScriptComponent} pinchButtonComponent - The PinchButton's ScriptComponent.
 * @param {string} label - The label for logging.
 */
function setupPinchButton(pinchButtonComponent, label) {
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
        randomizeFight();
    });
}

// Set up both buttons
setupPinchButton(script.GorillaPinchButton, "Gorilla");
setupPinchButton(script.HundredMenPinchButton, "100 Men");
