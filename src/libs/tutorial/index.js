import React, {createContext, useContext, useState, useEffect, useMemo} from 'react';
let refs = [];

const ActionContext = createContext();

export const ActionProvider = ({children}) => {
  const [actionStore, setActionStore] = useState({});
  const [style, setStyle] = useState({});

  const createAction = (action) => {
    const {ref, cb, id, groupName, content} = action;

    const setRefs = (groupName) => {
      if (ref && ref.current) {
        if (refs.hasOwnProperty(groupName)) {
          if (!refs[groupName].some(r => r === ref)) {
            refs[groupName] = [...refs[groupName], ref]
          }
        } else {
          refs[groupName] = [ref]
        }
      }
      return refs[groupName]
    };

    setActionStore((prev) => {
      if (id) {
        return {
          ...prev, [id]: {
            cb, groupName, refs: setRefs(groupName) || refs,
            content,
            complete: false
          },
        }
      }
    })
  };

  const getStore = () => actionStore;
  const goTo = (id) => {
    if (actionStore.hasOwnProperty(id) && !actionStore[id].complete) {
      actionStore[id].cb();
      let prepare = {...actionStore[id]};
      prepare.complete = true;
      setActionStore(prev => {
        return {...prev, [id]: prepare}
      })
    }
  };
  const setStyleToRef = (style) => {
    setStyle(style);
  };

  return (
    <ActionContext.Provider value={[actionStore, {goTo, getStore, createAction, setStyleToRef}]}>
      {children}
    </ActionContext.Provider>
  );
};


export const useAction = (ref, cb, id, groupName, content) => {
  const [store, methods] = useContext(ActionContext);
  useEffect(() => {
    methods.createAction({ref, cb, id, groupName, content})
  }, [ref]);
  return [store, methods];
};
