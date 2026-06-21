# W3 手順レシピ

隠れた手がかりを、決まった手順どおりに組み立てる練習です。

Claude CodeのCodeタブ、またはCodexデスクトップで次の場所を開きます。

```text
uxhatch-workshop/workshops/w3-skill
```

AIへの入口が少し違います。Claude Codeなら「金庫を開けて」、Codexなら「AGENTS.md を読んでその手順でやって」と頼んでください。

Claude Codeで送る文:

```text
金庫を開けて
```

Codexで送る文:

```text
AGENTS.md を読んでその手順でやって
```

できたら、AIにこう頼みます。

```text
答え合わせして
```

AIが中で実行する内容:

```bash
node verify.js
```
