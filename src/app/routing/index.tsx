import {App} from 'app/App';
import {LoginPage} from 'pages/login';
import {MainPage} from 'pages/main';
import {NotFoundPage} from 'pages/notFound';
import {ProfilePage} from 'pages/profile';
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
        element: (
          <ProtectionWrapper useAuthStrategy={useContextAuthStrategy}>
            <RHFPage />
          </ProtectionWrapper>
        ),
      },
      {
        path: 'refs',
        element: (
          <ProtectionWrapper useAuthStrategy={useContextAuthStrategy}>
            <RefsPage />
          </ProtectionWrapper>
        ),
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
      {
        path: 'profile',
        element: (
          <ProtectionWrapper useAuthStrategy={useContextAuthStrategy}>
            <ProfilePage />
          </ProtectionWrapper>
        ),
      },
    ],
  },
]);
