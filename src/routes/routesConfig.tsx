import { lazy } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router';

import { CREATE_PRODUCT, HOME, PRODUCTS } from './routes';
// import { Home } from '../containers/Home';

const Home = lazy(() => import('../containers/Home/'));
const ProductsList = lazy(() => import('../containers/ProductsList/'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={HOME} element={<Home />} />
      <Route path={PRODUCTS} element={<ProductsList></ProductsList>} />
      <Route path={PRODUCTS + '/:id'} element={<></>} />
      <Route path={CREATE_PRODUCT} element={<></>} />
    </>,
  ),
);
