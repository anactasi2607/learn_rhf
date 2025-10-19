import {z} from 'zod';

export const validationSchema = z
  .object({
    userName: z.string().min(1, 'Имя обязательно'),
    email: z.string().min(1, 'Email обязателен').includes('@', {message: 'Поле должно содержать символ @'}),
    password: z.string().min(6, 'Пароль должен содержать не менее 6 символов'),
    confirmPassword: z.string().min(1, 'Подтверждение пароля обязательно'),
    urls: z
      .array(z.object({value: z.string().min(1, 'Ссылка не может быть пустой').url('Некорректный URL')}))
      .min(1, 'Добавьте хотя бы одну ссылку на соцсети'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });
