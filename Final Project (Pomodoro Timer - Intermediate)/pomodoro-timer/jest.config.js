export const testEnvironment = 'jsdom';
export const transform = {
    '^.+\.jsx?$': 'babel-jest',
};
export const moduleNameMapper = {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\.(css|less|scss|sass)$': 'identity-obj-proxy'
};
export const setupFilesAfterEnv = ['<rootDir>/jest.setup.js'];