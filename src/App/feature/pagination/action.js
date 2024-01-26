import { BACK, BACKINTERVAL, ENDPAGE, NEXT, NEXTINTERVAL } from "./constant"

export const nextPageInterval = (value) => {
    return {
        type: NEXTINTERVAL,
        value: value
    }
};

export const next = (value) => {
    return {
        type: NEXT,
        value: value
    }
};

export const nextPage = (value) => {
    return async (dispatch, getState) => {
        dispatch(nextPageInterval(value));
        await setTimeout(() => dispatch(next(value)), 500)
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
        await setTimeout(() => dispatch(back(value)), 500)
    }
};

export const endPage = (value) => {
    return async (dispatch, getState) => {
        for (let index = 1; index < value; index++) {
            await setTimeout(() => {
                dispatch(nextPageInterval(index));
                setTimeout(() => dispatch(next(index)), 300)
            }, (index + 1) * 200 + 100)
        }
    }
}

export const backHome = (value) => {
    return async (dispatch, getState) => {
        for (let index = 6; index > value; index--) {
            await setTimeout(() => {
                dispatch(backPageInterval(index));
                setTimeout(() => dispatch(back(index)), 300)
            }, (4 - index) * 200 + 100)
        }
    }
}