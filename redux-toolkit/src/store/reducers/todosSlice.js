import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//C1: Redux thunk
export const getTodos = createAsyncThunk("todos/todosFetched", async () => {
  try {
    const response = await axios.get(
      "https://express-mongodb-todos.herokuapp.com/api/v1/todos"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  try {
    const response = await axios.delete(
      `https://express-mongodb-todos.herokuapp.com/api/v1/todos/${id}`
    );
    return id
  } catch (error) {
    console.log(error);
  }
})
//create initialState
const initialState = {
  todos: [],
};
//C2: Action Creators
export const getData = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://express-mongodb-todos.herokuapp.com/api/v1/todos"
    );
    dispatch(fetchData(response.data));
  } catch (error) {
    console.log(error);
  }
};
export const getDataTwo = () => {
  const getDataAsync = async (dispatch) => {
    try {
      const response = await axios.get(
        "https://express-mongodb-todos.herokuapp.com/api/v1/todos"
      );
      dispatch(fetchData(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  return getDataAsync;
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // addTodo: (state, action) => {
    //     console.log(action)
    //     state.todos.unshift(action.payload)
    // },
    addTodo: {
      reducer(state, action) {
        state.todos = [...state.todos, action.payload];
      },
      prepare(data) {
        return {
          payload: {
            _id: Math.floor(Math.random() * 10000),
            title: data.title,
            description: data.description,
            completed: false,
          },
        };
      },
    },
    markComplete: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo._id === action.payload) todo.completed = !todo.completed;
        return todo;
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
    fetchData: (state, action) => {
      state.todos = action.payload;
    },
  },
  extraReducers: {
    [getTodos.pending]: (state, action) => {
      console.log("Get todos from backend ....");
    },
    [getTodos.fulfilled]: (state, action) => {
      console.log("Successfully!");
      state.todos = action.payload;
    },
    [getTodos.rejected]: (state, action) => {
      console.log("Failed to get todos!!!");
    },
    [deleteTodo.pending]: (state, action) => {
      console.log("Deleting todo pending...")
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
    [deleteTodo.rejected]: (state, action) => {
      console.log("Deleting todo rejected...")
    }
  },
});
export const { addTodo, markComplete, /*deleteTodo ,*/ fetchData } =
  todosSlice.actions;
const todosReducer = todosSlice.reducer;
export default todosReducer;
