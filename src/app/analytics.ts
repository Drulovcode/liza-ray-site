export type TrackPayload = Record<string, unknown>;

/**
 * Simple tracking abstraction.
 * Currently logs to console, but can be swapped to GA/Plausible later.
 */
export function track(eventName: string, payload: TrackPayload = {}): void {
  // eslint-disable-next-line no-console
  console.log("[track]", eventName, payload);
}

