// utils/signupUtil.ts

import axios from "axios";
import { SignupRequestModel, SignupResponseModel } from "../models/SignupModel";
import { ISignupResponse } from "../interfaces/ISignup";

const API_URL = 'http://localhost:5036/signup';

export class SignupService {
  static async signup(email: string, password: string): Promise<SignupResponseModel> {
    try {
      const requestData = new SignupRequestModel({
        email,
        password
      });

      console.log('Sending signup request:', {
        url: API_URL,
        data: requestData
      });

      const response = await axios.post<ISignupResponse>(
        API_URL,
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
            // Add CORS headers if needed
            'Accept': 'application/json'
          },
          // Add withCredentials if your API requires it
          withCredentials: false
        }
      );

      console.log('Signup response:', response.data);
      return new SignupResponseModel(response.data.data);
      
    } catch (error: any) {
      console.error('Detailed error:', {
        error: error,
        response: error?.response,
        data: error?.response?.data,
        status: error?.response?.status,
        message: error?.message
      });

      // Handle CORS errors
      if (error?.message?.includes('Network Error')) {
        throw new Error('Network error: Please check if the server is running and CORS is properly configured');
      }

      // Handle server errors
      if (error?.response?.data) {
        throw new Error(error.response.data.message || 'Server error occurred');
      }

      // Handle request errors
      if (error?.request) {
        throw new Error('Could not reach the server. Please check your connection');
      }

      throw new Error('An unexpected error occurred');
    }
  }
}