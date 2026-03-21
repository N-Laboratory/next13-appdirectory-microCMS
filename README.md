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

Next.jsの学習用としてこのプロジェクトを作成しました。プロジェクトの構成としては以下になります。

Next.js + directory + microCMS + TailWind CSS

このプロジェクトでは以下の機能を実装しています。
* microCMSに投稿した記事の検索
* microCMSに投稿した記事のカテゴリ絞り込み
* microCMSに投稿した記事の内容取得


## Usage

パッケージのインストール。
```bash
npm ci
```

プロジェクトのルート配下に「.env.local」を新規作成して、以下を追加します。
```bash
# microCMSのAPIキーを記載します
API_KEY=XXXXXXXXXXXXXXXXXX
# microCMSのサービス名を記載します
SERVICE_DOMAIN=hoge
```

ローカルサーバーの起動。
```bash
npm run dev
```
サーバー起動後は以下のURLより、アプリの動作確認が可能です。

http://localhost:3000


## Demo
* 記事検索

<img src="https://github.com/user-attachments/assets/cc7e2f82-ac28-4e31-a081-8c822cc7c358" width="1000" height="600">

* 記事閲覧

<img src="https://github.com/user-attachments/assets/56fdd9b6-8c19-45ca-8949-c51cdc7fcb4d" width="1000" height="600">