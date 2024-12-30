module.exports = {
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '\\.png$': '<rootDir>/__mocks__/fileMock.js', // Usamos un mock para archivos .png
    },
    setupFiles: ['<rootDir>/jest.setup.js'],
};