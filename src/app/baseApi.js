import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:4000` }),
  endpoints: (builder) => ({}),
  
});

export default baseApi;
