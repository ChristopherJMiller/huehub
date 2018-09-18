export default {
  name: 'Home',
  path: '/',
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      cb(null, require('../containers/pages/Home').default)
    })
  },
}