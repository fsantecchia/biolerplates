import { ErrorRequestHandler } from 'express';
import config from '../config';

/**
 * 500 response & log when errors are raised.
 */
export const errorHandler: ErrorRequestHandler = (error, request, response) => {
  console.error(error);
  return response.status(500).json({
    message: config.nodeEnv === 'production' ?
      'unknown error' :
      `${error}`
  })
};