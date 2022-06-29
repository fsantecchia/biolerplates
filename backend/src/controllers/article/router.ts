import express from 'express';
import { getArticles } from './getArticles';

export const ARTICLES_BASE_URL = '/articles';
export const articlesRouter = express.Router();

// GET articles/
articlesRouter.get('/', getArticles);
