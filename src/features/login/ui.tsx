import {Box, Button, Container, TextField} from '@mui/material';
import type {FC} from 'react';
import {Controller, FormProvider, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {toast} from 'react-toastify';
import {getMessageFromError} from 'shared/lib/common';
import {useNavigate} from 'react-router';
import {useAuthContext} from 'shared/lib/authContext';
import {HTTPError} from 'ky';
import {LoginFormValues} from './model/types';
import {LoginSchema} from './model/validator';
import {useSignInApi} from './api';

export const Login: FC = () => {
  const navigate = useNavigate();

  const {login} = useAuthContext();

  const form = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(LoginSchema),
  });

  const {mutateAsync, isPending} = useSignInApi();

  const {
    formState: {errors, isValid, isSubmitted},
    control,
    handleSubmit,
  } = form;

  const submitHandler = async (formValues: LoginFormValues) => {
    try {
      const response = await mutateAsync(formValues);

      if ('user' in response) {
        login({
          accessToken: response.accessToken,
          refreshToken: '',
          userId: response.user.id,
          name: '',
        });
      }

      toast.success('Вы успешно зарегистрировались в системе');

      navigate('/profile');
    } catch (error) {
      if (error instanceof HTTPError) {
        toast.error(error.message);
      } else {
        toast.error(getMessageFromError(error) || 'Ошибка при регистрации');
      }
    }
  };

  return (
    <FormProvider {...form}>
      <Box component="form" onSubmit={handleSubmit(submitHandler)}>
        <Container sx={{display: 'flex', flexFlow: 'column', justifyContent: 'center'}} maxWidth="sm">
          <Controller
            control={control}
            name="email"
            render={({field}) => (
              <TextField
                {...field}
                fullWidth
                type="email"
                error={!!errors.email}
                helperText={errors.email?.message}
                label="Email"
                sx={{mb: 2}}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({field}) => (
              <TextField
                {...field}
                fullWidth
                type="password"
                autoComplete="current-password"
                error={!!errors.password}
                helperText={errors.password?.message}
                label="Password"
                sx={{mb: 2}}
              />
            )}
          />
          <Button loading={isPending} disabled={isSubmitted && !isValid} type="submit" variant="contained">
            Submit
          </Button>
        </Container>
      </Box>
    </FormProvider>
  );
};
