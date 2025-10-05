// src/types/global.d.ts
declare global {
    interface Document {
      startViewTransition?: (
        callback: () => void
      ) => {
        ready: Promise<void>;
      };
    }
  }
  
  export {};
  