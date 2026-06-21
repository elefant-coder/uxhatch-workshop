const path = require('path');
const { spawnSync } = require('child_process');

const serverPath = path.join(__dirname, 'server.js');
const result = spawnSync('codex', ['mcp', 'add', 'uxhatch-w4-secret', '--', 'node', serverPath], {
  stdio: 'inherit'
});

if (result.status === 0) {
  console.log('Codex MCP設定を追加しました。次に codex を起動し、ツール承認でYesを選んでください。');
} else {
  console.error('Codex MCP設定の追加に失敗しました。codex CLIがログイン済みか確認してください。');
  process.exit(result.status || 1);
}
