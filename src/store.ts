import { writable } from 'svelte/store';

const previous = writable<string>('');
const current = writable<string>('');
const operation = writable<string>('');
const overwrite = writable<boolean>(false);

export const useStore = () => ({
  previous,
  current,
  operation,
  overwrite
})