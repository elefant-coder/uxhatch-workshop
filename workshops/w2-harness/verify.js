const assert = require('assert');
const { check, reveal } = require('../../lib/verify-core');
const { calcTotal, parseAmount } = require('./src/price');

const EXPECTED_SHA = 'bdcf14c3ba7fa9581deb08a27205049d3e1db87a6446930a767853eaa2134bf5';
const TOKEN_MASK = '0322fad2ba4ae5534664b910';

if (process.argv.includes('--hint')) {
  console.log('8%→10%。カンマと"円"を除去してparseInt。');
  process.exit(0);
}

const actual = [
  parseAmount('1,200円'),
  parseAmount('32,100円'),
  calcTotal([
    { amount: '1,200円', quantity: 2 },
    { amount: '300円', quantity: 1 }
  ]),
  calcTotal([
    { amount: 500, quantity: 1 },
    { amount: '2,000円', quantity: 2 }
  ])
];

const expected = [1200, 32100, 2970, 4950];

try {
  assert.deepStrictEqual(actual, expected);
} catch {
  console.error('価格計算がまだ正しくありません。parseAmountと税込10%計算を確認してください。');
  process.exit(1);
}

const answerKey = actual.join('|');

if (!check(answerKey, EXPECTED_SHA)) {
  console.error('検証値が一致しません。verify.jsではなく src/price.js の実装を確認してください。');
  process.exit(1);
}

console.log('✅ 検証トークン: ' + reveal(answerKey, TOKEN_MASK));
