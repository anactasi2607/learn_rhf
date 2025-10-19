import {App} from 'app/App';
import {MainPage} from 'pages/main';
import {NotFoundPage} from 'pages/notFound';
import {RHFPage} from 'pages/rhf';
import {createBrowserRouter} from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'rhf',
        element: <RHFPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
