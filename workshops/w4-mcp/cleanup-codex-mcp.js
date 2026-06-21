const { spawnSync } = require('child_process');

const result = spawnSync('codex', ['mcp', 'remove', 'uxhatch-w4-secret'], {
  stdio: 'inherit'
});

if (result.status === 0) {
  console.log('Codex MCP設定を削除しました。');
} else {
  console.error('Codex MCP設定の削除に失敗しました。設定が残っていないか確認してください。');
  process.exit(result.status || 1);
}
