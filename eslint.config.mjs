import { fixupPluginRules } from "@eslint/compat";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [".next", "node_modules", "build", ".output"],
  },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      "plugin:@next/next/recommended",
      "plugin:react-hooks/recommended",
    ],
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
);