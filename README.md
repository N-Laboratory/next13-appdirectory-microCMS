<h1 align="center">Nrxt 13 + app directory + microCMS</h1>
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

Next 13 + app directory + microCMS + TailWind CSS

このプロジェクトでは以下の機能を実装しています。
* microCMSに投稿した記事の一覧取得
* microCMSに投稿した記事の検索
* microCMSに投稿した記事の詳細取得


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
* 記事一覧
<img src="https://user-images.githubusercontent.com/42198184/236676267-6985a216-7d7c-4913-a617-f3bfca127521.gif">

* 記事検索
<img src="https://user-images.githubusercontent.com/42198184/236676291-4a529a3d-127e-4015-99aa-0c63d154b650.gif">

* 記事詳細
<img src="https://user-images.githubusercontent.com/42198184/236676293-1c76f008-88d0-44db-a0a7-3ecfbcf05dc2.gif">