const { configureStore, createSlice } = require("@reduxjs/toolkit");

const taskInitialState = {
    tasks: [
        {
            id: 1,
            task: "Test 1",
            done: false
        },
        {
            id: 2,
            task: "Test 2",
            done: true
        }
    ]
}

const taskSlice = createSlice({
    name: "task",
    initialState: taskInitialState,
    reducers: {
        addTask(state, action) {
            state.tasks = [...state.tasks, action.payload]
        },
        removeTask(state, action) {
            let updateTasks;
            updateTasks = state.tasks.filter(task => task.id != action.payload);
            state.tasks = updateTasks;
        },
        toggleDone(state, action) {
            let updateTasks;
            const {id, checked} = action.payload;
            const currentTaskIndex = state.tasks.findIndex(task => task.id == id);
            const currentTask = state.tasks[currentTaskIndex];
            const updateTask = {
                ...currentTask,
                done: checked
            }
            updateTasks = [...state.tasks];
            updateTasks[currentTaskIndex] = updateTask;
            state.tasks = updateTasks;
        }
    }
})

const store = configureStore({
    reducer : taskSlice.reducer
})

export const taskAction = taskSlice.actions;

export default store;