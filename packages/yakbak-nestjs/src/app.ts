import * as express from 'express';
import * as yakbak from 'yakbak';
import { YakbakConfig } from './config';

type YakbakHandler = (req: express.Request, res: express.Response) => void;

export const config = new YakbakConfig();
export const sessionMap = new Map<string, YakbakHandler>();

function getActiveTapeHandler() {
  const { tape: key } = config;
  if (!sessionMap.has(key)) {
    const handler = yakbak('https://jsonplaceholder.typicode.com', { dirname: config.getPath() });
    sessionMap.set(key, handler);
  }
  return sessionMap.get(key);
}

export function createYakbakApp(initialConfig: Partial<YakbakConfig> = {}) {
  Object.assign(config, initialConfig);
  const app = express();
  app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    getActiveTapeHandler()(req, res);
  });
  return app;
}
