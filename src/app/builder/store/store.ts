// store.ts
import {create} from 'zustand';

interface StoreState {
  content: string;
  textAlign: 'left' | 'center' | 'right';
  setContent: (content: string) => void;
  setTextAlign: (textAlign: 'left' | 'center' | 'right') => void;
}

const useStore = create<StoreState>((set) => ({
  content: 'Edit this text...',
  textAlign: 'left',
  setContent: (content) => set({ content }),
  setTextAlign: (textAlign) => set({ textAlign }),
}));

export default useStore;
