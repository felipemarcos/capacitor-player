export interface PlayerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
