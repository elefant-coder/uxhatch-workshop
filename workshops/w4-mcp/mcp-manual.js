const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const serverPath = path.join(__dirname, 'server.js');
const srv = spawn(process.execPath, [serverPath], { stdio: ['pipe', 'pipe', 'inherit'] });
let buf = '';

srv.stdout.setEncoding('utf8');
srv.stdout.on('data', (d) => {
  buf += d;
  let i;
  while ((i = buf.indexOf('\n')) >= 0) {
    const line = buf.slice(0, i).trim();
    buf = buf.slice(i + 1);
    if (line) console.log('受信 <= ' + line);
  }
});

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function send(obj) {
  const line = JSON.stringify(obj);
  console.log('送信 => ' + line);
  srv.stdin.write(line + '\n');
}

(async () => {
  send({
    jsonrpc: '2.0',
    id: 1,
    method: 'initialize',
    params: {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: { name: 'manual', version: '0' }
    }
  });
  await wait(300);

  send({ jsonrpc: '2.0', method: 'notifications/initialized' });
  await wait(200);

  send({ jsonrpc: '2.0', id: 2, method: 'tools/list' });
  await wait(300);

  send({
    jsonrpc: '2.0',
    id: 3,
    method: 'tools/call',
    params: { name: 'get_secret_token', arguments: {} }
  });
  await wait(400);

  srv.kill();

  const proofPath = path.join(__dirname, '.mcp-proof');
  if (fs.existsSync(proofPath)) {
    console.log('proofファイルを確認しました。');
  } else {
    console.log('proofファイルが見つかりません。');
  }
  console.log('node verify.js を実行してください');
})();
