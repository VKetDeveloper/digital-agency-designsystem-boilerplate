

# 🌸 Digital Agency Design System Boilerplate

**デジタル庁デザインシステムをベースにした Next.js + Tailwind CSS + Mantine UI 開発用ボイラープレート**

このリポジトリは、[@digital-go-jp/design-tokens](https://www.npmjs.com/package/@digital-go-jp/design-tokens) と  
[@digital-go-jp/tailwind-theme-plugin](https://www.npmjs.com/package/@digital-go-jp/tailwind-theme-plugin) を統合し、  
政府デザインシステム準拠の UI を素早く構築できるよう設計されています。


[サンプル集](https://design.vrugd.jp/)

---

## 🚀 環境情報

| ツール | バージョン |
|--------|-------------|
| [Next.js](https://nextjs.org/) | 15.5.6 |
| [React](https://react.dev/) | 19.2.0 |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1.14 |
| [Mantine UI](https://mantine.dev/) | 8.3.5 |
| [TypeScript](https://www.typescriptlang.org/) | ^5 |
| [Bun](https://bun.sh/) | 1.3.0 |
| Node.js | v24 以降（Bun 同梱推奨） |

---

## 🧭 セットアップ

### 1️⃣ 依存関係のインストール

```bash
bun install
````

### 2️⃣ 開発サーバーの起動

```bash
bun run dev
```

ブラウザで以下にアクセス：

👉 [http://localhost:3000](http://localhost:3000)

---

## 🧱 ビルド & デプロイ

### ビルド

```bash
bun run build
```

### 本番起動

```bash
bun run start
```

Next.js の **Turbopack** を利用して高速ビルド・起動が可能です。

---

## 🎨 スタイルガイド

### Tailwind + デジタル庁テーマ

Tailwind 設定は `@digital-go-jp/tailwind-theme-plugin` により拡張されています。
プロジェクトの `tailwind.config.js` に次のように設定されています：

```js
import themePlugin from "@digital-go-jp/tailwind-theme-plugin";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [themePlugin],
};
```

これにより、デジタル庁デザインシステム準拠のカラーパレット・フォント・UIルールを自動的に反映します。

---

## 🧩 主な依存パッケージ

| パッケージ                                                             | 用途                           |
| ----------------------------------------------------------------- | ---------------------------- |
| `@digital-go-jp/design-tokens`                                    | デジタル庁デザインシステムのトークン群（色・タイポなど） |
| `@digital-go-jp/tailwind-theme-plugin`                            | Tailwind 用テーマプラグイン           |
| `@mantine/core` / `@mantine/hooks`                                | React UI コンポーネントフレームワーク      |
| `@fontsource-variable/noto-sans-jp` / `@fontsource/noto-serif-jp` | 日本語フォント                      |
| `@holiday-jp/holiday_jp`                                          | 日本の祝日判定ユーティリティ               |
| `jp-zipcode-lookup`                                               | 郵便番号から住所を取得                  |
| `@next/third-parties`                                             | Next.js 公式サードパーティ統合          |
| `@netlify/open-api`                                               | Netlify API 操作用              |

---

## 🔧 開発補助コマンド

| コマンド            | 内容                  |
| --------------- | ------------------- |
| `bun run dev`   | 開発サーバー起動（Turbopack） |
| `bun run build` | 本番ビルド               |
| `bun run start` | 本番サーバー起動            |
| `bun run lint`  | ESLint 実行           |

---

## 🧠 Lint / 型定義

* ESLint + `eslint-config-next` によるコード品質チェック
* TypeScript による型安全な開発
* PostCSS + Autoprefixer による自動ベンダープレフィックス付与

---

## 🧩 PostCSS プラグイン構成

使用中の PostCSS プラグイン：

* `@tailwindcss/postcss`
* `postcss-import`
* `postcss-simple-vars`
* `postcss-preset-mantine`
* `autoprefixer`

---

## 🪄 フォント設定例

```tsx
import "@fontsource-variable/noto-sans-jp";
import "@fontsource/noto-serif-jp";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

---

## 🧑‍💻 貢献ガイド

1. 新しいブランチを作成

   ```bash
   git checkout -b feature/your-feature
   ```
2. コード修正後に Lint チェック

   ```bash
   bun run lint
   ```
3. Pull Request を作成

---

## 📄 ライセンス

このプロジェクトは MIT ライセンスで公開されています。


> 💡 **Tips:**
> VS Code の警告「Unknown at rule @plugin」は Tailwind CSS IntelliSense 拡張をインストールすると解消します。
> もしくは `.vscode/settings.json` に以下を追加してください：
>
> ```json
> { "css.lint.unknownAtRules": "ignore" }
> ```


