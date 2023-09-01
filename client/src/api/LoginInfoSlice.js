import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const FetchLoginUser = createAsyncThunk(
  "logininfo/FetchLoginUser",
  async function (username, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_backendURL}/loginuser/${username}`
      );

      if (!response.ok) {
        console.log("error");
        throw new Error("User not found or password not a match");
      }
      const data = await response.json();

      dispatch(addloginInfo(data));

      return await data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const GetUserInfo = createAsyncThunk(
  "users/FetchUser",
  async function (LogInfo, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_backendURL}/users/${LogInfo.password}/${LogInfo.username}`
      );

      if (!response.ok) {
        console.log("error");
        throw new Error("User not found or password not a match");
      }
      const data = await response.json();

      dispatch(addloginInfo(data));
      dispatch(AddLoginUserInfo(data));

      return await data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const AddLoginUserInfo = createAsyncThunk(
  "logininfo/AddLoginUserInfo",
  async function (user, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_backendURL}/loginuser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (!response.ok) {
        throw new Error("Cant delete");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const DeleteLoginUser = createAsyncThunk(
  "logininfo/DeleteLoginUser",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_backendURL}/loginuser/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Cant delete");
      }

      dispatch(removeLoginUser(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const loginSlice = createSlice({
  name: "logininfo",
  initialState: {
    LoginUser: [],
    statuslogin: null,
    errorlogin: null,
  },
  reducers: {
    addloginInfo: (state, action) => {
      state.LoginUser = action.payload;
    },
    removeLoginUser: (state, action) => {
      state.LoginUser = state.LoginUser.filter(
        (user) => user.id !== action.payload
      );
    },
  },
  extraReducers: {
    [FetchLoginUser.pending]: (state, action) => {
      state.statuslogin = "loading";
      state.errorlogin = null;
    },
    [FetchLoginUser.fulfilled]: (state, action) => {
      state.statuslogin = "resolved";
      state.logininfo = action.payload;
    },
    [FetchLoginUser.rejected]: (state, action) => {
      state.statuslogin = "rejected";
      state.errorlogin = action.payload;
    },
    [GetUserInfo.pending]: (state, action) => {
      state.statuslogin = "loading";
      state.errorlogin = null;
    },
    [GetUserInfo.fulfilled]: (state, action) => {
      state.statuslogin = "resolved";
      state.logininfo = action.payload;
    },
    [GetUserInfo.rejected]: (state, action) => {
      state.statuslogin = "rejected";
      state.errorlogin = action.payload;
    },
  },
});

export const { addloginInfo, removeLoginUser } = loginSlice.actions;

export default loginSlice.reducer;
