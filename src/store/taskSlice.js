import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  tasks: [
    {
      id: 1,
      title: "plain redux 1",
      detail: "write the technical post on redux",
    },
    {
      id: 2,
      title: "plain redux 2",
      detail: "write the technical post on redux",
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.isLoading = false;
      state.tasks = [
        ...state.tasks,
        { ...action.payload, id: state.tasks.length + 1 },
      ];
    },
    getTaskLoading: (state) => {
      state.isLoading = true;
    },
    updateTask: (state, { payload }) => {
      state.tasks[payload.id] = state.tasks.map((task) => {
        if (task.id === payload.id) {
          return { ...task, ...payload };
        } else {
          return task;
        }
      });
    },
    deleteTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload.id);
    },
  },
});

export const { addTask, getTask, updateTask, deleteTask } = taskSlice.actions; // generate actions
export const tasksSelector = (state) => state.tasks; // create selector

export default taskSlice.reducer;
