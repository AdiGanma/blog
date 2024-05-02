'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormik } from 'formik';
import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { validationSchema } from './validationSchema';
import useLogin from '@/hooks/api/auth/useLogin';

const Login = () => {
  const { login } = useLogin();
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: '',
        email: '',
        password: '',
      },
      validationSchema,
      onSubmit: (values) => {
        login(values);
      },
    });
  return (
    <main className="container mx-auto h-[90vh] px-4">
      <div className="mt-40 flex justify-center">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl text-primary">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <FormInput
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="Email"
                  value={values.email}
                  error={values.email}
                  isError={!!touched.email && !!errors.email}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <FormInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  value={values.password}
                  error={values.password}
                  isError={!!touched.password && !!errors.password}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
              </div>
              <Button className="mt-6 w-full">Register</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Login;