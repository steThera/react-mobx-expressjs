/**
 * Dynamic inject route and reducer
 * @see http://mxstbr.blog/2016/01/react-apps-with-pages/
 */

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes() {

  return [
    {
      path: '/',
      name: 'home',
      getComponents(nextState, cb) {
				import('containers/HomePage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/categories',
      name: 'category',
      getComponents(nextState, cb) {
        import('containers/CategoryPage/ListCategory')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/categories/new',
      name: 'category-new',
      getComponents(nextState, cb) {
        import('containers/CategoryPage/CreateCategory')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/categories/:code',
      name: 'category-detail',
      getComponents(nextState, cb) {
        import('containers/CategoryPage/CategoryDetail')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '*',
      name: 'notFound',
      getComponents(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },

  ];
}