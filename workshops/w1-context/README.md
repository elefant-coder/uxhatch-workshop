# W1 Context

長いログから必要な1行だけを見つけるワークです。AIに `data/ledger.log` を調べさせ、`status=ok` 以外で高額な注文を探してください。

成果物は `work/answer.txt` です。形式は次の1行だけです。

```text
注文ID|金額|店舗
```

Mac:

```bash
cd ~/uxhatch-workshop/workshops/w1-context
node verify.js --hint
node verify.js
```

PowerShell:

```powershell
cd ${HOME}/uxhatch-workshop/workshops/w1-context
node verify.js --hint
node verify.js
```
