import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import {URL} from '../config'

// URL: process.env.REACT_APP_backendURL;

// console.log(URL);

export const FetchUserAnswers = createAsyncThunk(
  "answers/FetchAnswers",
  async function (username, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`${process.env.REACT_APP_backendURL}/answers/${username}`);
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

export const FetchStaffAnswers = createAsyncThunk(
  "answers/FetchAnswers",
  async function (answerfrom, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_backendURL}/answers/${answerfrom}`
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

export const addAnswer = createAsyncThunk(
  "users/addAnswer",
  async function (answer, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`${process.env.REACT_APP_backendURL}/answers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answer),
      });
      if (!response.ok) {
        throw new Error("Cant delete");
      }

      const data = await response.json();

      dispatch(addAnswersState(data));

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const answersSlice = createSlice({
  name: "answers",
  initialState: {
    answers: [],
    statusAnswers: null,
    errorAnswers: null,
  },
  reducers: {
    getAnswers: (state, action) => {
      state.answers = action.payload;
    },
    addAnswersState: (state, action) => {
      state.answers.push(action.payload);
    },
  },
  extraReducers: {
    [FetchUserAnswers.pending]: (state, action) => {
      state.statusAnswers = "loading";
      state.errorAnswers = null;
    },
    [FetchUserAnswers.fulfilled]: (state, action) => {
      state.statusAnswers = "resolved";
      state.answers = action.payload;
    },
    [FetchUserAnswers.rejected]: (state, action) => {
      state.statusAnswers = "rejected";
      state.errorAnswers = action.payload;
    },
    [FetchStaffAnswers.pending]: (state, action) => {
      state.statusAnswers = "loading";
      state.errorAnswers = null;
    },
    [FetchStaffAnswers.fulfilled]: (state, action) => {
      state.statusAnswers = "resolved";
      state.answers = action.payload;
    },
    [FetchStaffAnswers.rejected]: (state, action) => {
      state.statusAnswers = "rejected";
      state.errorAnswers = action.payload;
    },
  },
});

export const { addAnswersState, getAnswers } = answersSlice.actions;

export default answersSlice.reducer;
