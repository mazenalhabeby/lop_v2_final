/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  swcMinify: true,
})
