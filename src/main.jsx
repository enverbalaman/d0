import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import './assets/css/remixicon.css';
import './assets/css/style.scss';
import './assets/css/responsive.scss';
import { RouterProvider } from 'react-router-dom'; // RouterProvider kullanılıyor
import { router } from './route/router.jsx'; // createHashRouter'dan router geliyor

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* RouterProvider ile yönlendirme */}
  </React.StrictMode>,
);
