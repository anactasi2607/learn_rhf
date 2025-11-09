import {z} from 'zod';
import type {LoginSchema} from './validator';

export type LoginFormValues = z.infer<typeof LoginSchema>;
