import { get, route } from 'remix/routes'

export const routes = route({
  assets: get('/assets/*path'),
  home: '/',
  v2: '/v2',
  recursos: '/recursos',
  sobre: '/sobre',
  carreiras: '/carreiras',
  contato: '/contato',
})
