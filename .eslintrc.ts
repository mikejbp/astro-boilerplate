module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  extends: ["plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        singleQuote: true,
        semi: true,
        trailingComma: "none",
        printWidth: 120,
        tabWidth: 2,
      },
    ],
  },
  overrides: [
    {
      files: "*.ts",
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      parserOptions: {
        project: "tsconfig.json",
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended",
      ],
      rules: {
        "no-plusplus": "off",
        "no-underscore-dangle": "off",
        "import/prefer-default-export": "off",
        "prettier/prettier": [
          "warn",
          {
            singleQuote: true,
            semi: true,
            trailingComma: "none",
            printWidth: 120,
            tabWidth: 2,
          },
        ],
      },
    },
  ],
};
