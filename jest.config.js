/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  /**
   * ts-jest shows a warning about `esModuleInterop` flag for issues with imports
   * but there aren't issues related to it. This disables it.
   * (Soltuon: https://github.com/kulshekhar/ts-jest/issues/1173#issuecomment-1404142039)
   */
  transform: {
    "^.+\\.(ts)$": [
      "ts-jest",
      {
        diagnostics: {
          ignoreCodes: ["TS151001"]
        }
      }
    ]
  }
};