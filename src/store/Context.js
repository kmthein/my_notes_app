import { createContext, useReducer } from "react";

const initialState = {
    blogs: [],
}

export const ContextData = createContext({
    blogs: [],
    addTask: () => {},
    toggleDone: () => {},
    deleteTask: () => {}
});

const blogReducer = (state, action) => {
    if(action.type === "ADD_TASK") {
        let updatedTasks = [...state.blogs];
        updatedTasks = state.blogs.concat(action.task);

        return {
            blogs: updatedTasks
        }
    }

    if(action.type === "TOGGLE_DONE") {
        let updatedTasks;
        const currentTaskIndex = state.blogs.findIndex(task => task.id === action.id);
        console.log(currentTaskIndex);
        const currentTask = state.blogs[currentTaskIndex];
        console.log(action.bool);
        const updatedTask = {
            ...currentTask,
            done: action.bool
        }
        updatedTasks = [...state.blogs]
        updatedTasks[currentTaskIndex] = updatedTask;

        return {
            blogs: updatedTasks
        }
    }

    if(action.type === "DELETE_TASK") {
        let updatedTasks;
        const currentTaskIndex = state.blogs.findIndex(task => task.id === action.id);
        const currentTask = state.blogs[currentTaskIndex];
        updatedTasks = state.blogs.filter(task => task.id != action.id);

        return {
            blogs: updatedTasks
        }
    }

    return initialState;
}

const ContextDataProvider = (props) => {
    const [state, dispatch] = useReducer(blogReducer, initialState)

    const addTaskHandler = (task) => {
        dispatch({type: "ADD_TASK", task})
    }

    const toggleDoneHandler = (id, bool) => {
        dispatch({type: "TOGGLE_DONE", id, bool})
    }

    const deleteTaskHandler = (id) => {
        dispatch({type: "DELETE_TASK", id})
    }

    const blogCtx = {
        blogs: state.blogs,
        addTask: addTaskHandler,
        toggleDone: toggleDoneHandler,
        deleteTask: deleteTaskHandler
    }

    return (
        <ContextData.Provider value={blogCtx}>
            {props.children}
        </ContextData.Provider>
    )
}

export default ContextDataProvider;