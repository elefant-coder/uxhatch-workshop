const fs = require('fs');
const path = require('path');
const { check, reveal } = require('../../lib/verify-core');

const EXPECTED_SHA = '92bfd77e126c4d4d5d1cfe08acb4b857fd4692490b4142a2bfe80faf8c7fd48b';
const TOKEN_MASK = 'c04a8728033e2812';

if (process.argv.includes('--hint')) {
  console.log('AIにMCPツール get_secret_token を呼ばせて .mcp-proof を作成し、その後 node verify.js を実行してください。');
  process.exit(0);
}

const proofPath = path.join(__dirname, '.mcp-proof');

if (!fs.existsSync(proofPath)) {
  console.error('AIにMCPツール get_secret_token を呼ばせて .mcp-proof を作成してください。');
  process.exit(1);
}

let answerKey;
try {
  answerKey = Buffer.from(fs.readFileSync(proofPath, 'utf8').trim(), 'base64').toString('utf8');
} catch {
  console.error('.mcp-proof を読み取れません。MCPツールを呼び直してください。');
  process.exit(1);
}

if (!check(answerKey, EXPECTED_SHA)) {
  console.error('.mcp-proof が正しくありません。偽proofでは検証できません。MCPツールを呼び直してください。');
  process.exit(1);
}

console.log('✅ 検証トークン: ' + reveal(answerKey, TOKEN_MASK));
