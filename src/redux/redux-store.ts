import { combineReducers, applyMiddleware, compose, Action } from "redux";
import { legacy_createStore as createStore } from 'redux'


import ThunkMiddleware, { ThunkAction } from "redux-thunk";
import profileReducer from "./profile-reducer";





let rootReducer = combineReducers({
       profilePage: profileReducer,
   
});

export type AppStateType = ReturnType<typeof rootReducer>

export type AppDispatchType = typeof store.dispatch

export type InferActionsTypes<T> = T extends { [key: string]: infer U } ? U : never

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ThunkMiddleware)));
//@ts-ignore
window.__store__ = store;


export default store
