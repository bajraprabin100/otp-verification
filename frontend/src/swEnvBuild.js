// src/swEnvBuild.js

import fs from 'fs';

// This dotenv is the one used inside React.
// Load dotenv Intentionally because build process does not have access to .env file yet.
import dotenv from 'dotenv';
dotenv.config();
const {
    ...env
} = process.env;

const content = `const swEnv = {
    }`;

fs.writeFileSync("./public/swEnv.js", content);
