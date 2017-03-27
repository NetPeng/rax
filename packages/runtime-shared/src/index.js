module.exports = {
  get Promise() { return require('./promise'); },
  get Symbol() { return require('./symbol'); },
  get Map() { return require('./map'); },
  get Set() { return require('./set'); },
  get FontFace() { return require('./fontface'); },
  get URL() { return require('./url'); },
  get URLSearchParams() { return require('./url-search-params'); },
  get matchMedia() { return require('./matchMedia'); }
}
