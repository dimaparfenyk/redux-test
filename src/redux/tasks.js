import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tasksApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://67c096a0b9d02a9f224a588d.mockapi.io/api",
  }),

  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",

      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Tasks", id })),
              { type: "Tasks", id: "LIST" },
            ]
          : [{ type: "Tasks", id: "LIST" }],
    }),

    addTask: builder.mutation({
      query: (title) => ({
        url: "/tasks",
        method: "POST",
        body: { text: title },
      }),
      invalidatesTags: [{ type: "Tasks", id: "LIST" }],
    }),

    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Tasks", id: "LIST" }],
    }),

    updateTask: builder.mutation({
      query: (body) => ({
        url: `/tasks/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "Tasks", id: "LIST" }],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = tasksApi;
