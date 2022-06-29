import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchArticles } from './articlesAPI';
import { Types } from '../../types/app';

interface ArticlesState {
  articles: Types.Article[]
  isLoadingArticles: boolean;
}

const initialState = { articles: [], isLoadingArticles: false, } as ArticlesState;

export const fetchArticlesAsync = createAsyncThunk(
  'articles/fetchArticles',
  async ({ query, page }: { query: string, page: number }) => {
    const response = await fetchArticles(query, page);
    return response;
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesAsync.pending, (state) => {
        state.isLoadingArticles = true;
      })
      .addCase(fetchArticlesAsync.fulfilled, (state, action) => {
        state.isLoadingArticles = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticlesAsync.rejected, (state) => {
        state.isLoadingArticles = false;
      });
  }
});

export default articlesSlice.reducer;
