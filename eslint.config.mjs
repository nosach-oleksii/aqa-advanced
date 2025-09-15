import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
	{
		files: ["**/*.{js,mjs,cjs}"],
		plugins: { js },
		extends: ["js/recommended"],
		languageOptions: {
			globals: globals.browser,
		},
		rules: {
			semi: ["error", "always"], // Вимагає крапку з комою
			quotes: ["off", "single"], // Одинарні лапки
			"no-console": "off", // Попередження при console.log
			"no-unused-vars": "off", // Попередження при невикористаних змінних
			"prefer-const": "warn", // Вимагати const там, де можливо
			curly: ["error", "all"], // Вимагає фігурні дужки для всіх блоків
			"no-var": "error", // Забороняє використання var
			eqeqeq: ["error", "always"], // Вимагає використання === і !==
			"no-multiple-empty-lines": ["error", { max: 1 }], // Максимум одна порожня лінія
			"comma-dangle": ["warn", "always-multiline"], // Вимагає коми в кінці багаторядкових об'єктів/масивів
			"object-curly-spacing": ["error", "always"], // Вимагає пробіли всередині фігурних дужок
			"array-bracket-spacing": ["error", "never"], // Забороняє пробіли всередині квадратних дужок
			"space-before-blocks": ["error", "always"], // Вимагає пробіл перед фігурними дужками
			"keyword-spacing": ["error", { before: true, after: true }], // Вимагає пробіли навколо ключових слів
			"arrow-body-style": ["warn", "always"], // Вимагає скорочений синтаксис для стрілкових функцій
			"consistent-return": "error", // Вимагає, щоб функції завжди повертали значення або ніколи не повертали
			"no-else-return": "warn", // Забороняє else після return
			"no-lonely-if": "error", // Забороняє if як єдиний блок в else
			"prefer-destructuring": ["warn", { object: true, array: false }], // Вимагає деструктуризацію для об'єктів
		},
	},
]);
