import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('https://660ab647ccda4cbc75db9a7c.mockapi.io/adverts/adverts');
  return response.data;
});

