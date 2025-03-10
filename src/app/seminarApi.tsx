import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CardType } from "../utils/types";

export const seminarApi = createApi({
  reducerPath: "seminarApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Seminars"],
  endpoints: (build) => ({
    getSeminars: build.query<CardType[], undefined>({
      query: () => "seminars?_sort=id&_order=desc",
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.map(({ id }) => ({ type: "Seminars", id } as const)),
              { type: "Seminars", id: "LIST" },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
            [{ type: "Seminars", id: "LIST" }],
    }),
    getSeminarById: build.query<CardType, string>({
      query: (id) => `seminars/${id}`,
    }),
    addSeminar: build.mutation<undefined, CardType>({
      query: (body) => ({
        url: `seminars/`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: [{ type: "Seminars", id: "LIST" }],
    }),
    editSeminar: build.mutation<string, CardType>({
      query: (body) => ({
        url: `seminars/${body.id}`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: [{ type: "Seminars", id: "LIST" }],
    }),
    removeSeminar: build.mutation<undefined, string>({
      query:(id)=>({
        url: `seminars/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Seminars", id: "LIST" }],
    })
  }),
});

export const {
  useGetSeminarsQuery,
  useAddSeminarMutation,
  useEditSeminarMutation,
  useRemoveSeminarMutation
} = seminarApi;
