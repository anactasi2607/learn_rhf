import ky from 'ky';
import {getEnvVariable} from 'shared/lib/vite';

export const api = ky.create({prefixUrl: getEnvVariable('VITE_API_URL')});
