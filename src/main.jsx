import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import HomeLayout from './Layout/HomeLayout';
import Home from './Pages/Home/Home';
import Error from './Error/Error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout></HomeLayout>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/services',
				element: <Home></Home>,
			},
			{
				path: '/Works',
				element: <Home></Home>,
			},
		],
	},
	{
		path: '*',
		element: <Error></Error>,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
