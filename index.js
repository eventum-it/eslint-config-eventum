module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
    },
    "sourceType": "module",
  },
  "rules": {
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "comma-dangle": [
      "error", "always-multiline",
    ],
    "complexity": "error",
    "consistent-return": "error",
    "dot-location": [
      "error", "property",
    ],
    "dot-notation": "warn",
    "curly": "error",
    "eqeqeq": "error",
    "guard-for-in": "error",
    "indent": [
      "error", 2,
    ],
    "no-alert": "error",
    "no-caller": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-eval": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-multi-str": "error",
    "no-native-reassign": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-proto": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow-restricted-names": "error",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-unmodified-loop-condition": "error",
    "no-use-before-define": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-void": "error",
    "no-with": "error",
    "quotes": [
      "error", "single",
    ],
    "semi": [
      "error", "always",
    ],
    "strict": [
      "error", "global",
    ],
    "valid-jsdoc": "error",
    "wrap-iife": [
      "error", "inside",
    ],
    "yoda": "error",
    "callback-return": "error",
    "brace-style": "error",
    "camelcase": "error",
    "comma-style": "error",
    "comma-spacing": "error",
    "consistent-this": [
      "error", "self",
    ],
    "func-names": "error",
    "func-style": [
      "error",
      "declaration", {
        "allowArrowFunctions": true
      },
    ],
    "max-depth": "error",
    "max-len": [
      "error", {
        "code": 80,
        "tabWidth": 2,
      },
    ],
    "max-lines": "error",
    "max-nested-callbacks": [
      "error", 2,
    ],
    "max-params": "error",
    "max-statements": "error",
    "max-statements-per-line": "error",
    "new-parens": "error",
    "newline-before-return": "error",
    "newline-after-var": "error",
    "newline-per-chained-call": "error",
    "no-array-constructor": "error",
    "no-lonely-if": "error",
    "no-continue": "error",
    "no-multiple-empty-lines": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-spaced-func": "error",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "object-property-newline": [
      "error", {
        "allowMultiplePropertiesPerLine": true
      },
    ],
    "one-var": [
      "error", "never",
    ],
    "operator-linebreak": [
      "error",
      "before", {
        "overrides": {
          "?": "after"
        }
      },
    ],
    "padded-blocks": [
      "error", "never",
    ],
    "quote-props": [
      "error", "as-needed",
    ],
    "space-infix-ops": [
      "error", {
        "int32Hint": true
      },
    ],
    "arrow-spacing": "error",
    "no-duplicate-imports": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    "rest-spread-spacing": [
      "error", "never",
    ],
  },
};
