import dotenv from 'dotenv';
import packageJson from '../package.json';

dotenv.config()

const config = {
	version: packageJson.version,
	name: packageJson.name,
	description: packageJson.description,

	nodeEnv: process.env['NODE_ENV'] ?? 'development',
	port: process.env['PORT'] ?? 3030,

	clientOrigins: {
		'development': process.env['DEV_ORIGIN'] ?? '*',
	},

	newsApiUrl: `https://newsapi.org/v2/everything?apiKey=${process.env['NEWS_API_SECRET_KEY']}`
}

export default config;
