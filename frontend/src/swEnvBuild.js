// src/swEnvBuild.js

import fs from 'fs';

// This dotenv is the one used inside React.
// Load dotenv Intentionally because build process does not have access to .env file yet.
import dotenv from 'dotenv';
dotenv.config();
const {
    VITE_APP_FIREBASE_API_KEY,
    VITE_APP_FIREBASE_AUTH_DOMAIN,
    VITE_APP_FIREBASE_PROJECT_ID,
    VITE_APP_FIREBASE_STORAGE_BUCKET,
    VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
    VITE_APP_FIREBASE_MESSAGING_APP_ID,
    ...env
} = process.env;

const content = `const swEnv = {
    VITE_APP_FIREBASE_API_KEY: '${VITE_APP_FIREBASE_API_KEY}',
    VITE_APP_FIREBASE_AUTH_DOMAIN: '${VITE_APP_FIREBASE_AUTH_DOMAIN}',
    VITE_APP_FIREBASE_PROJECT_ID: '${VITE_APP_FIREBASE_PROJECT_ID}',
    VITE_APP_FIREBASE_STORAGE_BUCKET: '${VITE_APP_FIREBASE_STORAGE_BUCKET}',
    VITE_APP_FIREBASE_MESSAGING_SENDER_ID: '${VITE_APP_FIREBASE_MESSAGING_SENDER_ID}',
    VITE_APP_FIREBASE_MESSAGING_APP_ID: '${VITE_APP_FIREBASE_MESSAGING_APP_ID}',
 }`;

fs.writeFileSync("./public/swEnv.js", content);
