import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BookmarksContextprovider from './context/BookmarksContextprovider.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BookmarksContextprovider>
        <App />
      </BookmarksContextprovider>
    </QueryClientProvider>
  </React.StrictMode>
);
