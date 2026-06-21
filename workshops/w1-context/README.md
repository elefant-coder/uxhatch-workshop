# W1 広い視界

長い記録の中から、いつもと違う高額な1行を見つける練習です。

Claude CodeのCodeタブ、またはCodexデスクトップで次の場所を開きます。

```text
uxhatch-workshop/workshops/w1-context
```

AIにこう頼みます。

```text
data/ledger.log を読んで、status=ok 以外で金額が大きい注文を探し、work/answer.txt に 注文ID|金額|店舗 の1行で書いて
```

書く形:

```text
注文ID|金額|店舗
```

できたら、AIにこう頼みます。

```text
答え合わせして
```

AIが中で実行する内容:

```bash
node verify.js
```
