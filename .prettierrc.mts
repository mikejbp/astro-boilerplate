/** @type {import('prettier').Config} */
module.exports = {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  singleQuote: true,
  semi: true,
  trailingComma: "none",
  printWidth: 120,
  tabWidth: 2,
};
