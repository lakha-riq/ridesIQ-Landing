import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
      // Handle unused variables more gracefully
      "no-unused-vars": ["warn", {
        "varsIgnorePattern": "^(_|global|__dirname|__turbopack_refresh__|React)",
        "argsIgnorePattern": "^(_|error)",
        "ignoreRestSiblings": true
      }],
      // TypeScript specific unused vars rule
      "@typescript-eslint/no-unused-vars": ["warn", {
        "varsIgnorePattern": "^(_|global|__dirname|__turbopack_refresh__|React)",
        "argsIgnorePattern": "^(_|error)",
        "ignoreRestSiblings": true
      }],
      // Allow unused expressions in build files
      "@typescript-eslint/no-unused-expressions": ["error", {
        "allowShortCircuit": true,
        "allowTernary": true,
        "allowTaggedTemplates": true
      }]
    },
  }),
  // Ignore build and generated files
  {
    ignores: [
      ".next/**/*",
      "out/**/*",
      "build/**/*",
      "dist/**/*",
      "node_modules/**/*",
      "*.config.js",
      "*.config.ts"
    ]
  }
];

export default eslintConfig;