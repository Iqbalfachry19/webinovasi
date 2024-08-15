// store.ts
import {create} from 'zustand';

interface StoreState {
  text:string;
  content: string;
  textAlign: 'left' | 'center' | 'right';
  setText: (content: string) => void;
  setContent: (content: string) => void;
  setTextAlign: (textAlign: 'left' | 'center' | 'right') => void;
}

const useStore = create<StoreState>((set) => ({
  text:"Button",
  content: 'Edit this text...',
  textAlign: 'left',
  setText: (text) => set({ text }),
  setContent: (content) => set({ content }),
  setTextAlign: (textAlign) => set({ textAlign }),
}));

export default useStore;
