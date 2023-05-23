import { FormAction} from 'redux-form';
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { UserPropsType } from '../../types/types';


const types = {
    ADD_USER: 'int_app/profile/ADD_USER' as 'gp-network/profile/ADD_USER',
    ADD_SUM: 'int_app/profile/ADD_SUM' as 'gp-network/profile/ADD_SUM',
   
}

let initialState = {
    userData: [
        {userName: 'Марина Евгеньевна А',  userId: '00-01',
tel: '+7(963) 915-11-60',
bank: 'Сбербанк'},
    ] as Array<UserPropsType>,
sum: 0 as number
       
};

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case types.ADD_USER: {
            
            return {
                ...state,
                userData: [...state.userData, { userName: action.userData.userName, userId: '00-02', tel: action.userData.tel, bank: action.userData.bank}]
            }
        }

        case types.ADD_SUM: {
            
            return {
                ...state,
                sum: action.sum
            }
        }

        
        default:
            return state;
    }
}

/* Создание объектов action */
export const actions = {
    addUserData: (userData: UserPropsType) => ({ type: types.ADD_USER, userData } as const),
    addSum: (sum: number) => ({ type: types.ADD_SUM, sum } as const),

}

export default profileReducer

/* thunk */
export const getUserProfile = (userId: number): ThunkType => async (dispatch, getState) => {
    // dispatch(actions.profileToggleIsFetching(true));

    // const data = await profileAPI.getProfile(userId)
    // dispatch(actions.setUserProfile(data));
    // dispatch(actions.profileToggleIsFetching(false));
}


export type InitialStateType = typeof initialState
type ActionsTypes = ReturnType<InferActionsTypes<typeof actions>>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>