import { RequestHandler } from 'express';

/**
 * JSON 404 response
 */
export const fourOhFour: RequestHandler = (request, response) => {
  return response.status(404).json({ message: 'url not found' });
};
