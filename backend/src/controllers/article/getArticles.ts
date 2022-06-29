import { RequestHandler } from 'express';
import axios from 'axios';

import config from '../../config';

export const getArticles: RequestHandler = async (request, response, next) => {
  try {
    const {
      q = 'world',
      page = '1'
    } = request.query;

    const articles = await axios({
      url: config.newsApiUrl,
      method: 'GET',
      params: {
        q,
        page
      }
    });

    response.json(articles.data);
  } catch (error) {
    next(error);
  }
};
