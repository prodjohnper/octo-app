// utils/api.js
import axios from "axios";
import { SignupRequestModel, SignupResponseModel } from "../models/SignupModel";

// Fetch data function with type checking using the model
export const fetchData = async (url: string): Promise<SignupResponseModel> => {
  try {
    const response: SignupResponseModel = await axios.get(url);
    // Assuming the API returns an array of data, you can validate it or just return it.
    return response; // Cast the response data to the model type
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error; // Optionally handle or throw the error
  }
};
