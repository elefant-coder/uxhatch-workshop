const assert = require('assert');
const { calcTotal, parseAmount } = require('./src/price');

assert.strictEqual(parseAmount('1,200円'), 1200);
assert.strictEqual(parseAmount('980円'), 980);
assert.strictEqual(parseAmount('12,345円'), 12345);
assert.strictEqual(parseAmount(450), 450);

assert.strictEqual(calcTotal([
  { amount: '1,200円', quantity: 2 },
  { amount: '300円', quantity: 1 }
]), 2970);

assert.strictEqual(calcTotal([
  { amount: 500, quantity: 1 },
  { amount: '2,000円', quantity: 2 }
]), 4950);

console.log('✅ tests passed');
