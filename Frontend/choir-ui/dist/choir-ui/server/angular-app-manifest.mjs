
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/schedule"
  },
  {
    "renderMode": 2,
    "route": "/events"
  },
  {
    "renderMode": 2,
    "route": "/join"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 634, hash: '505e288841dcfb15734d986247cb5ec059389c246a920477e062c18163dc3203', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 945, hash: 'cfa562d9d2f0769ce710a8f6e4490d05b79abe93cc6037562b240af9f7ac6aae', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 1260, hash: '92bb85110d24063c6b9a94ed16b6e17188fbe027738f976632d2135037d6ce98', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 1340, hash: '6eb1d2471ac1aae256a9c777da731e45be35c601602240a866f02145d2b6bc8e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'schedule/index.html': {size: 1259, hash: 'cbd2ee06b4e89df8d3159b6d2c43b12685c87cfdec02ebacd9cb6251d80c57f0', text: () => import('./assets-chunks/schedule_index_html.mjs').then(m => m.default)},
    'join/index.html': {size: 1759, hash: '6a274a9d285c74b16132495b5083357d31da7a1aa928acd58437e2b11d140714', text: () => import('./assets-chunks/join_index_html.mjs').then(m => m.default)},
    'events/index.html': {size: 1258, hash: '0c2b9c5542a374e12449d27d264833ec8e27db72745e0ace8a3ee98809add78b', text: () => import('./assets-chunks/events_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 1312, hash: '8ec081ff483920c6468b543d3fe60c562ee2e73a72560cddd568b2ae03b78165', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-AAPLF24W.css': {size: 600, hash: 'WKRwtR1ooRA', text: () => import('./assets-chunks/styles-AAPLF24W_css.mjs').then(m => m.default)}
  },
};
