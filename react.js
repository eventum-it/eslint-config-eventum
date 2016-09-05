module.exports = {
  extends: ["plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "react",
  ],
  rules: {
    "react/jsx-boolean-value": [
      "error", "never",
    ],
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-curly-spacing": [
      "error", "always",
    ],
    "react/jsx-equals-spacing": [
      "error", "always",
    ],
    "react/jsx-first-prop-new-line": [
      "error", "multiline",
    ],
    "react/jsx-handler-names": "error",
    "react/jsx-indent": [
      "error", 2,
    ],
    "react/jsx-indent-props": [
      "warn", 2,
    ],
    "react/jsx-key": "error",
    "react/jsx-no-bind": "warn",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-wrap-multilines": "error",
    "react/no-danger": "error",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-is-mounted": "error",
    "react/no-multi-comp": "error",
    "react/no-string-refs": "error",
    "react/no-unknown-property": "error",
    "react/prefer-es6-class": "error",
    "react/prefer-stateless-function": "error",
    "react/require-render-return": "error",
    "react/sort-comp": "error",
    "react/self-closing-comp": "error",
  },
}
