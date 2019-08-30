import React, {useState, useEffect, useRef} from 'react';
import {Link, Route} from 'wouter';
import StoreContext from 'storeon/react/context';
import {ModalProvider} from 'react-modal-hook';
import useStoreon from 'storeon/react';
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
      <ModalProvider>
        <Route path="/" component={Start}/>
        <Route path="/articles" component={Articles}/>
      </ModalProvider>
    </StoreContext.Provider>
  );
};

export default WithProviders;

//#if _DEBUG
HotManager.register(module.id);
//#endif

