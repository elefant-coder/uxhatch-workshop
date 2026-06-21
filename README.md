# UX-HATCH AI Workshop

AIに教材フォルダを開いてもらい、お願いしながら進める練習です。参加者は文字を打つ画面を開かなくて大丈夫です。答え合わせもAIに頼みます。

## はじめに

Claude Codeを使う人は、ClaudeデスクトップアプリのCodeタブで教材フォルダを開きます。Codexを使う人は、Codexデスクトップで教材フォルダを開きます。

答え合わせにはNode.jsが必要です。まだ入っていない場合は、公式サイトから安定版を入れてください。

https://nodejs.org

## 教材フォルダを入れる

おすすめはGitHubのDownload ZIPです。Gitは不要です。

1. https://github.com/elefant-coder/uxhatch-workshop を開く
2. 緑のCodeボタンを押す
3. Download ZIPを選ぶ
4. 開いたフォルダ名が `uxhatch-workshop-main` になっていたら `uxhatch-workshop` に変える

Gitを使える人向け:

```bash
git clone https://github.com/elefant-coder/uxhatch-workshop.git ~/uxhatch-workshop
```

## 進め方

デスクトップアプリで、それぞれの開く場所を選びます。AIに作業をお願いし、最後に次のように頼みます。

```text
答え合わせして
```

AIが中で実行する内容:

```bash
node verify.js
```

うまくいくと合言葉が表示されます。

## 開く場所

| 順番 | 開く場所 | やること |
|---|---|---|
| ウォームアップ | `warmup` | 最初の動作確認 |
| ステップ1 ハーネス | `workshops/w2-harness` | 価格計算を試して直るまで直す |
| ステップ2 Skill | `workshops/w3-skill` | 「金庫を開ける」スキルを自分で作って使う |
| ステップ3 MCP | （フォルダなし） | Claude デスクトップの「Customize→コネクタ」で Google カレンダー等を接続して使う |
| ステップ4 ゴール設定とLoop | `workshops/w5-goal-loop` | 完了条件を渡して合格まで反復させる |

※「コンテキスト」はスライドで口頭解説のみ（ワークなし）。「MCP」はデスクトップアプリで本物のコネクタをつなぐ体験（教材フォルダ不要）。

困ったときは、AIに次も頼めます。

```bash
node verify.js --hint
```
