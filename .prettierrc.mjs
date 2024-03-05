/** @type {import("prettier").Config} */
export default {
  bracketSpacing: true,
  bracketSameLine: true,
  semi: true,
  trailingComma: "all",
  printWidth: 120,
  tabWidth: 2,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
