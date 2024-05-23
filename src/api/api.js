import { message } from 'antd';
import axios from 'axios';

const API_BASE_URL = 'localhost:5000/'

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
