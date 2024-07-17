export default {
  "preset": "ts-jest",
  "testEnvironment": "jsdom",
  "setupFilesAfterEnv": [
    "<rootDir>/jest.setup.ts"
  ],
  "moduleNameMapper": {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest"
  },
  "transformIgnorePatterns": [
    "node_modules/(?!@tanstack/react-query|mui-one-time-password-input)"
  ],
  "globals": {
    "ts-jest": {
      "tsconfig": "tsconfig.json",
      "isolatedModules": true
    }
  }
};
  