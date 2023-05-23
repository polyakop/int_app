/* Selectors */

import { AppStateType } from "./redux-store"

export const getUser = (state:AppStateType) => {
    return state.profilePage.userData
}

export const getSum = (state:AppStateType) => {
    return state.profilePage.sum
}



