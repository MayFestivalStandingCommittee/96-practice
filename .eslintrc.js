const prettierrc = require("./.prettierrc.json");
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended"
  ],
  plugins: ["prettier", "vue"],
  // add your custom rules here
  rules: {
    // prettier一般ルール
    "prettier/prettier": ["error", prettierrc],
    // vscodeのlinterとの競合解決
    //
    "vue/singleline-html-element-content-newline": "off",
    //関数定義の前にスペースを開ける
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always"
      }
    ],
    "arrow-parens": ["error", "as-needed"],
    // 開発時には許容される
    // FIXME この2つはバンドル時に取り除く
    "no-console": "off",
    "no-debugger": "off",
    // 変数が使用されているかのチェックについては、通常はtsのルールを優先する
    // 型変数も含めて使用しているかチェック可能
    "no-unused-vars": "off",
    // 再帰的な定義だと達成不可能な上、実行時に全く影響がないため
    "no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": "error",
    // typescriptは、継承先クラスでsuper()呼び出しを強制するので、super呼び出しだけするコンストラクタを許容する
    "no-useless-constructor": "off",
    // インデントについては、通常はtsのルールを優先する
    indent: "off",
    "@typescript-eslint/indent": ["error", 2],
    "vue/html-indent": [
      "error",
      type,
      {
        attribute: 1,
        baseIndent: 0,
        closeBracket: 0,
        alignAttributesVertically: false,
        ignore: []
      }
    ],
    // async関数でawaitを必ずしも要求しない(ただただpromiseにしたい場合があるため)
    "require-await": "off",
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 2,
        multiline: 1
      }
    ],
    // _hideEmptySection_みたいな「アンダースコア同士にキャメルケースが挟まれているもの」が変換されてしまう
    "vue/attribute-hyphenation": ["off"],
    "vue/custom-event-name-casing": ["off"],
    "vue/multi-word-component-names": ["off"],
    "vue/no-useless-template-attributes": ["off"],
    "vue/require-v-for-key": ["off"],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "always"
      }
    ],
    "vue/html-self-closing": [
      "error",
      {
        svg: "any"
      }
    ],
    "keyword-spacing": 2,
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never"
      }
    ]
  },
  overrides: [
    // vueファイルにprettierは効かせない
    // タグの改行が強制的に挿入されるため
    {
      files: ["*.vue"],
      rules: {
        "prettier/prettier": "off",
        // スコープの外の変数の書き換えを許容する（composition apiで、refやreactiveをmethodsから書き換えられるようにするため）
        "no-return-assign": "off",
        "vue/custom-event-name-casing": ["off"]
      }
    },
    // tsファイルにおいてeslintのインデント検知は効かせない
    // genericsに関するインデントをeslintは適切に処理できないので、prettierにまかせる
    {
      files: ["*.ts"],
      rules: {
        "@typescript-eslint/indent": "off"
      }
    }
  ]
};
