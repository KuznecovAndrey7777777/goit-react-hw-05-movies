import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Loader from 'components/Loader/Loader';

const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const Cast = lazy(() => import('../components/Cast/Cast'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

const AppWithSuspense = () => {
  return (
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  );
};

export default AppWithSuspense;
