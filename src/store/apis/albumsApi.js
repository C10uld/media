import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const albumsApi = createApi({
  /* When we create an API, we get back a slice, somg thunks, action creators
    and then a set of automatically generated hooks. */
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchAlbus: builder.query({
        //for deciding what the name of a hook
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id, // ?userId = user.id //Key
            },
            method: "GET",
          };
        },
      }),
    };
  },
});
