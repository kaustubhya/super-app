import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import CategoryPage from './components/CategoryPage';
import Layout from './Layout';
import Form from './components/Form';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
    <Route path='' element={<Form />} />
    <Route path='entertainment' element={<CategoryPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Here we have no need of putting in the App component, while using Routing, we can insert an Routing Component */}
    {/* Route Provider will always need a prop to work, without it, it will never work */}
    <RouterProvider router={router}/>
    {/* Here we gave it a router prop. */}
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
