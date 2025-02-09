// page.tsx
"use client";

import { useState, FormEvent } from 'react';
import { LoginValidator } from './models/LoginModel';
import { LoginService } from './utils/loginUtil';
import { IValidationErrors } from './interfaces/ILogin';
import "./styles/login.module.css";

const Login = () => {
  const [errors, setErrors] = useState<IValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validator = new LoginValidator();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // Validate form
    const validationErrors = validator.validateForm(email, password);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await LoginService.login(email, password);
      console.log('Login successful:', response);
      // Handle successful login (e.g., store token, redirect)
      if (response.data?.token) {
        // Store token in localStorage or your preferred storage method
        localStorage.setItem('token', response.data.token);
        // Redirect to dashboard or home page
        window.location.href = '/dashboard';
      }
    } catch (error) {
      setErrors({ 
        email: error instanceof Error ? error.message : 'An error occurred'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="p-5 flex flex-col justify-center items-center h-full">
      <section className="flex flex-col items-center justify-center card">
        <div className="flex flex-col text-center">
          <h1 className="text-5xl">Login</h1>
          <p className="-mt-2 text-lg text-black/50">Log in to your account</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div>
            {/* Email */}
            <label htmlFor="email">
              {" "}
              Email
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="example@mail.com"
                className={errors.email ? "error" : ""}
              />
              {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
            </label>

            {/* Password */}
            <label htmlFor="password">
              {" "}
              Password
              <input 
                type="password" 
                id="password" 
                name="password"
                placeholder="********"
                className={errors.password ? "error" : ""}
              />
              {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
            </label>
          </div>

          <div className="-mt-6 mb-6 flex justify-end">
            <a href="/forgot-password" className="text-xs hover:underline">
              Forgot your password?
            </a>
          </div>

          {/* Button */}
          <div className="flex flex-col gap-2">
            <button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
            <a href="/signup" className="text-xs hover:underline text-center">
              Don&apos;t have an account yet?
            </a>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;