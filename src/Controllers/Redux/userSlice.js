import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: [{}],
  reducers: {
    getUsers: (state) => {
      state.push({ name: "Renato Velasquez" });
      state.push({ name: "John Smith" });
    },
  },
});

export default slice.reducer;
export const { getUsers } = slice.actions;
