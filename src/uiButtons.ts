// @input Component.ScreenImage GorillaButton
// @input Component.ScreenImage HundredMenButton

// Helper function to add touch event
function addButtonListener(button: Component.ScreenImage, label: string) {
    if (!button || !button.getComponent("Component.TouchComponent")) {
        print(`Button or TouchComponent missing for ${label}`);
        return;
    }
    const touchComponent = button.getComponent("Component.TouchComponent");
    touchComponent.onTouchStart.add(function() {
        print(`${label} button pressed`);
        // Add your logic here for what happens when the button is pressed
    });
}

// Add listeners to both buttons
addButtonListener(script.GorillaButton, "Gorilla");
addButtonListener(script.HundredMenButton, "100 Men");
