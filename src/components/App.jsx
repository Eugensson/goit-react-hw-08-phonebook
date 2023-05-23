import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';

import { PublicRoute } from 'components/PublicRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { Navigation } from './navigation/Navigation';
import { getUser } from 'redux/auth/operations';
import { useSelectors } from '../hooks/UseSelector';
import Loader from 'components/Loader/Loader';

const Contacts = lazy(() => import('../pages/Contacts'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));

const App = () => {
  const dispatch = useDispatch();
  const { isFetchingCurrentUser } = useSelectors();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser ? (
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <RestrictedRoute>
                  <Contacts />
                </RestrictedRoute>
              }
            />
          </Route>
        </Routes>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default App;
