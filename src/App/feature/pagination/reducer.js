import { BACK, BACKINTERVAL, ENDPAGE, NEXT } from "./constant";

let initialState = {
    data: ['z-4', 'z-3', 'z-2'],
}

export default function styleReducer(state = initialState, action) {
    switch (action.type) {
        case NEXT:
            state.data[action.value] = `z-${4 + action.value} turn`;
            return {
                ...state, data: [...state.data]
            }
        case BACKINTERVAL:
            state.data[action.value] = `z-${4 + action.value}`;
            return {
                ...state, data: [...state.data]
            }
        case BACK:
            state.data[action.value] = `z-${4 - action.value}`;
            return {
                ...state, data: [...state.data]
            }
        default:
            return state
    }
}