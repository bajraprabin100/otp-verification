/// <reference types="vite/client" />

/// <reference types="vite-plugin-svgr/client" />
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_APP_FIREBASE_API_KEY: string
  readonly VITE_APP_FIREBASE_AUTH_DOMAIN: string
  readonly VITE_APP_FIREBASE_PROJECT_ID: string
  readonly VITE_APP_FIREBASE_STORAGE_BUCKET: string
  readonly VITE_APP_FIREBASE_MESSAGING_SENDER_ID: string
  readonly VITE_APP_FIREBASE_MESSAGING_APP_ID: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
