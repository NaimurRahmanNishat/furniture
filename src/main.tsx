import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './pages/home/page.tsx';
import Shoppage from './pages/shop/page.tsx';
import Aboutpage from './pages/about/page.tsx';
import Contactpage from './pages/contact/page.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Homepage/>,
      },
      {
        path: "/shop",
        element: <Shoppage/>,
      },
      {
        path: "/about",
        element: <Aboutpage/>,
      },
      {
        path: "/contact",
        element: <Contactpage/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)