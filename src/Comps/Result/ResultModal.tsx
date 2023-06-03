import React, { useState } from "react";
import { UserPropsType } from "../../../types/types";
import css from './ResultModal.module.css'
import logo from '../../Assets/Img/SBP.png'


import { useDispatch } from 'react-redux';
import { CloseCircleTwoTone, CheckOutlined } from '@ant-design/icons';
import { AppDispatchType } from "../../redux/redux-store";
import { actions } from "../../redux/profile-reducer";


type PropsType = {
    sum: number
    selectedUser: UserPropsType | null
    setIsResultClicked: (isSumClicked: boolean) => void
}

export type SelectedUserType = UserPropsType


export const ResultModal: React.FC<PropsType> = ({ sum, selectedUser, setIsResultClicked }) => {

    const dispatch: AppDispatchType = useDispatch()


    return (
        <div
        // className={css.modalBackground}
        >
            <div className={css.modalContainer}>
                <div className={css.CloseBtn}>
                    <button onClick={() => setIsResultClicked(false)} >
                        <CloseCircleTwoTone twoToneColor={'white-black'} style={{fontSize:'40px'}} />
                        </button>
                </div>
                <div className={css.title}>
                    Успешно
                    <div className={css.checkSign} >
                        <CheckOutlined style={{ fontSize: '30px' }} />
                    </div>
                </div>


                <div className={css.body}>
                    <p>Перевели по номеру телефона </p>
                    <p>без комиссии</p>
                    <div className={css.sum}>
                        <p style={{ fontSize: '26px', marginTop: '17px' }}>{sum}</p>
                        <p>,00 ₽</p>
                       
                    </div>

                    
                </div>
                <div className={css.additionalInfo}>
                    <div data-title='count'> Со счета </div>
                    <div data-atrib='number'> *3721598</div>
                    <div data-title='user'> Получатель </div>
                    <div data-atrib='userName'> {selectedUser?.userName}</div>
                    <div data-atrib='tel'>{selectedUser?.tel} </div>
                    <div data-atrib='bData'>{selectedUser?.bData} </div>
                    
                    <div data-trans> Через СБП</div>
                    <img src= {logo} alt="SBP logo" />
                    <div className={css.line}></div>
                    <div className={css.line2}></div>

                </div>



            </div>
        </div>
    )
}

