module.exports = {
  root: true,
  extends: ['@demo-chat/eslint-config'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
