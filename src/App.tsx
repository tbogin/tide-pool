import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '@/store';
import '@/index.css';
import { CruisesTable } from './components/CruisesTable';

const MainContext = React.createContext({});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MainContext.Provider value={{}}>
          <CruisesTable />
        </MainContext.Provider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
