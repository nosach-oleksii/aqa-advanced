import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.test.js"], // Тільки для тестових файлів
        languageOptions: {
            globals: { ...globals.jest }, // Додає знання про глобали test, expect, describe, beforeEach, afterAll тощо
        },
    },
    { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
]);
