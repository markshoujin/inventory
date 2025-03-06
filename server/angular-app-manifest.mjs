
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 848, hash: 'e5b65c88ea8631b60557078e9776b00c3fc28eb363b9873d9e27337575cff9be', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1250, hash: '2aaae617ceb59e5cf114986e8955e938859bc86caae0c6c4a0d1a9b57f0886d7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22160, hash: '37af33bbe8dc67d8513ddd1b668abb46b651ddb83a2c68c7b812db22caa4dbba', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YGA5TJJ7.css': {size: 75, hash: 'zXj6oV86F1Y', text: () => import('./assets-chunks/styles-YGA5TJJ7_css.mjs').then(m => m.default)}
  },
};
