import React from 'react';
import { Provider } from 'react-redux';
import Screen from './Screen/Screen';
import store from './store/store';

const App = () => {

  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  );
};

export default App;
