# W4 差込口

この教材に入っている小さな道具をAIにつないで、proofを作る練習です。

Claude CodeのCodeタブ、またはCodexデスクトップで次の場所を開きます。

```text
uxhatch-workshop/workshops/w4-mcp
```

AIにこう頼みます。

```text
node mcp-manual.js を実行して、proofを作って。終わったら答え合わせして
```

AIが中で実行する内容:

```bash
node mcp-manual.js
node verify.js
```

## できる人向け

本格接続を試す場合だけ使います。通常の練習では上の流れで進めてください。

Claude Codeでは、出てきた確認画面で次の設定を許可します。

```text
.mcp.json
```

Codexでは、必要に応じて次をAIに実行してもらいます。

```bash
node setup-codex-mcp.js
node cleanup-codex-mcp.js
```
