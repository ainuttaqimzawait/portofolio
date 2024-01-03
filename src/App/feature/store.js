import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// import thunk from "redux-thunk";
import styleReducer from "./pagination/reducer";
import { thunk } from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let rootReducers = combineReducers({
    setStyle: styleReducer,
});

const store = createStore(rootReducers, composeEnhancer(applyMiddleware(thunk)));
export default store;