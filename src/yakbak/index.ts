import * as express from 'express';
import * as yakbak from 'yakbak';

const app = express();

const proxy = yakbak('https://jsonplaceholder.typicode.com', {
  dirname: __dirname + '/tapes',
});

app.use(proxy);

export default app;
