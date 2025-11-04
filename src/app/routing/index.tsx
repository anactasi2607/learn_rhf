import {App} from 'app/App';
import {MainPage} from 'pages/main';
import {NotFoundPage} from 'pages/notFound';
import {RefsPage} from 'pages/refs';
import {RHFPage} from 'pages/rhf';
import {createBrowserRouter} from 'react-router';
import {useContextAuthStrategy} from 'shared/lib/useContextAuthStrategy';
import {ProtectionWrapper} from 'shared/ui/ProtectionWrapper';

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
        path: 'refs',
        element: <RefsPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
      {
        path: 'profile',
        element: (
          <ProtectionWrapper useAuthStrategy={useContextAuthStrategy}>
            <div>Сюда нельзя!</div>
          </ProtectionWrapper>
        ),
      },
    ],
  },
]);
