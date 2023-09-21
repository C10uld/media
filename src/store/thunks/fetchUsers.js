import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const reponse = await axios.get("http://localhost:3005/users");

  //DEV ONLY - test 위함
  await pause(1000);

  return reponse.data;
});

//DEV ONLY - test 위함
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
