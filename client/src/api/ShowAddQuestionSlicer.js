import { createSlice } from "@reduxjs/toolkit";

const ShowAddQuestionsSlicer = createSlice({
  name: "showAddQuestions",
  initialState: {
    showAddQuestion: false,
  },
  reducers: {
    ShowAddQ: (state, action) => {
      state.showAddQuestion = action.payload;
    },
  },
});

export const { ShowAddQ } = ShowAddQuestionsSlicer.actions;

export default ShowAddQuestionsSlicer.reducer;
