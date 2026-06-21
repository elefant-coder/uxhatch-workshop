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
| Warmup | `warmup` | 最初の動作確認 |
| W1 | `workshops/w1-context` | 長い記録から1件見つける |
| W2 | `workshops/w2-harness` | 価格計算を試して直す |
| W3 | `workshops/w3-skill` | 手順レシピで金庫を開ける |
| W4 | `workshops/w4-mcp` | 同梱の道具をつなぐ |
| W5 | `workshops/w5-goal-loop` | 完成条件を渡して最後まで直す |

困ったときは、AIに次も頼めます。

```bash
node verify.js --hint
```
