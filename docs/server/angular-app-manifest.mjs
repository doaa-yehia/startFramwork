
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/https://github.com/doaa-yehia/startFramwork.git',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/https://github.com/doaa-yehia/startFramwork.git/home",
    "route": "/https://github.com/doaa-yehia/startFramwork.git"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/doaa-yehia/startFramwork.git/home"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/doaa-yehia/startFramwork.git/about"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/doaa-yehia/startFramwork.git/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/doaa-yehia/startFramwork.git/contact"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/doaa-yehia/startFramwork.git/**"
  }
],
  assets: {
    'index.csr.html': {size: 6057, hash: '8e0dc1a45c5399fb5c8a1c222bad480d502607c4f0a27abc2e7d3894ddd816f6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1123, hash: '91ebbcb14f7eca4511b6be5619cf30fbbf47c076759b2ebd5b02a841cc657548', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20706, hash: '6cbe3ef59af2a3a3b67ed9c5b9b33261beb349023c492ee6bba08fc4c3e115d0', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20706, hash: '6cbe3ef59af2a3a3b67ed9c5b9b33261beb349023c492ee6bba08fc4c3e115d0', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 20706, hash: '6cbe3ef59af2a3a3b67ed9c5b9b33261beb349023c492ee6bba08fc4c3e115d0', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 20706, hash: '6cbe3ef59af2a3a3b67ed9c5b9b33261beb349023c492ee6bba08fc4c3e115d0', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-WTXO7WLW.css': {size: 305389, hash: 'fnEdFMkvqwM', text: () => import('./assets-chunks/styles-WTXO7WLW_css.mjs').then(m => m.default)}
  },
};
