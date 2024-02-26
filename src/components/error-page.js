import React from 'react';
import { useRouteError } from 'react-router-dom';
const ErrorPage = () => {
 const error = useRouteError();
 console.log(error);
 return (
  <div>
   <h1>Oops!!!</h1>
   <h2>{error.data}</h2>
   <h3>
    {error.status} {error.statusText}
   </h3>
   <h4>{error.error.stack}</h4>
  </div>
 );
};

export default ErrorPage;
