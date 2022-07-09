/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";

export interface InitialStateType {
  showModal: boolean;
  modalChildren: ReactNode | undefined;
  isTablet: boolean;
  isMobile: boolean;
  deviceTypeString: "desktop" | "mobile";
}

const initialState: InitialStateType = {
  showModal: false,
  modalChildren: undefined,
  isMobile: false,
  isTablet: false,
  deviceTypeString: "desktop"
};

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<ReactNode>) => {
      state.showModal = true;
      state.modalChildren = action.payload;
    },
    closeModal: state => {
      state.showModal = false;
    },
    setDeviceType: (
      state,
      {
        payload
      }: PayloadAction<{ type: "isMobile" | "isTablet"; value: boolean }>
    ) => {
      state[payload.type] = payload.value;

      if (state.isMobile || state.isTablet) {
        state.deviceTypeString = "mobile";
      } else {
        state.deviceTypeString = "desktop";
      }
    }
  }
});

export const { setModal, closeModal, setDeviceType } = rootSlice.actions;

export default rootSlice.reducer;
