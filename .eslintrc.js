module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  root: true,
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "airbnb",
        "airbnb-typescript",
        "prettier",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: "tsconfig.json",
        sourceType: "module",
      },
      rules: {
        "import/prefer-default-export": "off",
        quotes: ["error", "double"],
        "class-methods-use-this": "off",
        "global-require": 0,
        "newline-before-return": "error",
        "@typescript-eslint/no-var-requires": 0,
        "import/no-import-module-exports": "off",
        "padding-line-between-statements": [
          "error",
          { blankLine: "always", prev: "var", next: "return" },
        ],
      },
    },
  ],
};
