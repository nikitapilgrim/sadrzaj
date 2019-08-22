import React, {useState, useEffect, useRef} from 'react';
import {Link, Route} from 'wouter';
import StoreContext from 'storeon/react/context';
import useStoreon from 'storeon/react';
//#if _DEBUG
import HotManager from './HotManager';
//#endif
import {store} from './store/store';

//screens
import {Start} from './pages/Start'

const WithProviders = () => {
  return (
    <StoreContext.Provider value={store}>
      <Route path="/" component={Start}/>
    </StoreContext.Provider>
  );
};

export default WithProviders;

//#if _DEBUG
HotManager.register(module.id);
//#endif

