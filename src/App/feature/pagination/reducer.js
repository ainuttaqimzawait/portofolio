import { BACK, BACKINTERVAL, ENDPAGE, NEXT, NEXTINTERVAL } from "./constant";

let initialState = {
    data: ['z-[9]', 'z-[8]', 'z-[7]', 'z-[6]', 'z-[5]', 'z-[4]', 'z-[3]', 'z-[2]', 'z-[1]'],
}

export default function styleReducer(state = initialState, action) {
    switch (action.type) {
        case NEXT:
            state.data[action.value] = `z-[${1 + action.value}] turn`;
            return {
                ...state, data: [...state.data]
            }
        case NEXTINTERVAL:
            state.data[action.value] = `${state.data[action.value]} turn`;
            return {
                ...state, data: [...state.data]
            }
        case BACKINTERVAL:
            state.data[action.value] = `z-[${action.value}]`;
            return {
                ...state, data: [...state.data]
            }
        case BACK:
            state.data[action.value] = `z-[${10 - action.value}]`;
            return {
                ...state, data: [...state.data]
            }
        default:
            return state
    }
}