const fs = require('fs');
const path = require('path');
const { check, reveal } = require('../../lib/verify-core');

const EXPECTED_SHA = '298b4e8145924bcdbcf07e77335f4ba61715bb1727f5bd5dfeb09af9ecb7197d';
const TOKEN_MASK = 'cd3c16eee7801580bdf37d47';

if (process.argv.includes('--hint')) {
  console.log('探すのは status=ok 以外の高額行。answer.txtに 注文ID|金額|店舗 を書く');
  process.exit(0);
}

const answerPath = path.join(__dirname, 'work', 'answer.txt');

if (!fs.existsSync(answerPath)) {
  console.error('work/answer.txt がありません。注文ID|金額|店舗 の形式で1行を書いてください。');
  process.exit(1);
}

const answerKey = fs.readFileSync(answerPath, 'utf8').trim();
const parts = answerKey.split('|');
const missing = [];

if (parts.length !== 3) {
  missing.push('区切りは | で、注文ID・金額・店舗の3要素にしてください');
} else {
  const [orderId, amount, store] = parts;
  if (!/^ORD-\d+$/.test(orderId)) missing.push('注文ID');
  if (!/^\d+$/.test(amount)) missing.push('金額');
  if (!/^OS\d{2}$/.test(store)) missing.push('店舗');
}

if (missing.length > 0) {
  console.error('形式が不足しています: ' + missing.join('、'));
  process.exit(1);
}

if (!check(answerKey, EXPECTED_SHA)) {
  console.error('正解ではありません。status=ok 以外で、金額が大きい行の 注文ID|金額|店舗 を確認してください。');
  process.exit(1);
}

console.log('✅ 検証トークン: ' + reveal(answerKey, TOKEN_MASK));
