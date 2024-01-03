import { BACK, BACKINTERVAL, ENDPAGE, NEXT } from "./constant"

export const nextPage = (value) => {
    return {
        type: NEXT,
        value: value
    }
};

export const backPageInterval = (value) => {
    return {
        type: BACKINTERVAL,
        value: value
    }
};

export const back = (value) => {
    return {
        type: BACK,
        value: value
    }
};

export const backPage = (value) => {
    return async (dispatch, getState) => {
        dispatch(backPageInterval(value));
        await setTimeout(() => dispatch(back(value)), 1000)
    }
};

export const endPage = (value) => {
    return async (dispatch, getState) => {
        for (let index = 0; index < value; index++) {
            await setTimeout(() => {
                dispatch(nextPage(index));
                // setTimeout(() => dispatch(back(index)), 1000)
            }, (index + 1) * 200 + 100)
        }
    }
}

export const backHome = (value) => {
    return async (dispatch, getState) => {
        for (let index = 2; index > value; index--) {
            await setTimeout(() => {
                dispatch(backPageInterval(index));
                setTimeout(() => dispatch(back(index)), 300)
            }, (4 - index) * 200 + 100)
        }
    }
}