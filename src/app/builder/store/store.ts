// store.ts
import {create} from 'zustand';

interface StoreState {
  buttonText:string;
  content: string;
  textAlign: 'left' | 'center' | 'right';
  headingText:string;
  setButtonText: (buttonText: string) => void;
  setContent: (content: string) => void;
  setTextAlign: (textAlign: 'left' | 'center' | 'right') => void;
  setHeadingText: (headingText:string) =>void;
}

const useStore = create<StoreState>((set) => ({
  buttonText:"Button",
  content: 'Edit this text...',
  textAlign: 'left',
  headingText: 'Heading',
  setButtonText: (buttonText) => set({ buttonText }),
  setContent: (content) => set({ content }),
  setTextAlign: (textAlign) => set({ textAlign }),
  setHeadingText:(headingText) => set({headingText})
}));

export default useStore;
