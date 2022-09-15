import axios from 'axios';

import { API_BASE_URL, API_KEY, LANG } from '../config';

export const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: API_KEY,
  },
  params: {
    lang: LANG,
  },
});
