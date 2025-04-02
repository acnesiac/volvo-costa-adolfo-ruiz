import { None, Option, Some } from '@hqoss/monads';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Vehicle, multipleVehiclesDecoder, MultipleVehicles } from '../../types/vehicle';
import * as R from 'ramda';

export interface ArticleViewerArticle {
  article: Vehicle;
  isSubmitting: boolean;
}

export interface ArticleViewerState {
  articles: Option<readonly ArticleViewerArticle[]>;
  currentPage: number;
  articlesCount: number;
}

const initialState: ArticleViewerState = {
  articles: None,
  currentPage: 1,
  articlesCount: 0,
};

const slice = createSlice({
  name: 'vehiclesViewer',
  initialState,
  reducers: {
    startLoadingVehicles: () => initialState,
    loadVehicles: (state, { payload: { articles, articlesCount } }: PayloadAction<MultipleVehicles>) => {
      state.articles = Some(articles.map((article) => ({ article, isSubmitting: false })));
      state.articlesCount = articlesCount;
    },
  },
});

export const { startLoadingVehicles, loadVehicles } =
  slice.actions;

export default slice.reducer;
