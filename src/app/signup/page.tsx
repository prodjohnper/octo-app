// page.tsx
"use client";

import { useState, FormEvent } from 'react';
import { SignupValidator } from './models/SignupModel';
import { SignupService } from './utils/signupUtil';
import { IValidationErrors } from './interfaces/ISignup';

const SignUp = () => {
  const [errors, setErrors] = useState<IValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validator = new SignupValidator();

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
      const response = await SignupService.signup(email, password);
      console.log('Signup successful:', response);
      // Handle successful signup (e.g., redirect)
    } catch (error) {
      setErrors({ email: error instanceof Error ? error.message : 'An error occurred' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="p-5 flex flex-col justify-center items-center h-full">
      <section className="flex flex-col items-center justify-center card">
        <div className="flex flex-col text-center">
          <h1 className="text-5xl">Sign Up</h1>
          <p className="-mt-2 text-lg text-black/50">Create an account</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div>
            {/* Name */}
            <label htmlFor="name">
              {" "}
              Name
              <input type="text" id="name" placeholder="John" />
            </label>

            {/* Last Name */}
            <label htmlFor="last-name">
              {" "}
              Last Name
              <input type="text" id="last-name" placeholder="Doe" />
            </label>

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

            {/* Confirm Password */}
            <label htmlFor="confirm-password">
              {" "}
              Confirm Password
              <input
                type="password"
                id="confirm-password"
                placeholder="********"
              />
            </label>
          </div>

          <div className="flex flex-col gap-2">
            <button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing up...' : 'Sign Up'}
            </button>
            <a href="/login" className="text-xs hover:underline text-center">
              Already have an account?
            </a>
          </div>
        </form>
      </section>
    </main>
  );
};

export default SignUp;
