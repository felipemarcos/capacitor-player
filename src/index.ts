import { registerPlugin } from '@capacitor/core';

import type { PlayerPlugin } from './definitions';

const Player = registerPlugin<PlayerPlugin>('Player', {
  web: () => import('./web').then(m => new m.PlayerWeb()),
});

export * from './definitions';
export { Player };
