
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/markshoujin/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/markshoujin"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 860, hash: '39298efe537117e33c175cbda6b10ecd342ceabf6a27dc0ae2d1a6a45db84be0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1262, hash: '400f8d18c52df80b955d8e95df97186c1efcf14484520c37efbc7895f7977339', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22172, hash: '6d6d55c5ba8928619c2e8b02b78cff2f8c59582f7e16e8dd2d3137116aa5b0d4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YGA5TJJ7.css': {size: 75, hash: 'zXj6oV86F1Y', text: () => import('./assets-chunks/styles-YGA5TJJ7_css.mjs').then(m => m.default)}
  },
};
