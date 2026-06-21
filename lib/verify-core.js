const crypto = require('crypto');

function ks(seed, len) {
  let o = Buffer.alloc(0);
  let i = 0;
  while (o.length < len) {
    o = Buffer.concat([o, crypto.createHash('sha256').update(seed + ':' + i).digest()]);
    i++;
  }
  return o.slice(0, len);
}

function sha(s) {
  return crypto.createHash('sha256').update(s).digest('hex');
}

function check(answerKey, EXPECTED_SHA) {
  return sha(answerKey) === EXPECTED_SHA;
}

function reveal(answerKey, maskHex) {
  const m = Buffer.from(maskHex, 'hex');
  const k = ks(answerKey, m.length);
  return Buffer.from(m.map((b, i) => b ^ k[i])).toString('utf8');
}

module.exports = { ks, sha, check, reveal };
