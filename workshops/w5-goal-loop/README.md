# W5 Goal Loop

ゴールを明確にして、AIに完了まで直させるワークです。

AIに次のように依頼してください。

```text
spec.mdを読んで docs/README.md を作成し、node verify.js が合格するまで直して
```

成果物は `docs/README.md` です。生成後に検証します。

Mac:

```bash
cd ~/uxhatch-workshop/workshops/w5-goal-loop
node verify.js --hint
node verify.js
```

PowerShell:

```powershell
cd ${HOME}/uxhatch-workshop/workshops/w5-goal-loop
node verify.js --hint
node verify.js
```
