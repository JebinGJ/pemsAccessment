import axios from 'axios';
import { API_CONSTANTS } from '../utils/Constant';

export const API = axios.create({
  baseURL: API_CONSTANTS.BASE_URL,
});

export const fetchGet = async (url: string, params = {}) => {
  return API.get(url, {
    params,
  });
};
