import React from 'react';
import {Provider} from 'react-redux';
import MainApp from './src';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
