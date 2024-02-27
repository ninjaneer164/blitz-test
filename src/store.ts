import { proxy, useSnapshot } from 'valtio';

export interface Store {
  headshotRate: number;
}

export const store = proxy<Store>({
  headshotRate: 0.24421341234234,
});

export const actions = {
  setHeadshotRate(value: number) {
    store.headshotRate = value;
  },
};

export function useHeadshotRate() {
  return useSnapshot(store).headshotRate;
}
