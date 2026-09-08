import { get, route } from 'remix/routes'

export const routes = route({
  assets: get('/assets/*path'),
  home: '/',
  v2: '/v2',
  v3: '/v3',
  v4: '/v4',
  recursos: '/recursos',
  sobre: '/sobre',
  carreiras: '/carreiras',
  contato: '/contato',
})
