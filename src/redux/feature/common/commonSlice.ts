import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { getUserData } from "../../../api/login";

const initialState = {
  error: false,
  loading: false,
  userData: <any>{},
};

//Selectors
export const dataFetchPoint = ({ common }: RootState) => ({
  error: common.error,
  loading: common.loading,
  userData: common.userData,
});

export const getUserDataHandler = createAsyncThunk(
  "common/getUserDataHandler",
  async () => {
    return await getUserData();
  }
);

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.userData = action.payload;
    },
    resetData: (state) => {
      state.userData = <any>{};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserDataHandler.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getUserDataHandler.fulfilled, (state, action: any) => {
        state.loading = true;
        state.error = false;
        if (action.payload) {
          state.userData = action.payload;
        }
      })
      .addCase(getUserDataHandler.rejected, (state, error) => {
        state.loading = true;
        state.error = false;
        console.log(error, "error");
      });
  },
});

export const { setData, resetData } = commonSlice.actions;

export default commonSlice.reducer;
