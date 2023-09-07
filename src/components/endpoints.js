import baseApi from "../app/baseApi";

export let endpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),
    createUsers: builder.mutation({
      query: (user) => {
        console.log(user);
        return {
          url: "/users",
          method: "POST",
          body: {
            id: crypto.randomUUID().split("-")[0],
            ...user,
          },
        };
      },
      invalidatesTags: ["Users"],
    }),

    updateUsers: builder.mutation({
      query: ({ id, user }) => {
        console.log({ id, user });
        return {
          url: `/users/${id}`,
          method: "PUT",
          body: user,
        };
      },
      invalidatesTags: ["Users"],
    }),

    deleteUsers: builder.mutation({
      query: (id) => {
        return {
          url: `/users/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Users"],
    }),
  }),
});

export let {
  useGetUsersQuery,
  useCreateUsersMutation,
  useUpdateUsersMutation,
  useDeleteUsersMutation,
} = endpoints;
