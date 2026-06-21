const major = Number(process.versions.node.split('.')[0]);

console.log(`Node ${process.versions.node}`);

if (major >= 18) {
  console.log(`✅ SETUP OK (Node v${major})`);
} else {
  console.warn(`⚠️ Node v${major} detected. Node 18以上で実行してください。`);
  process.exitCode = 1;
}
