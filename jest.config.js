module.exports = {
  preset: 'ts-jest',
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],
  transform: {
      "^.+\\.(js|ts)$": "ts-jest",
  },
  transformIgnorePatterns: [`/node_modules/(?!(sip\.js))`] // Keep `sip.js` to get transpiled as well
};