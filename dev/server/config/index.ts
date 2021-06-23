import DotEnv from 'dotenv'

DotEnv.config()

// API Endpoint
export const endpoint = process.env.API_ENDPOINT || 'http://localhost:1804/api/'
