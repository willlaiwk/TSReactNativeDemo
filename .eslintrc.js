module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    '@react-native-community'
  ],
  rules: {
    "comma-dangle": ["error", "never"]
  }
};
