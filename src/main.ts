import { MultiplayerManager } from './multiplayer';
import { VRManager } from './vrManager';

const multiplayer = new MultiplayerManager();
const vrManager = new VRManager(multiplayer);

function onLensStart() {
  multiplayer.connect();
  vrManager.init();
}

onLensStart();
