import {compose} from 'shared/lib/compose';
import {withTheme} from './MUI';
import {withToastify} from './Toastify';
import {withAuthProvider} from './Auth';
import {withTanStackQuery} from './TanStackQuery';

export const withProviders = compose(withAuthProvider, withTheme, withToastify, withTanStackQuery);
