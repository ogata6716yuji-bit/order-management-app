# ORDER MGR - PWA セットアップガイド

## フォルダ構成
```
ordermgr/
├── index.html      ← メインアプリ
├── manifest.json   ← PWA設定
├── sw.js           ← Service Worker（オフライン対応）
├── icon-72.png
├── icon-96.png
├── icon-128.png
├── icon-144.png
├── icon-152.png
├── icon-192.png
├── icon-384.png
└── icon-512.png
```

---

## インストール方法

### ① Webサーバーに置く場合（推奨）
PWAはHTTPSサーバーまたはlocalhostでのみ完全動作します。

**無料で簡単な方法：**
- [GitHub Pages](https://pages.github.com/) にフォルダをアップロード（無料・HTTPS自動）
- [Netlify](https://netlify.com/) にフォルダをドラッグ＆ドロップ（無料・即時）
- 自社サーバーの `/var/www/html/ordermgr/` に配置

アップロード後、ChromeでURLを開き、アドレスバー右の「📲 ホーム画面に追加」またはヘッダーの「📲 Install」ボタンをタップ。

---

### ② ローカルサーバーを使う場合
PC に Python があれば：
```bash
cd ordermgr
python3 -m http.server 8080
```
→ スマホと同じWi-Fiで `http://PCのIPアドレス:8080` にアクセス

---

### Android Chrome でのインストール手順
1. Chrome でアプリのURLを開く
2. 右上メニュー（⋮）→「ホーム画面に追加」
3. 「追加」をタップ
4. ホーム画面に ORDER MGR アイコンが追加される

または、アプリ上部に「📲 Install」ボタンが表示されたらタップ。

---

### iOS Safari でのインストール手順
1. Safari でアプリのURLを開く
2. 下部の共有ボタン（□↑）をタップ
3. 「ホーム画面に追加」→「追加」

---

### Windows / Mac Chrome でのインストール手順
1. Chrome でアプリのURLを開く
2. アドレスバー右端の「⊕」アイコンをクリック
3. 「インストール」をクリック

---

## データについて
- すべてのデータはブラウザのlocalStorageに保存されます
- ブラウザのデータを消去するとデータも消えます
- 定期的に入店履歴のバックアップを推奨します（将来のエクスポート機能追加可）

## オフライン動作
- 一度読み込んだ後はネットワーク不要で動作します
- Service Workerがファイルをキャッシュします
