// utils/loginUtil.ts

import axios from "axios";
import { LoginRequestModel, LoginResponseModel } from "../models/LoginModel";
import { ILoginResponse } from "../interfaces/ILogin";

const API_URL = 'http://localhost:5036/login';

export class LoginService {
  static async login(email: string, password: string): Promise<LoginResponseModel> {
    try {
      const requestData = new LoginRequestModel(email, password);

      console.log('Sending login request:', {
        url: API_URL,
        data: requestData
      });

      const response = await axios.post<ILoginResponse>(
        API_URL,
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          withCredentials: false
        }
      );

      console.log('Login response:', response.data);
      
      return new LoginResponseModel(
        response.data.status,
        response.data.message,
        response.data.data,
        response.data.errors
      );
      
    } catch (error: any) {
      console.error('Detailed error:', {
        error: error,
        response: error?.response,
        data: error?.response?.data,
        status: error?.response?.status,
        message: error?.message
      });

      if (error?.response?.data) {
        throw new Error(error.response.data.message || 'Login failed');
      }

      if (error?.request) {
        throw new Error('Could not reach the server. Please check your connection');
      }

      throw new Error('An unexpected error occurred');
    }
  }
}