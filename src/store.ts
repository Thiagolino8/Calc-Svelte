import { writable } from 'svelte/store';

const previous = writable('');
const current = writable('');
const operation = writable('');
const overwrite = writable(false);

export const useStore = {
  previous,
  current,
  operation,
  overwrite
}