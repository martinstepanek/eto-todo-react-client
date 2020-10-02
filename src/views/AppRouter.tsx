import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from './ErrorBoundary';
// Error page is downloaded without lazy loading intentionally
import PageDown from './page-down/PageDown';

const SignIn = React.lazy(() => import('./sign-in/SignIn'));
const NotFound = React.lazy(() => import('./not-found/NotFound'));

interface RouteRule {
  path: string;
  exact?: boolean;
  main: () => React.ReactElement;
  theme?: {};
}

const routes: RouteRule[] = [
  {
    path: '/',
    exact: true,
    main: () => <SignIn />,
  },
  {
    path: '*',
    main: () => <NotFound />,
  },
];

const AppRouter: FC = () => {
  return (
    <>
      <ErrorBoundary
        errorPage={
          <>
            <ThemeProvider theme={{}}>
              <GlobalStyle />
              <PageDown />
            </ThemeProvider>
          </>
        }
      >
        <Router>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {routes.map((route: RouteRule) => {
                const RouteComponent = Route;
                return (
                  <RouteComponent
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    children={
                      <ThemeProvider theme={route.theme || {}} key={route.path}>
                        <GlobalStyle />
                        <route.main />
                      </ThemeProvider>
                    }
                  />
                );
              })}
            </Switch>
          </React.Suspense>
        </Router>
      </ErrorBoundary>
    </>
  );
};

export default AppRouter;
