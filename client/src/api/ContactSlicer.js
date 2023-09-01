import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const FetchContactUsMessages = createAsyncThunk(
  "contactus/FetchContactUsMessage",
  async function (_, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_backendURL}/contactus`
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

export const addContactUsMessage = createAsyncThunk(
  "contactus/addContactUsMessage",
  async function (question, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`${process.env.REACT_APP_backendURL}/contactus`, {
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

      dispatch(addContactUsState(data));

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const DeleteContactMessage = createAsyncThunk(
  "contactus/DeleteContactMessage",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_backendURL}/contactus/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Cant delete");
      }

      dispatch(deleteContactMessage(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const contactUsSlice = createSlice({
    name: "contactus",
    initialState: {
      contactUsMessages: [],
      statusContactUs: null,
      errorContactUs: null,
    },
    reducers: {
      addContactUsState: (state, action) => {
        state.contactUsMessages.push(action.payload);
      },
      deleteContactMessage: (state, action) => {
        state.contactUsMessages = state.contactUsMessages.filter(
          (message) => message.id !== action.payload
        );
      },
    },
    extraReducers: {
      [FetchContactUsMessages.pending]: (state, action) => {
        state.statusContactUs = "loading";
        state.errorContactUs = null;
      },
      [FetchContactUsMessages.fulfilled]: (state, action) => {
        state.statusContactUs = "resolved";
        state.contactUsMessages = action.payload;
      },
      [FetchContactUsMessages.rejected]: (state, action) => {
        state.statusContactUs = "rejected";
        state.errorContactUs = action.payload;
      },
    },
  });
  
  export const { addContactUsState, deleteContactMessage } =
  contactUsSlice.actions;
  
  export default contactUsSlice.reducer;