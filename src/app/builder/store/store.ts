// store.ts
import { create } from 'zustand';

interface StoreState {
  buttonText: string;
  content: string;
  textAlign: 'left' | 'center' | 'right';
  headingText: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  iconType: 'star' | 'home' | 'user'; // Add iconType to store state
  iconSize: number; // Add iconSize to store state
  iconColor: string; // Add iconColor to store state
  setButtonText: (buttonText: string) => void;
  setContent: (content: string) => void;
  setTextAlign: (textAlign: 'left' | 'center' | 'right') => void;
  setHeadingText: (headingText: string) => void;
  setImageSrc: (src: string) => void;
  setImageAlt: (alt: string) => void;
  setImageWidth: (width: number) => void;
  setImageHeight: (height: number) => void;
  setIconType: (iconType: 'star' | 'home' | 'user') => void; // Add setter for iconType
  setIconSize: (size: number) => void; // Add setter for iconSize
  setIconColor: (color: string) => void; // Add setter for iconColor
}

const useStore = create<StoreState>((set) => ({
  buttonText: "Button",
  content: 'Edit this text...',
  textAlign: 'left',
  headingText: 'Heading',
  imageSrc: "https://webinovasi.com/wp-content/plugins/elementor/assets/images/placeholder.png",
  imageAlt: "Image",
  imageWidth: 640,
  imageHeight: 360,
  iconType: 'star',
  iconSize: 24,
  iconColor: 'black',
  setButtonText: (buttonText) => set({ buttonText }),
  setContent: (content) => set({ content }),
  setTextAlign: (textAlign) => set({ textAlign }),
  setHeadingText: (headingText) => set({ headingText }),
  setImageSrc: (src) => set({ imageSrc: src }),
  setImageAlt: (alt) => set({ imageAlt: alt }),
  setImageWidth: (width) => set({ imageWidth: width }),
  setImageHeight: (height) => set({ imageHeight: height }),
  setIconType: (iconType) => set({ iconType }),
  setIconSize: (size) => set({ iconSize: size }),
  setIconColor: (color) => set({ iconColor: color }),
}));

export default useStore;
