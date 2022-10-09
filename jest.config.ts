export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],

  testMatch: ["<rootDir>/__tests__/**/?(*.)+(spec|test).[jt]s?(x)"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  modulePaths: ["./"],
  collectCoverageFrom: ["**/*.{ts,tsx}"],
  coveragePathIgnorePatterns: ["/.next/", "/__tests__/", ".d.ts"]
};
