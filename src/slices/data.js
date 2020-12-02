import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { sortBy } from 'lodash';
import { endLoading } from '../loading';

export const initialState = {
  posts: [],
  hasErrors: false,
  countries: [],
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
      state.hasErrors = false;
    },
    getPostFailure: (state) => {
      state.hasErrors = true;
    },
    getPostsCountryRequest: (state) => {
      state.loading = true;
    },
    getPostsCountrySuccess: (state, { payload: posts }) => {
      state.posts = posts;
      state.hasErrors = false;
    },
    getPostsCountryFailure: (state) => {
      state.hasErrors = true;
    },
    getCountriesRequest: (state) => state,
    getCountriesSuccess: (state, { payload: data }) => {
      state.countries = sortBy(data.Countries, 'Country');
      state.hasErrors = false;
    },
    getCountriesFailure: (state) => {
      state.hasErrors = true;
    },
  },
});

export const {
  getPostRequest, getPostFailure, getPostSuccess,
  getPostsCountryRequest, getPostsCountryFailure, getPostsCountrySuccess,
  getCountriesRequest, getCountriesFailure, getCountriesSuccess,
} = dataSlice.actions;
export default dataSlice.reducer;

export const getPosts = () => async (dispatch) => {
  dispatch(getPostRequest());
  try {
    const response = await axios.get('https://api.covid19api.com/total/country/afghanistan');
    dispatch(getPostSuccess(response.data));
    endLoading();
  } catch (e) {
    dispatch(getPostFailure());
    endLoading();
  }
};

export const getPostsCountry = (country) => async (dispatch) => {
  dispatch(getPostsCountryRequest());
  try {
    const response = await axios.get(`https://api.covid19api.com/total/country/${country}`);
    dispatch(getPostsCountrySuccess(response.data));
    endLoading();
  } catch (e) {
    dispatch(getPostsCountryFailure());
    endLoading();
  }
};

export const getCountries = () => async (dispatch) => {
  dispatch(getCountriesRequest());
  try {
    const response = await axios.get('https://api.covid19api.com/summary');
    dispatch(getCountriesSuccess(response.data));
    endLoading();
  } catch (e) {
    dispatch(getCountriesFailure());
    endLoading();
  }
};
