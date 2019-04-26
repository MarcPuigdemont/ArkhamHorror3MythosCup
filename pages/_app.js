import React from 'react';
import Head from 'next/head';
import App, { Container } from 'next/app';
import { StoreContext } from 'redux-react-hook';
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

const store = initStore({});

/* debug to log how the store is being used */
export default withRouter(
  class MyApp extends App {
    render() {
      const { Component, router } = this.props;
      const menuTitle = routeNames[router.pathname];
      return (
        <Container>
          <Head>
            <title>Mythos Cup</title>
          </Head>
          <StoreContext.Provider value={store}>
            <div className="app">
              <Menu title={menuTitle} />
              <Component />
            </div>
          </StoreContext.Provider>
        </Container>
      );
    }
  }
);
