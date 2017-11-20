require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/bane-blog',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
};