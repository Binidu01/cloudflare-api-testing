import fs from 'fs';
import path from 'path';

const apiDir = path.resolve('dist/api');
const workerDir = path.resolve('functions');

if (!fs.existsSync(workerDir)) fs.mkdirSync(workerDir, { recursive: true });

fs.readdirSync(apiDir).forEach(file => {
  if (!file.endsWith('.js')) return;

  const routeName = path.basename(file, '.js');
  const workerFile = path.join(workerDir, `${routeName}.js`);

  const content = `import handler from '../../dist/api/${file}';

export async function onRequest(context) {
  return handler(context);
}
`;

  fs.writeFileSync(workerFile, content);
  console.log(`Created worker wrapper: ${workerFile}`);
});
