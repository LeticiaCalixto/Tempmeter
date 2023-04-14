import React from 'react';
import ContextProvider from './contexts/context';
import App from './App';

function ContextWrapper() {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
}

export default ContextWrapper;
