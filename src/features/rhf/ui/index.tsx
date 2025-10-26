import {Box, Button, Container, Divider, TextField, Typography, IconButton} from '@mui/material';
import {type FC} from 'react';

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {validationSchema, type FormValues} from '../model';
import {useNavigate} from 'react-router';
import {Controller, FormProvider, useFieldArray, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {formHandler} from 'shared/lib/forms';
import {toast} from 'react-toastify';

export const RHFForm: FC = () => {
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    defaultValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      urls: [{value: ''}],
    },
    mode: 'onChange',
    resolver: zodResolver(validationSchema),
  });

  const {
    handleSubmit,
    control,
    formState: {errors, isValid, isSubmitting},
  } = form;

  const {
    fields: urlsValues,
    append: urlAppend,
    remove: urlRemove,
  } = useFieldArray({
    control,
    name: 'urls',
  });

  const submitHandler = async (formValues: FormValues) => {
    try {
      await formHandler(formValues);
      toast.success('Форма успешно отправлена');
      navigate('/');
    } catch {
      toast.error('Что-то пошло не так');
    }
  };

  return (
    <FormProvider {...form}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexFlow: 'column',
        }}
        component="form"
        onSubmit={handleSubmit(submitHandler)}
      >
        <Typography variant="h4" sx={{mb: 4}}>
          RHF form
        </Typography>
        <Container maxWidth="sm">
          <Controller
            name="userName"
            control={control}
            render={({field, fieldState}) => (
              <TextField
                {...field}
                sx={{mb: 2}}
                fullWidth
                label="Имя пользователя"
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({field, fieldState}) => (
              <TextField
                {...field}
                label="Email"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                sx={{mb: 2}}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({field, fieldState}) => (
              <TextField
                {...field}
                sx={{mb: 2}}
                fullWidth
                label="Пароль"
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({field, fieldState}) => (
              <TextField
                {...field}
                sx={{mb: 2}}
                fullWidth
                label="Подтверждение пароля"
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Divider variant="middle" sx={{mb: 4}} />
          {urlsValues.map((skill, index) => (
            <Box key={skill.id} sx={{display: 'flex', mb: 2, alignItems: 'flex-start'}}>
              <Controller
                name={`urls.${index}.value` as const}
                control={control}
                render={({field, fieldState}) => (
                  <TextField
                    {...field}
                    sx={{mb: 2}}
                    fullWidth
                    label={`Ссылка ${index + 1}`}
                    variant="outlined"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
              {!!index && (
                <IconButton onClick={() => urlRemove(index)} sx={{ml: 2, mt: '12px'}} color="error" size="small">
                  <DeleteIcon />
                </IconButton>
              )}
            </Box>
          ))}
          <Button
            onClick={() => urlAppend({value: ''})}
            color="primary"
            sx={{mb: 4}}
            startIcon={<AddIcon />}
            disabled={Array.isArray(errors.urls) && !!errors.urls.length}
          >
            Добавить ссылку
          </Button>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Button sx={{mb: 2}} disabled={!isValid} loading={isSubmitting} variant="contained" type="submit">
              Отправить
            </Button>
          </Box>
        </Container>
      </Box>
    </FormProvider>
  );
};
