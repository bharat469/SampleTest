import axios from 'axios';

// Define the API URL as a constant
const API_URL = 'https://restcountries.com/v3.1/name/';

// Define the GetWorldDetail function
export const GetWorldDetail = async countryName => {
  try {
    // Make the GET request using Axios
    const response = await axios.get(`${API_URL}${countryName}?fullText=true`);

    // Check if the response status is OK (200)
    if (response.status === 200) {
      // If successful, return the data
      return response.data;
    } else {
      // If the response status is not OK, throw an error
      throw new Error('API request failed');
    }
  } catch (error) {
    console.log('SKHJS', error);
    // Handle any errors that occurred during the request
    throw error;
  }
};
