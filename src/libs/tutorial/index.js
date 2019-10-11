import React, {createContext, useContext, useState, useEffect, useMemo} from 'react';
let refs = [];

const ActionContext = createContext();

export const ActionProvider = ({children}) => {
  const [actionStore, setActionStore] = useState({});
  const [style, setStyle] = useState({});
  const [currentAction, setCurrentAction] = useState(1);

  const createAction = (action) => {
    const {ref, cb, id, groupName, content} = action;

    const setRefs = (groupName) => {
      if (ref && ref.current) {
        if  (Array.isArray(groupName)) {
          return groupName.reduce((acc, name, i, array) => {
            if (array.length - 1 === i) {
              if (refs.hasOwnProperty(name)) {
                if (!refs[name].some(r => r === ref)) {
                  refs[name] = [...refs[name], ref]
                }
              } else {
                refs[name] = [ref]
              }
            }
            return [...acc, ...refs[name]]
          }, [])
        }

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
      });
      setCurrentAction(currentAction + 1)
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
  return [store, methods, store.hasOwnProperty(id) && store[id].hasOwnProperty('content') && store[id].content];
};
