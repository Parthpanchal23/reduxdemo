import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: "hello"
    }]
}


export const todoSlice = createSlice({
    name: "Todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), text: action.payload
            };

            state.todospush(todo);

        },
        removeTodoo: (state, action) => {
            state.todos = state.todos.filter((rodo) => rodo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const id = state.action.payload.id;

        }

    }
});

export const { addTodo, removeTodoo } = todoSlice.actions;

export default todoSlice.reducer;