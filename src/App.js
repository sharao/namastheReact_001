import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/error-page';
import RestaurantMenu from './components/RestaurantMenu';

/**
 *
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const AppLayout = () => {
 return (
  <div>
   <Header />
   <Outlet />
  </div>
 );
};

const appRouter = createBrowserRouter([
 {
  path: '/',
  element: <AppLayout />,
  errorElement: <ErrorPage />,
  children: [
   { path: '/', element: <Body /> },
   { path: '/about', element: <About /> },
   { path: '/contact', element: <Contact /> },
   { path: '/restaurants/:resId', element: <RestaurantMenu /> },
  ],
 },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
