<h1 align="center">Next.js+ microCMS</h1>
<p align="center">
  <img src="https://img.shields.io/badge/-Typescript-00bfff.svg?logo=typescript&style=flat">
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=flat">
  <img src="https://img.shields.io/badge/-Node.js-lightyellow.svg?logo=node.js&style=flat">
  <img src="https://img.shields.io/badge/-TailWind CSS-white.svg?logo=tailwind css&style=flat">
  <img src="https://img.shields.io/badge/-ESLint-4B32C3.svg?logo=eslint&style=flat">
  <img src="https://img.shields.io/badge/-Windows-0078D6.svg?logo=windows&style=flat">
  <img src="https://img.shields.io/badge/-Mac-grey.svg?logo=macos&style=flat">
  <img src="https://img.shields.io/badge/-Linux-black.svg?logo=linux&style=flat">
  <img src="https://img.shields.io/badge/-VSCode-007ACC.svg?logo=visualstudiocode&style=flat">
  <a href="https://twitter.com/NL4boratory" target="_blank">
    <img alt="Twitter: N-LAB" src="https://img.shields.io/twitter/follow/NL4boratory.svg?style=social" />
  </a>
  <a href="https://github.com/N-Laboratory" target="_blank">
    <img src="https://img.shields.io/badge/-FollowMyAccount-grey.svg?logo=github&style=flat">
  </a>
</p>

Next.js App Router と microCMS を使った技術ブログプロジェクトです。  
記事一覧、記事詳細、検索ページを備えたシンプルな構成で、Tailwind CSS を使って UI を実装しています。

## Tech Stack

- Next.js
- React
- TypeScript
- microCMS
- Tailwind CSS
- ESLint

## Features

- microCMS から取得した記事一覧の表示
- 記事詳細ページの表示
- キーワード検索とカテゴリ絞り込み
- sitemap / robots.txt の生成

## Setup

依存パッケージをインストールします。

```bash
npm ci
```

プロジェクトルートに `.env.local` を作成し、microCMS の設定を追加します。

```bash
API_KEY=YOUR_MICROCMS_API_KEY
SERVICE_DOMAIN=YOUR_MICROCMS_SERVICE_DOMAIN
```

## Development

ローカルサーバーを起動します。

```bash
npm run dev
```

起動後、以下の URL で確認できます。

```text
http://localhost:3000
```

## Build

本番ビルドを作成します。

```bash
npm run build
```

## Demo

### 記事一覧

<img src="https://github.com/user-attachments/assets/cc7e2f82-ac28-4e31-a081-8c822cc7c358" width="1000" height="600">

### 記事詳細

<img src="https://github.com/user-attachments/assets/56fdd9b6-8c19-45ca-8949-c51cdc7fcb4d" width="1000" height="600">
