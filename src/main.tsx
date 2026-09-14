import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import './index.css';

// Usamos o CLIENT_ID padrao providenciado pelas configs do Google Cloud para o AI Studio
const clientId = "100223361507-j1a90d40edrnrcobd7h220b336j7vpl7.apps.googleusercontent.com";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);
