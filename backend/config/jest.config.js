export default {
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.js', '.mjs'],
    transform: {
      '^.+\\.m?js$': 'babel-jest',
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!(<module_name>|<another_module>)/)',
    ],
  };