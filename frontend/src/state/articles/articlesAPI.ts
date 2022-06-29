import axios from 'axios'

import { Types } from '../../types/app';

type Response = Types.Article[];

export const fetchArticles = async (query: string, page: number): Promise<Response> => {
  const response = await axios({
    method: 'GET',
    url: 'http://localhost:3030/articles',
    params: {
      q: query,
      page
    }
  });

  return response.data.articles;
};

