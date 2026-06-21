const fs = require('fs');
const path = require('path');
const { check, reveal } = require('../../lib/verify-core');

const EXPECTED_SHA = '54513249e91aecad590defb54970cac1b12912a3366c362ba1f3183d1ccf262b';
const TOKEN_MASK = '35488fff2e213e9292eb6e64';
const required = ['概要', '使い方', '例', '注意'];

if (process.argv.includes('--hint')) {
  console.log('H2(## )で4見出し、語は「概要/使い方/例/注意」');
  process.exit(0);
}

const candidates = [
  path.join(__dirname, 'docs', 'README.md'),
  path.join(__dirname, 'README_OUT.md')
];
const target = candidates.find((p) => fs.existsSync(p));

if (!target) {
  console.error('docs/README.md がありません。spec.md を読んで成果物を作成してください。');
  process.exit(1);
}

const text = fs.readFileSync(target, 'utf8');
const missing = required.filter((heading) => !new RegExp(`^## ${heading}\\s*$`, 'm').test(text));

if (missing.length > 0) {
  console.error('足りないH2見出し: ' + missing.join('、'));
  process.exit(1);
}

const answerKey = required.join('|');

if (!check(answerKey, EXPECTED_SHA)) {
  console.error('検証値が一致しません。verify.jsが壊れていないか確認してください。');
  process.exit(1);
}

console.log('✅ 検証トークン: ' + reveal(answerKey, TOKEN_MASK));
