
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/wedding-landing-page-ui/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/wedding-landing-page-ui"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 470, hash: 'cb3ee9aca337643da7ad987021519a691c0fda77d52e195b94dfef6c76889767', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 983, hash: 'c5a8a15b0abea784caa6c86ae3fafac6da3b46954d46e02b57a25c94e1f05491', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21626, hash: '2bf1772843420500c6ef8028201ad6a2a901da0d61ecc3a6177f04953f3fd3e2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
