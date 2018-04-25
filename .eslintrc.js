module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended"
  ],
  overrides: [
    {
      files: "test/**/*.js",
      env: {
        "webdriverio/wdio": true,
        mocha: true
      },
      plugins: [
        "webdriverio"
      ]
    }
  ],
  root: true,
  rules: {
    "eqeqeq": "error",
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "no-console": "warn",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    "quotes": ["error", "single"],
    "semi": ["error", "always"]
  }
};
