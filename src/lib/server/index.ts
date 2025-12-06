/**
 * Server-side services and utilities
 * These run only on the server and handle external API calls
 */

export { default as serverAxios } from "./axios";
export { spotifyServerService } from "./spotify.service";

// Re-export types
export type { NowPlayingData } from "./spotify.service";
