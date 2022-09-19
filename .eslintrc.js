module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: "false",
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    "jsx-quotes": ["warn", "prefer-double"],
    // 'max-len': [
    //   'warn',
    //   {
    //     code: 80,
    //   },
    // ],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "arrow-body-style": "off",
    "no-console": 0,

    allowExpression: "off",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "jsx-a11y/click-events-have-key-events": "off",
  },
};
