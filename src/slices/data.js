import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState = {
  posts: [],
  loading: false,
  hasErrors: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getPostRequest: (state) => {
      state.loading = true;
    },
    getPostSuccess: (state, { payload: posts }) => {
      state.posts = posts;
      state.loading = false;
      state.hasErrors = false;
    },
    getPostFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getPostRequest, getPostFailure, getPostSuccess } = dataSlice.actions;
export default dataSlice.reducer;

export const getPosts = () => async (dispatch) => {
  dispatch(getPostRequest());
  try {
    const response = await axios.get('https://api.covid19api.com/total/country/uzbekistan');
    dispatch(getPostSuccess(response.data));
  } catch (e) {
    dispatch(getPostFailure());
  }
};

export const getPostsCountry = (country) => async (dispatch) => {
  dispatch(getPostRequest());
  try {
    const response = await axios.get(`https://api.covid19api.com/total/country/${country}`);
    dispatch(getPostSuccess(response.data));
  } catch (e) {
    dispatch(getPostFailure());
  }
};
