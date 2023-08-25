import { createSlice} from "@reduxjs/toolkit";

const ShowAnswersSlicer = createSlice({
    name: "showAns",
    initialState: {
        showAnswers: false,
    },
    reducers: {
      ShowA: (state, action) => {
        state.showAnswers = action.payload;
      },
    },
    // name: "showAnswers",
    // initialState: {
    //     showAnswers: false,
    // },
    // reducers: {
    //   ShowA: (state, action) => {
    //     state.showAnswers = action.payload;
    //   },
    // },
    // name: "showAddQuestion",
    // initialState: {
    //     showAddQuestion: false,
    // },
    // reducers: {
    //   ShowAddQ: (state, action) => {
    //     state.showAddQuestion = action.payload;
    //   },
    // },
  });
  
  
  export const { ShowA } = ShowAnswersSlicer.actions;
  
  export default ShowAnswersSlicer.reducer;