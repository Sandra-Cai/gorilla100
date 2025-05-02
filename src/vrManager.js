"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VRManager = void 0;
class VRManager {
    constructor(multiplayer) {
        this.multiplayer = multiplayer;
    }
    init() {
        // Set up VR/AR scene, objects, and event listeners
        print('Initializing VR scene...');
        this.multiplayer.onPlayerStateReceived(this.updateOtherPlayer);
    }
    updateOtherPlayer(state) {
        // Update the scene with other player's state
    }
    updateMyState(state) {
        this.multiplayer.sendPlayerState(state);
    }
}
exports.VRManager = VRManager;

// Minimal type declarations for Lens Studio
declare var script: any;
declare namespace Component {
    interface ScreenImage {
        getComponent(name: string): any;
    }
}

// @input Component.ScreenImage GorillaButton
// @input Component.ScreenImage HundredMenButton

function addButtonListener(button, label) {
    if (!button) {
        print(label + " button is missing!");
        return;
    }
    var touchComponent = button.getComponent("Component.TouchComponent");
    if (!touchComponent) {
        print("TouchComponent missing for " + label);
        return;
    }
    touchComponent.onTouchStart.add(function () {
        print(label + " button pressed");
        // TODO: Add your custom logic here, e.g.:
        // global.behaviorSystem.sendCustomTrigger(label + "ButtonPressed");
    });
}

addButtonListener(script.GorillaButton, "Gorilla");
addButtonListener(script.HundredMenButton, "100 Men");
