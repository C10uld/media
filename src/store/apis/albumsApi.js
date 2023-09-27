import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/* An API endpoint is a digital location where an API receives requests
about a specific resource on its server. URL(Uniform Resource Locator)*/

const albumsApi = createApi({
  /* When we create an API, we get back a slice, somg thunks, action creators
    and then a set of automatically generated hooks. */
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        //for deciding what the name of a hook
        query: (user) => {
          //This function called with user object
          return {
            url: "/albums", //url
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

export const { useFetchAlbumsQuery } = albumsApi;
export { albumsApi };
