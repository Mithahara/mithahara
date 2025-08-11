import { writable } from 'svelte/store';

export const theme = writable('dark');
export function toggleTheme() {
  theme.update(t => (t === 'dark' ? 'light' : 'dark'));
}