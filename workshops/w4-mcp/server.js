const fs = require('fs');
const path = require('path');

let buf = '';
process.stdin.setEncoding('utf8');

process.stdin.on('data', (d) => {
  buf += d;
  let i;
  while ((i = buf.indexOf('\n')) >= 0) {
    const line = buf.slice(0, i).trim();
    buf = buf.slice(i + 1);
    if (line) handle(line);
  }
});

function send(obj) {
  process.stdout.write(JSON.stringify(obj) + '\n');
}

function restoreAnswerKey() {
  const masked = [0x17,0x19,0x0a,0x77,0x08,0x15,0x0f,0x14,0x1e,0x0e,0x08,0x13,0x0a,0x77,0x15,0x11];
  return Buffer.from(masked.map((b) => b ^ 0x5A)).toString('utf8');
}

function writeProof() {
  const answerKey = restoreAnswerKey();
  const proofPath = path.join(__dirname, '.mcp-proof');
  fs.writeFileSync(proofPath, Buffer.from(answerKey, 'utf8').toString('base64'));
}

function handle(line) {
  let msg;
  try {
    msg = JSON.parse(line);
  } catch {
    return;
  }

  const { id, method } = msg;

  if (method === 'initialize') {
    send({
      jsonrpc: '2.0',
      id,
      result: {
        protocolVersion: '2024-11-05',
        capabilities: { tools: {} },
        serverInfo: { name: 'uxh-secret', version: '1.0.0' }
      }
    });
  } else if (method === 'notifications/initialized') {
    return;
  } else if (method === 'tools/list') {
    send({
      jsonrpc: '2.0',
      id,
      result: {
        tools: [{
          name: 'get_secret_token',
          description: '研修のproofを生成します',
          inputSchema: { type: 'object', properties: {}, required: [] }
        }]
      }
    });
  } else if (method === 'tools/call') {
    const name = msg.params && msg.params.name;
    if (name === 'get_secret_token') {
      writeProof();
      send({
        jsonrpc: '2.0',
        id,
        result: {
          content: [{
            type: 'text',
            text: 'proofを .mcp-proof に書き込みました。平文の検証トークンは node verify.js で表示します。'
          }]
        }
      });
    } else {
      send({ jsonrpc: '2.0', id, error: { code: -32601, message: 'unknown tool' } });
    }
  } else if (id !== undefined) {
    send({ jsonrpc: '2.0', id, error: { code: -32601, message: 'method not found' } });
  }
}
