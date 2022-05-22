import { WebPlugin } from '@capacitor/core';

import type { PlayerPlugin } from './definitions';

export class PlayerWeb extends WebPlugin implements PlayerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
