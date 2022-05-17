import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthContextProvider from './context/AuthCtx';
import ThemeContextProvider from './context/ThemeContext';
import UserContextProvider from './context/UserContext';
import Home from './home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
    
  </React.StrictMode>
);


