import React from 'react';
import { ThemeProvider } from 'styled-components';
import {Route} from 'wouter';
import StoreContext from 'storeon/react/context';
import {ActionProvider} from './libs/tutorial'
//#if _DEBUG
import HotManager from './HotManager';
//#endif
import {store} from './store/store';
//screens
import {Start} from './pages/Start';
import {Articles} from './pages/Articles.js';

const WithProviders = () => {
  return (
      <StoreContext.Provider value={store}>
        <ActionProvider>
          <Route path="/" component={Start}/>
          <Route path="/articles" component={Articles}/>
        </ActionProvider>
      </StoreContext.Provider>
  );
};

export default WithProviders;

//#if _DEBUG
HotManager.register(module.id);
//#endif

