import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import GlobalStyles from './styles/GlobalStyles';

import Routes from './routes';
import { ApplicationState } from './@types';

function App() {
  const { theme } = useSelector((state: ApplicationState) => state);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="bottom-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
