import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const Api = createApi({
  reducerPath: "Api",
  // baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.200.23:8000/User" }),

  // global configuration for the api
  keepUnusedDataFor: 30,
  // global configuration for the api
  refetchOnMountOrArgChange: 30,
  // global configuration for the api
  refetchOnFocus: true,
  // global configuration for the api
  refetchOnReconnect: true,
  // baseQuery: fetchBaseQuery({
  //   baseUrl: "https://jsonplaceholder.typicode.com",
  // }),
  // baseQuery: fetchBaseQuery({
  //   baseUrl: "https://official-joke-api.appspot.com/jokes/",
  // }),
  // baseQuery: fetchBaseQuery({
  //   baseUrl: "https://authentic-portfolio.herokuapp.com/user",
  // }),
  // baseQuery: fetchBaseQuery({
  //   baseUrl: "https://blockchain.info/",
  // }),
  tagTypes: ["All"],
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => `all`,
      providesTags: ["All"],
    }),

    Getall: builder.mutation({
      query: () => ({
        method: "GET",

        url: "/all",
      }),
      invalidatesTags: ["All"],
    }),
    getPhotos: builder.query({
      query: () => "photos",
    }),
    getPhotoById: builder.query({
      query: (photoId) => `photos/${photoId}`,
    }),
    getJokeByType: builder.mutation({
      query: (type) => `${type}/random`,
    }),

    Signin: builder.mutation({
      query: (data) => (
        console.log(data),
        {
          url: "/signin",
          method: "POST",
          body: data,
        }
      ),
      headers: {
        "Content-Type": "application/json",
      },
    }),
    Signup: builder.mutation({
      query: (data) => (
        console.log(data),
        {
          url: "/signup",
          method: "POST",
          body: data,
        }
      ),
      headers: {
        "Content-Type": "application/json",
      },
    }),
    otpGet: builder.mutation({
      query: (id) => (
        console.log("id", id),
        {
          url: `/send/otp/${id}`,
          method: "GET",
        }
      ),
    }),
    getUser: builder.mutation({
      query: (id: any) => (
        console.log("id", id),
        {
          url: `/get/${id}`,
          method: "GET",
          keepUnusedDataFor: 5,
        }
      ),
    }),
    mediaGet: builder.mutation({
      query: (id: any, data: any, { formData }) => (
        console.log("media", data),
        {
          url: `/add`,
          method: "POST",
          body: formData,
        }
      ),
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),

    getDataTicker: builder.mutation({
      query: (payload) => ({
        url: `ticker`,
        method: "POST",
        body: payload,
      }),
    }),

    editData: builder.mutation({
      query: ({ formData }) => ({
        url: `ticker`,
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPokemonByNameQuery,
  useGetPhotosQuery,
  useGetPhotoByIdQuery,
  useGetJokeByTypeMutation,
  useSigninMutation,
  useSignupMutation,
  useGetDataTickerMutation,
  useEditDataMutation,
  useOtpGetMutation,
  useMediaGetMutation,
  useGetUserMutation,
  useGetallMutation,
} = Api;
