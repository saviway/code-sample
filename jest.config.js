module.exports = {
  roots: ['<rootDir>/src'],
  globals: {
    "ts-jest": {
      "tsConfig": "tsconfig.json",
      "diagnostics": true
    }
  },
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '/__tests__/.*\\.(ts|tsx|js)$',
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!@foo)"
  ],
  clearMocks: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jsdom',
  // moduleDirectories: ['src', 'node_modules'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
}
