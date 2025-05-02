"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multiplayer_1 = require("./multiplayer");
const vrManager_1 = require("./vrManager");
const multiplayer = new multiplayer_1.MultiplayerManager();
const vrManager = new vrManager_1.VRManager(multiplayer);
function onLensStart() {
    multiplayer.connect();
    vrManager.init();
}
onLensStart();
