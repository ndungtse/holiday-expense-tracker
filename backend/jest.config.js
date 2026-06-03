module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  //   change the testMatch to match your test files allow files from src/__tests__ and src/tests
  testMatch: ["<rootDir>/src/__tests__/**/*.test.ts"],
};
