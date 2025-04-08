import { None, Option, Some } from '@hqoss/monads';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Vehicle, multipleVehiclesDecoder, MultipleVehicles } from '../../types/vehicle';
import * as R from 'ramda';

export interface VehiclesViewerArticle {
  article: Vehicle;
  isSubmitting: boolean;
}

export interface VehiclesViewerState {
  vehicles: Option<readonly VehiclesViewerArticle[]>;
  currentPage: number;
}

const initialState: VehiclesViewerState = {
  vehicles: None,
  currentPage: 1,
};

const slice = createSlice({
  name: 'vehiclesViewer',
  initialState,
  reducers: {
    startLoadingVehicles: () => initialState,
    loadVehicles: (state, { payload: { vehicles } }: PayloadAction<MultipleVehicles>) => {
      state.vehicles = Some(vehicles.map((article) => ({ article, isSubmitting: false })));
    },
  },
});

export const { startLoadingVehicles, loadVehicles } =
  slice.actions;

export default slice.reducer;
