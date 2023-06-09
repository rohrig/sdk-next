// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  transform: {
    '^.+\\.(j|t)s$': 'ts-jest',
  },
  coverageDirectory: './coverage/',
  collectCoverageFrom: ['src/**/*.ts'],
  testMatch: ['<rootDir>/**/__tests__/**/*spec.[jt]s?(x)'],
};
