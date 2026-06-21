# UX-HATCH AI Agent Workshop

90分研修で使う、参加者が手元にcloneして進めるワークrepoです。Node 18以上だけで動きます。`npm install` は不要です。

## 事前確認

Mac:

```bash
git clone <repo-url> ~/uxhatch-workshop
cd ~/uxhatch-workshop
node check-setup.js
cd warmup
node verify.js
```

PowerShell:

```powershell
git clone <repo-url> ${HOME}/uxhatch-workshop
cd ${HOME}/uxhatch-workshop
node check-setup.js
cd warmup
node verify.js
```

AIエージェントを終了するときは `/exit` を使います。

## ワーク一覧

| ワーク | 入口 | ゴール |
|---|---|---|
| Warmup | `warmup/` | Node実行環境を確認し、最初の検証を通す |
| W1 Context | `workshops/w1-context/` | 大きめのログから異常な注文を見つけ、`work/answer.txt` に書く |
| W2 Harness | `workshops/w2-harness/` | テストを足場にして価格計算の実装バグを直す |
| W3 Skill | `workshops/w3-skill/` | スキル/手順書を読ませて、指定順に金庫の手がかりを組み立てる |
| W4 MCP | `workshops/w4-mcp/` | MCPツールを接続してproofを生成し、検証を通す |
| W5 Goal Loop | `workshops/w5-goal-loop/` | 完了条件をAIに渡し、検証が通るREADMEを生成する |

各ワークでは対象ディレクトリへ移動して `node verify.js` を実行します。困ったら `node verify.js --hint` で構造ヒントだけ確認できます。
