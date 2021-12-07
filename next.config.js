if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env : {
    DOMAIN : process.env.DOMAIN,
    GOOGLE_TAG_MANAGER_ID : process.env.GOOGLE_TAG_MANAGER_ID
  }
}
