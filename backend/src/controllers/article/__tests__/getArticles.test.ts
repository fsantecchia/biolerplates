import axios from 'axios';

import { getArticles } from '../getArticles';

jest.mock('axios');

const axiosMock = axios as unknown as jest.Mock;

describe('module controllers/getArticles', () => {
  it('should return articles', async () => {
    axiosMock.mockResolvedValueOnce({ data: 'success' });
    const request: any = {
      query: {}
    };
    const response: any = {
      json: jest.fn()
    };
    const next = jest.fn();

    await getArticles(request, response, next);

    expect(response.json).toHaveBeenCalledTimes(1);
    expect(response.json).toHaveBeenCalledWith('success');
  })

  it('should return 404 from nonexistent route', async () => {
    axiosMock.mockRejectedValueOnce({ data: 'error' });
    const request: any = {
      query: {}
    };
    const response: any = {
      json: jest.fn()
    };
    const next = jest.fn();

    await getArticles(request, response, next);

    expect(response.json).toHaveBeenCalledTimes(0);
    expect(next).toHaveBeenCalledTimes(1);
  })
});
