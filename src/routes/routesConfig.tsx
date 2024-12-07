import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router';
import { CREATE_PRODUCT, HOME, PRODUCTS } from './routes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      <Route path={HOME} element={<></>} />
      <Route path={PRODUCTS} element={<></>} />
      <Route path={PRODUCTS + '/:id'} element={<></>} />
      <Route path={CREATE_PRODUCT} element={<></>} />
    </Routes>,
  ),
);
