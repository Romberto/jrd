import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CardType } from "../utils/types";

export const seminarApi = createApi({
  reducerPath: "seminarApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (build) => ({
    getSeminars: build.query<CardType[], undefined>({
      query: () => "seminars/",
    }),
  }),
});

export const { useGetSeminarsQuery } = seminarApi;
