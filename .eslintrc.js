module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  extends: [
    '@react-native-community',
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  rules: {
    "@typescript-eslint/no-use-before-define": ["error", { "variables": false }]
  },
  // "settings": {
  //   "import/resolver": {
  //     "node": {
  //       "moduleDirectory": ["node_modules", "src/"]
  //     }
  //   }
  // }
};
