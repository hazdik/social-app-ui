import { browserHistory } from 'react-router';

// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'landingPage',
      onEnter: () => {
        if (localStorage.getItem('accessToken')) {
          browserHistory.push('/home');
        }
      },
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/LandingPage/reducer'),
          import('containers/LandingPage/sagas'),
          import('containers/LandingPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('landingPage', reducer.default);
          injectSagas(sagas.default); // Inject the saga

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/home',
      name: 'home',
      onEnter: () => {
        if (!localStorage.getItem('accessToken')) {
          browserHistory.push('/');
        }
      },
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/blogs',
      name: 'blogs',
      onEnter: () => {
        if (!localStorage.getItem('accessToken')) {
          browserHistory.push('/');
        }
      },
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/BlogsPage/reducer'),
          import('containers/BlogsPage/sagas'),
          import('containers/BlogsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('blogs', reducer.default);
          injectSagas(sagas.default); // Inject the saga

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/blogs/:blog_id',
      name: 'blog',
      onEnter: () => {
        if (!localStorage.getItem('accessToken')) {
          browserHistory.push('/');
        }
      },
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/BlogPage/reducer'),
          import('containers/BlogPage/sagas'),
          import('containers/BlogPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('blog', reducer.default);
          injectSagas(sagas.default); // Inject the saga

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/add/blog',
      name: 'addBlog',
      onEnter: () => {
        if (!localStorage.getItem('accessToken')) {
          browserHistory.push('/');
        }
      },
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/AddBlogPage/reducer'),
          import('containers/AddBlogPage/sagas'),
          import('containers/AddBlogPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('addBlog', reducer.default);
          injectSagas(sagas.default); // Inject the saga

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/media',
      name: 'mediaLibrary',
      onEnter: () => {
        if (!localStorage.getItem('accessToken')) {
          browserHistory.push('/');
        }
      },
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/MediaLibraryPage/reducer'),
          import('containers/MediaLibraryPage/sagas'),
          import('containers/MediaLibraryPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('media', reducer.default);
          injectSagas(sagas.default); // Inject the saga

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
