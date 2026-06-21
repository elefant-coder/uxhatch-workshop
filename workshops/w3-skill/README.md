# W3 Skill

自分でSkillを作り、そのSkillを使って隠れた手がかりを組み立てる練習です。

Claude CodeのCodeタブ、またはCodexデスクトップで次の場所を開きます。

```text
uxhatch-workshop/workshops/w3-skill
```

## 作るSkillのレシピ

作るSkillには、次の手順を書いてください。

1. `vault/clue_c.txt` を読む
2. `vault/clue_a.txt` を読む
3. `vault/clue_b.txt` を読む
4. 3つの中身をハイフン `-` で連結する
5. `answer.txt` に1行で書く

順番は必ず C → A → B です。正しい形式は `OPEN-GEAR-LOCK` のように、前後空白や末尾改行なしの1行です。

## Claude Codeで作る場合

次のファイルを作ります。

```text
.claude/skills/vault-unlock/SKILL.md
```

中身には上のレシピを書きます。作ったら、Claude Codeで次のように頼みます。

```text
/vault-unlock
```

## Codexで作る場合

次のファイルを作ります。

```text
AGENTS.md
```

中身には上のレシピを書きます。作ったら、Codexで次のように頼みます。

```text
AGENTS.md に書いた手順で実行して
```

## 答え合わせ

`answer.txt` ができたら、AIにこう頼みます。

```text
答え合わせして
```

AIが中で実行する内容:

```bash
node verify.js
```
