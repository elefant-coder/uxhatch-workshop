const { check, reveal } = require('../lib/verify-core');

const EXPECTED_SHA = 'c973733603df03d26fb0d6ee94105ce902dac25f4127de802b8c7a051bdb7da6';
const TOKEN_MASK = 'db3a6abe25927ed9bfc30fb3';

if (process.argv.includes('--hint')) {
  console.log('Nodeでこのファイルを実行できれば成功です。');
  process.exit(0);
}

const answerKey = ['WARMUP', 'READY'].join('-');

if (!check(answerKey, EXPECTED_SHA)) {
  console.error('セットアップ検証に失敗しました。ファイルが壊れていないか確認してください。');
  process.exit(1);
}

console.log('✅ 検証トークン: ' + reveal(answerKey, TOKEN_MASK));
