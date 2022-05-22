# capacitor-player

Native Video Player for Capacitor. Play videos from URLs in fullscreen mode.

## Install

```bash
npm install capacitor-player
npx cap sync
```

## Example
```js
import { Player } from 'capacitor-player';

await Player.play({
    url: 'https://example.com/video.mp4'
});
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`play(...)`](#play)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### play(...)

```typescript
play(options: VideoPlayerOptions) => Promise<void>
```

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code><a href="#videoplayeroptions">VideoPlayerOptions</a></code> |

--------------------


### Interfaces


#### VideoPlayerOptions

| Prop      | Type                | Description                  |
| --------- | ------------------- | ---------------------------- |
| **`url`** | <code>string</code> | The url of the video to play |

</docgen-api>
