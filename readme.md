# AtCoder Universal Color

## 概要

AtCoder と AtCoder Problems の水色、緑色、茶色を、特に緑色と茶色の区別がつくように変更する Google Chrome の拡張機能です。あくまで作者自身の色認識によるものなので、色覚異常の程度によっては改善しない可能性があります。

## 機能

AtCoder のユーザ名と、パフォーマンスやレーティングの数字の色が変更されます（色ごとのレーティング 100 刻みにおいて、どの位置にいるかを表す上向き矢印は未対応です）。また、AtCoder Problems の問題名の diff の色、Difficulty Circle の色も変更されます（ただし、Difficulty Circle はページの読み込み後、書き換えをするので 1 秒程度待つ必要があります）。

## インストール方法

1. [こちら](https://github.com/gj5752/AtCoder-Universal-Color/releases) からこのリポジトリの最新（Latest）の zip ファイル（Assets の中の Source code）をダウンロードして適当な場所に展開します
2. chrome://extensions または Chrome のアドレスバーの横にある拡張機能ボタンから「拡張機能を管理」にアクセスします
3. 右上の「デベロッパーモード」を ON にします
4. 出てきた「パッケージ化されていない拡張機能を読み込む」ボタンを押し、さっき展開したフォルダの src フォルダを選択します
5. [AtCoder](https://atcoder.jp/home) または [AtCoder Problems](https://kenkoooo.com/atcoder) にアクセスします
6. 色が変わっています

## 参考

Qiita に解説記事を載せています。

https://qiita.com/gj_5752/items/ccd7ab668cf3c48685cf

## 更新点

2025/03/11

-   v1.0 リリース

2025/03/12

-   v1.1 リリース
-   `getElementsByClassName("table-problem")` の待機を `null` から `length > 0` に変更
-   Readme を加筆

2025/06/08

-   v1.2 リリース
-   難易度丸にマウスオーバーしたとき、難易度値のポップアップ表示がされない問題を修正
    -   難易度丸の色変更を `innerHTML` を使って行っていたのを、属性値の書き換えに変更し、イベントリスナーを保持
