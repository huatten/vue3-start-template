module.exports = {
  plugins: {
    'postcss-import': {},
    autoprefixer: {},
    tailwindcss: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
