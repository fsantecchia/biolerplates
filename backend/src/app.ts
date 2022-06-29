import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { errorHandler } from './middleware/errorHandler';
import { fourOhFour } from './middleware/fourOhFour';
import { articlesRouter, ARTICLES_BASE_URL } from './controllers/article/router';
import config from './config';

const app = express();

// Apply middlewares first
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  // @ts-ignore
  origin: config.clientOrigins[config.nodeEnv]
}));
app.use(helmet());
app.use(morgan('tiny'));

// Apply routes before error handling
app.get('/', (request, response) => response.json({ message: 'Welcome!' }));
app.use(ARTICLES_BASE_URL, articlesRouter);

// Apply error handling last
app.use(fourOhFour);
app.use(errorHandler);

export default app;
