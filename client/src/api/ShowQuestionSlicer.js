import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const ShowQuestionSlicer = createSlice({
    name: "show",
    initialState: {
        showQuestion: false,
        showAnswer:false,
    },
    reducers: {
      ShowQ: (state, action) => {
        state.showQuestion = action.payload;
      },
    },
  });
  
  
  export const { ShowQ } = ShowQuestionSlicer.actions;
  
  export default ShowQuestionSlicer.reducer;