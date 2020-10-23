import React, { FC, lazy, Suspense } from 'react';
import HomeSkeleton from './HomeSkeleton';

const Home = lazy(() => import('./Home'));

const HomeWrapper: FC = props => (
  <Suspense fallback={<HomeSkeleton />}>
    <Home {...props} />
  </Suspense>
);

export default HomeWrapper;
