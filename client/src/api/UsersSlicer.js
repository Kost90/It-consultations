import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { AddLoginUserInfo } from "./LoginInfoSlice";


export const FetchAllUsers = createAsyncThunk(
  "users/FetchUser",
  async function (_, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`${process.env.REACT_APP_backendURL}/users`);

      if (!response.ok) {
        console.log("error");
        throw new Error("Server error");
      }
      const data = await response.json();

      console.log(data);

      dispatch(addUser(data));

      return await data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const AddNewUser = createAsyncThunk(
  "users/AddNewUser",
  async function (user, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`${process.env.REACT_APP_backendURL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error("Cant delete");
      }

      const data = await response.json();

      dispatch(addUser(data));
      // dispatch(AddLoginUserInfo(data));

      return await data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: null,
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    logOut: (state, action) => {
      state.question = action.payload;
    },
  },
  extraReducers: {
    [AddNewUser.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [AddNewUser.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.users = action.payload;
    },
    [AddNewUser.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { addUser, logOut } = usersSlice.actions;

export default usersSlice.reducer;
