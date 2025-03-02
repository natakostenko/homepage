import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import './scss/index.scss'
import App from './App.jsx'
import LoginProvider from './HOC/LoginProvider.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LoginProvider>
      <App />
    </LoginProvider>
  </BrowserRouter>,
)
