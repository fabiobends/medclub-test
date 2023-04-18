import * as React from 'react';
import Navigator from './navigation/Navigator';
import AppProvider from './contexts/AppContext';

const App = () => (
  <AppProvider>
    <Navigator />
  </AppProvider>
);

export default App;
