export interface PlayerPlugin {
  play(options: VideoPlayerOptions): Promise<void>;
}

export interface VideoPlayerOptions {
  /**
   * The url of the video to play
   */
  url: string;
}
