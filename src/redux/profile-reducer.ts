import { FormAction } from 'redux-form';
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { UserPropsType } from '../../types/types';
import { UserFormValueType } from '../Comps/UserAddModal/UserAddModal';


const types = {
    ADD_USER: 'int_app/profile/ADD_USER' as 'gp-network/profile/ADD_USER',
    ADD_SUM: 'int_app/profile/ADD_SUM' as 'gp-network/profile/ADD_SUM',

}

let initialState = {
    userData: [
        {
            userName: 'Марина Евгеньевна А',
            userId: '00-01',
            tel: '+7 963 915-11-60',
            bData: 'Сбербанк'
        },
        {
            userName: 'Анна Александровна П',
            userId: '00-02',
            tel: '+7 963 911-39-60',
            bData: 'Сбербанк'
        },
        {
            userName: 'Муслима Домлоджоновна Н',
            userId: '00-03',
            tel: '+7 987 948-35-69',
            bData: 'Сбербанк'
        },
        {
            userName: 'Наргиза Уктамжоновна Б',
            userId: '00-04',
            tel: '+7 987 437-77-37',
            bData: 'Сбербанк'
        },
        {
            userName: 'Илхомджон Икромович С',
            userId: '00-05',
            tel: '+7 996 723-11-51',
            bData: 'Сбербанк'
        },



    ] as Array<UserPropsType>,
    sum: 0 as number

};

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case types.ADD_USER: {

            return {
                ...state,
                userData: [...state.userData, { userName: action.userData.userName, userId: ('00-0' + String((state.userData.length + 1))) , tel: action.userData.tel, bData: action.userData.bData }]
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
    addUserData: (userData: UserFormValueType) => ({ type: types.ADD_USER, userData } as const),
    addSum: (sum: number) => ({ type: types.ADD_SUM, sum } as const),

}

export default profileReducer

/* thunk */
export const setSum = (sum: number): ThunkType => async (dispatch, getState) => {
    debugger
    console.log('dispatching sum')
    dispatch(actions.addSum(sum));
}


export type InitialStateType = typeof initialState
type ActionsTypes = ReturnType<InferActionsTypes<typeof actions>>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>