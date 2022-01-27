/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  setupFiles: ['./testSetUpFile.js'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testMatch: ['**/__tests__/*.+(ts|tsx|js)'],
  roots: ['<rootDir>/routes']
}
