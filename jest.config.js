module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '/__tests__/.*\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jsdom',
  moduleDirectories: ['src', 'node_modules'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
}
