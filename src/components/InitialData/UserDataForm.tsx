import React from "react";
import { UserPropsType } from "../../../types/types";
import { getSum, getUser } from "../../redux/profile-selectors";
import { useDispatch, useSelector } from 'react-redux';

type PropsType = {}



export const UserDataForm: React.FC<PropsType> = () => {
    const user = useSelector(getUser)
    // const sum: number = useSelector(getSum)
    return (
    <div>
        User Data Form

        form
        -
            userName: null | string,
            userId: null | string,
            tel: null | string,
            bank: null | string,

        
    </div>
    )
}