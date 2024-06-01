import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter} from 'react-router-dom';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Keeps track of the current URL in its state, and re-renders
  // descendant components if that changes.
  <BrowserRouter>
    <App />
  </BrowserRouter>
);