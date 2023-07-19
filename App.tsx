/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {QueryClientProvider, QueryClient} from 'react-query';
import Navigation from './src/components/Navigation';
function App(): JSX.Element {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Navigation />
    </QueryClientProvider>
  );
}

export default App;
