import React from "react";
import { UserPropsType } from "../../../types/types";
import css from './UserItem.module.css'
import { SelectedUserType } from "../MainPage/MainPage";



type UserItemPropsType = {
    selectedUser:SelectedUserType | null
    onUserSelected: (user: SelectedUserType) => void

}

export const UserItem: React.FC<UserPropsType & UserItemPropsType> = ({ selectedUser, onUserSelected, ...user }) => {
  
    // let isSelected = false
    // if (selectedUser) {
    //     if (user.userId=selectedUser.userId) { 
        
    //     isSelected = true
    //     console.log(user.userId, selectedUser.userId,' =', isSelected, )
    // }       
    // }
    
    return (
        // <div className={(isSelected ? ( css.userSelected): css.user) } onClick={
        <div className={selectedUser===user? css.userSelected: css.user } onClick={
            () => {
                onUserSelected({
                    userName: user.userName,
                    userId: user.userId,
                    tel: user.tel,
                    bData: user.bData
                })
            }
        }>
            <p data-user='tel'>{user.tel}</p>
            <div data-user='name'>({user.userName})</div>

        </div>
    )
}