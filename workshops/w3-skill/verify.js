const fs = require('fs');
const path = require('path');
const { check, reveal } = require('../../lib/verify-core');

const EXPECTED_SHA = '0e727f5e9a73bcb236c7a533ffcdd696cc4cba4921e2dfae793a6a2b71c4e383';
const TOKEN_MASK = 'a3824a99cfe8d92a';
const answerKey = 'OPEN-GEAR-LOCK';

if (process.argv.includes('--hint')) {
  console.log('まず自分でスキルを作り、順番は C→A→B、ハイフン区切り、余白なし');
  process.exit(0);
}

const skillCandidates = [
  path.join(__dirname, '.claude', 'skills', 'vault-unlock', 'SKILL.md'),
  path.join(__dirname, 'AGENTS.md'),
];
const answerPath = path.join(__dirname, 'answer.txt');

function hasParticipantSkill(filePath) {
  if (!fs.existsSync(filePath)) {
    return false;
  }

  const stat = fs.statSync(filePath);
  if (!stat.isFile()) {
    return false;
  }

  return fs.readFileSync(filePath, 'utf8').trim().length > 0;
}

if (!skillCandidates.some(hasParticipantSkill)) {
  console.error('まず自分でスキル(.claude/skills/vault-unlock/SKILL.md)を作ってください。手順はワークアプリにあります');
  process.exit(1);
}

if (!fs.existsSync(answerPath)) {
  console.error('answer.txt がありません。手順書どおりに3つの手がかりを連結してください。');
  process.exit(1);
}

const raw = fs.readFileSync(answerPath, 'utf8');

if (raw !== raw.trim()) {
  console.error('answer.txt に前後空白や改行が含まれています。余白なしの1行にしてください。');
  process.exit(1);
}

if (!check(raw, EXPECTED_SHA) || raw !== answerKey) {
  console.error('正解ではありません。C→A→Bの順番、ハイフン区切り、余白なしを確認してください。');
  process.exit(1);
}

console.log('✅ 検証トークン: ' + reveal(answerKey, TOKEN_MASK));
