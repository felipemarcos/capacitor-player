import { WebPlugin } from '@capacitor/core';

import type { PlayerPlugin, VideoPlayerOptions } from './definitions';

export class PlayerWeb extends WebPlugin implements PlayerPlugin {
  // TODO: Implement web version
  play(options: VideoPlayerOptions): Promise<void> {
    const url = options.url;

    const player = document.createElement('video');
    player.setAttribute('id', 'video');
    player.setAttribute('src', url);
    player.setAttribute('controls', 'controls');
    player.setAttribute('autoplay', 'autoplay');

    document.body.appendChild(player);

    player.load();

    return Promise.resolve();
  }
}
