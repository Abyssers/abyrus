/**
 * rules: https://eslint.bootcss.com/docs/rules
 */
module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },

    extends: ["eslint:recommended", "plugin:prettier/recommended", "plugin:react/recommended"],
    plugins: ["react"],

    settings: {
        node: {
            tryExtensions: [".js", ".jsx"],
        },
        react: {
            version: "18.2.0",
        },
    },

    parser: "@babel/eslint-parser",
    parserOptions: {
        requireConfigFile: false, // for @babel/eslint-parser
        ecmaVersion: 6,
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: "module",
    },

    rules: {
        "brace-style": ["error", "1tbs", { allowSingleLine: true }],
        "comma-spacing": ["error", { before: false, after: true }],
        "array-bracket-spacing": ["error", "never"],
        "no-constant-condition": "off",
        "no-undef": "warn",
        "no-unused-vars": "warn",
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

        "react/jsx-uses-vars": "error",
        "react/no-unknown-property": [
            "error",
            {
                ignore: ["class", "onclick", "onload", "onsubmit", "crossorigin"],
            },
        ],
        "react/react-in-jsx-scope": ["off"],
        "react/prop-types": ["off"],
        "react/display-name": ["off"],
        "react/jsx-key": ["off"],
        "react/jsx-no-target-blank": [
            "error",
            {
                allowReferrer: true,
            },
        ],
    },
};
