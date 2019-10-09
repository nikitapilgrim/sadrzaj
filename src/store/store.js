import createStore from 'storeon';
import persistState from '@storeon/localstorage';


const stage = store => {
  store.on('@init', () => ({
    stage: 0,
    final: false,
  }));
  store.on('final', ({final}, state) => {
    return ({final: state});
  });
  store.on('next', ({stage}, number) => {
    if (number === 0 || number) {
      return ({stage: number});
    }
    if (Stages.length <= stage) {
      store.dispatch('final', true);
      return ({stage: stage});
    }
    return ({stage: stage + 1});
  });
};

const audio = store => {
  store.on('@init', () => ({
    audio: {
      intro: false,
      win: false,
    },
  }));

  store.on('intro/on', ({audio}) => {
    return ({audio: {...audio, intro: true}});
  });
  store.on('intro/off', ({audio}) => {
    return ({audio: {...audio, intro: false}});
  });
};

const progress = store => {
  store.on('@init', () => ({progress: 0}));
  store.on('setProgress', ({progress}, count) => {
    return ({progress: count});
  });
};

const articles = store => {
  store.on('@init', () => ({articles: {}}));
  store.on('articles/addMedal', ({articles}, data) => {
    const [id, medal, percent] = data;
    return {
      articles: {
        ...articles, [id]: {
          medal: medal,
          percent: percent,
        },
      },
    };
  });
};

const modal = store => {
  store.on('@init', () => ({
    modal: {
      open: false,
    },
  }));
  store.on('modal/close', ({modal}) => {
    return {
      modal: {
        open: false,
      },
    };
  });
  store.on('modal/open', ({modal}) => {
    return {
      modal: {
        open: true,
      },
    };
  });
};

const help = store => {
  store.on('@init', () => ({help: false}));
  store.on('help/close', ({modal}) => {
    return {
      help: false,
    };
  });
  store.on('help/open', ({modal}) => {
    return {
      help: true,
    };
  });
};


export const store = createStore([stage, modal, progress, audio, articles, help, persistState(['articles'])]);