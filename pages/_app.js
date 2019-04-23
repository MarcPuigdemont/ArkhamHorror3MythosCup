import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { withRouter } from 'next/router';

import initStore from '../utils/store';
import Menu from '../components/Menu';

const routeNames = {
  '/': 'Mythos Cup',
  '/create-cup': 'Create new Mythos Cup',
  '/edit-cup': 'Prepare the Mythos Cup',
  '/play': `Let's Play!`,
  '/settings': 'Settings'
};

/* debug to log how the store is being used */
export default withRedux(initStore, {
  debug: typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
})(
  withRouter(
    class MyApp extends App {
      render() {
        const { Component, store, router } = this.props;
        const menuTitle = routeNames[router.pathname];
        return (
          <Container>
            <Head>
              <title>Mythos Cup</title>
            </Head>
            <Provider store={store}>
              <div className="app">
                <Menu title={menuTitle} />
                <Component />
              </div>
            </Provider>
          </Container>
        );
      }
    }
  )
);
