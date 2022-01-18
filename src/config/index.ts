import DotEnv from 'dotenv'

DotEnv.config()

export default {
  endpoint: process.env.API_ENDPOINT || 'http://localhost:3000/api/',
}
