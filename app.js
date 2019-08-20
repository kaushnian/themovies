import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 5000;

app.use(express.static(`${__dirname}/client/build/`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
