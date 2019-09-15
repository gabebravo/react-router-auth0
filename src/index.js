import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Auth0Provider } from './auth/react-auth0-wrapper';
import config from './auth/auth_config.json';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';
import deepOrange from '@material-ui/core/colors/deepOrange';

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500], light: blue[200] },
    secondary: { main: deepOrange[500], light: deepOrange[200] }
  }
});

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={'http://localhost:3000/dashboard'}
    onRedirectCallback={onRedirectCallback}
  >
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
