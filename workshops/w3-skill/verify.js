const fs = require('fs');
const path = require('path');
const { check, reveal } = require('../../lib/verify-core');

const EXPECTED_SHA = '0e727f5e9a73bcb236c7a533ffcdd696cc4cba4921e2dfae793a6a2b71c4e383';
const TOKEN_MASK = 'a3824a99afe0a04ad9767589';

if (process.argv.includes('--hint')) {
  console.log('順番は C→A→B、ハイフン区切り、余白なし');
  process.exit(0);
}

const answerPath = path.join(__dirname, 'answer.txt');

if (!fs.existsSync(answerPath)) {
  console.error('answer.txt がありません。手順書どおりに3つの手がかりを連結してください。');
  process.exit(1);
}

const raw = fs.readFileSync(answerPath, 'utf8');

if (raw !== raw.trim()) {
  console.error('answer.txt に前後空白や改行が含まれています。余白なしの1行にしてください。');
  process.exit(1);
}

const answerKey = raw;

if (!check(answerKey, EXPECTED_SHA)) {
  console.error('正解ではありません。C→A→Bの順番、ハイフン区切り、余白なしを確認してください。');
  process.exit(1);
}

console.log('✅ 検証トークン: ' + reveal(answerKey, TOKEN_MASK));
