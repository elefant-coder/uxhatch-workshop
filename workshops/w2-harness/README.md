# W2 Harness

価格計算の小さな実装バグを、テストを足場にして直すワークです。

`src/price.js` には2つのバグがあります。

- 消費税が古い税率のままです。
- `"1,200円"` のような金額文字列を正しく数値化できません。

`price.js/test.js` のテスト判定ロジックは編集禁止、`price.js` の実装だけ直してください。作業中は `node test.js`、最後に `node verify.js` を実行します。

Mac:

```bash
cd ~/uxhatch-workshop/workshops/w2-harness
node test.js
node verify.js
```

PowerShell:

```powershell
cd ${HOME}/uxhatch-workshop/workshops/w2-harness
node test.js
node verify.js
```
