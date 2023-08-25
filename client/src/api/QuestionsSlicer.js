import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import {URL} from '../config'

const URL = process.env.REACT_APP_backendURL;

export const FetchStaffQuestions = createAsyncThunk(
  "questions/FetchQuestion",
  async function (username, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_backendURL}/questions/staff/${username}`
      );

      if (!response.ok) {
        console.log("error");
        throw new Error("Server error");
      }
      const data = await response.json();

      return await data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const FetchUserQuestion = createAsyncThunk(
  "questions/FetchQuestion",
  async function (username, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_backendURL}/questions/${username}`
      );

      if (!response.ok) {
        console.log("error");
        throw new Error("Server error");
      }
      const data = await response.json();

      return await data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addQuestion = createAsyncThunk(
  "users/addQuestion",
  async function (question, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`${process.env.REACT_APP_backendURL}/questions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(question),
      });
      if (!response.ok) {
        throw new Error("Cant delete");
      }

      const data = await response.json();

      dispatch(addQuestionState(data));

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    question: [],
    statusQuestions: null,
    errorQuestions: null,
  },
  reducers: {
    getQuestions: (state, action) => {
      state.question = action.payload;
    },
    addQuestionState: (state, action) => {
      state.question.push(action.payload);
    },
    logOutQuestions: (state, action) => {
      state.question = action.payload;
    },
  },
  extraReducers: {
    [FetchUserQuestion.pending]: (state, action) => {
      state.statusQuestions = "loading";
      state.errorQuestions = null;
    },
    [FetchUserQuestion.fulfilled]: (state, action) => {
      state.statusQuestions = "resolved";
      state.question = action.payload;
    },
    [FetchUserQuestion.rejected]: (state, action) => {
      state.statusQuestions = "rejected";
      state.errorQuestions = action.payload;
    },
    [FetchStaffQuestions.pending]: (state, action) => {
      state.statusQuestions = "loading";
      state.errorQuestions = null;
    },
    [FetchStaffQuestions.fulfilled]: (state, action) => {
      state.statusQuestions = "resolved";
      state.question = action.payload;
    },
    [FetchStaffQuestions.rejected]: (state, action) => {
      state.statusQuestions = "rejected";
      state.errorQuestions = action.payload;
    },
  },
});

export const { addQuestionState, getQuestions, logOutQuestions } =
  questionsSlice.actions;

export default questionsSlice.reducer;
