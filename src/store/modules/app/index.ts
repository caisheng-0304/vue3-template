import { defineStore } from 'pinia';
import piniaStore from '@/store/index';

export const useAppStore = defineStore(
  // 唯一ID
  'app',
  {
    state: () => ({
      
    }),
    getters: {},
    actions: {
      
    },
  },
);

export function useAppOutsideStore() {
  return useAppStore(piniaStore);
}
