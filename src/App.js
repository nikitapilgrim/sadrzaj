import React from 'react';
import {Route} from 'wouter';
import StoreContext from 'storeon/react/context';
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
        <Route path="/" component={Start}/>
        <Route path="/articles" component={Articles}/>
    </StoreContext.Provider>
  );
};

export default WithProviders;

//#if _DEBUG
HotManager.register(module.id);
//#endif

