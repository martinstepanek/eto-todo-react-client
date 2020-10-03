import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from './ErrorBoundary';
// Error page is downloaded without lazy loading intentionally
import PageDown from './page-down/PageDown';
import PrivateRoute from './PrivateRoute';
// @ts-ignore
import { PageTransition } from '@steveeeie/react-page-transition';
import PageSkeleton from '../components/PageSkeleton';

const Home = React.lazy(() => import('./home/Home'));
const SignInWrapper = React.lazy(() => import('./sign-in/SignInWrapper'));
const NotFound = React.lazy(() => import('./not-found/NotFound'));

interface RouteRule {
  path: string;
  protected: boolean;
  exact?: boolean;
  main: () => React.ReactElement;
}

const routes: RouteRule[] = [
  {
    path: '/',
    exact: true,
    protected: true,
    main: () => <Home />,
  },
  {
    path: '/sign-in',
    protected: false,
    exact: true,
    main: () => <SignInWrapper />,
  },
  {
    path: '*',
    protected: false,
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
          <React.Suspense fallback={<PageSkeleton />}>
            <Route
              render={({ location }) => {
                return (
                  <PageTransition
                    preset="moveToLeftFromRight"
                    transitionKey={location.pathname}
                  >
                    <Switch>
                      {routes.map((route: RouteRule) => {
                        const RouteComponent = route.protected
                          ? PrivateRoute
                          : Route;
                        return (
                          <RouteComponent
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            children={
                              <ThemeProvider theme={{}} key={route.path}>
                                <GlobalStyle />
                                <route.main />
                              </ThemeProvider>
                            }
                          />
                        );
                      })}
                    </Switch>
                  </PageTransition>
                );
              }}
            />
          </React.Suspense>
        </Router>
      </ErrorBoundary>
    </>
  );
};

export default AppRouter;
