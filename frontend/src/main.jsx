import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-p2ksf8uwbrhb8v34.us.auth0.com"
    clientId="qP8HMIs6EeM1vUBOY68pcHiUgg9poxfi"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    cacheLocation="localstorage"
  >
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </Auth0Provider>
);
