# W2 試して直す

価格計算の小さな間違いを、AIに確認しながら直してもらう練習です。

Claude CodeのCodeタブ、またはCodexデスクトップで次の場所を開きます。

```text
uxhatch-workshop/workshops/w2-harness
```

AIにこう頼みます。

```text
src/price.js を直して、node test.js が通るまで確認して。最後に答え合わせして
```

直すのはこの1つだけです。

```text
src/price.js
```

AIが中で実行する内容:

```bash
node test.js
node verify.js
```
