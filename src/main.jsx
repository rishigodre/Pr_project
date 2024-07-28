import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import Fonts from './assets/Fonts.jsx';

const theme = extendTheme({
  colors: {
    primaryGreen: '#005856',
    accent: '#74C9AF',
    highlightGreen: '#003A3C',
  },
  fonts: {
    body: 'Archivo',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
