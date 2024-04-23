import { create } from 'zustand';

interface PathState {
  nextPath: string;
  setNextPath: (url: string) => void;
}

const pathStore = create<PathState>((set) => ({
  nextPath: '',
  setNextPath: (url) => set(() => ({ nextPath: url })),
}));

export default pathStore;