import { useState, useCallback } from 'react';
import { ILoginRequest, ILoginResponse } from '../interfaces/ILogin';
import axios from 'axios';

export const useLoginForm = (): {
  formData: ILoginRequest;
  errors: ILoginResponse['errors'];
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
} => {
  const [formData, setFormData] = useState<ILoginRequest>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<ILoginResponse['errors'] | undefined>();

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        responseType: 'json',
      });

      const loginResponse: ILoginResponse = await response.data as ILoginResponse;

      if (loginResponse.status === 'error' && loginResponse.errors) {
        setErrors(loginResponse.errors);
        return;
      }

      if (loginResponse.data && loginResponse.status === 'success') {
        const { token, userId, username, email, role } = loginResponse.data;
        console.log('Login successful:', { userId, username, email, role });
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  }, [formData]);

  return {
    formData,
    errors,
    handleInputChange,
    handleSubmit,
  };
};
