# W4 MCP

MCPツールをAIエージェントへ接続し、`get_secret_token` を呼ばせて `.mcp-proof` を作るワークです。MCP接続が難しい場合は、最後のフォールバックでJSON-RPC往復を手動体験できます。

## Claude Code経路

Mac:

```bash
cd ~/uxhatch-workshop/workshops/w4-mcp
claude
```

PowerShell:

```powershell
cd ${HOME}/uxhatch-workshop/workshops/w4-mcp
claude
```

初回は `.mcp.json` のMCP接続を承認します。Claude Code内で `/mcp` を確認し、外側のターミナルでも次を確認できます。

```bash
claude mcp list
```

AIに「MCPツール `get_secret_token` を呼んで」と依頼し、終了後に `node verify.js` を実行します。

## Codex経路

Mac:

```bash
cd ~/uxhatch-workshop/workshops/w4-mcp
node setup-codex-mcp.js
codex
```

PowerShell:

```powershell
cd ${HOME}/uxhatch-workshop/workshops/w4-mcp
node setup-codex-mcp.js
codex
```

Codex起動後、ツール承認でYesを選び、AIに「MCPツール `get_secret_token` を呼んで」と依頼します。完了したら `/exit` で終了し、次を実行します。

```bash
node verify.js
node cleanup-codex-mcp.js
```

## フォールバック

MCP接続で詰まった場合だけ使います。これはMCP接続体験ではなく、JSON-RPC体験の救済です。

```bash
node mcp-manual.js
node verify.js
```
