import { writable } from 'svelte/store';

/** Store to track the currently active scene */
export const activeScene = writable('');