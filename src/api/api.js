import { message } from 'antd';
import axios from 'axios';

const API_BASE_URL = 'https://instalily-case-study-backend-edd9ce3c3724.herokuapp.com/'

export const getAIMessage = async (userQuery) => {
  try {
    const response = await axios.post(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching AI message:', error);
    return {
      role: "assistant",
      content: 'error'
    };
  }
};
