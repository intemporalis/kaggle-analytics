/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CHANNELS_URL: string,
    readonly VITE_CHANNEL_URL: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }