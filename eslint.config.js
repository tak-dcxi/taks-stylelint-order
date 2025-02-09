import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      strict: ["error", "global"],
      "no-unused-vars": "warn",
      "no-console": "off",
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  },
];
