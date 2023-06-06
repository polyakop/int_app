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
                        <CloseCircleTwoTone twoToneColor={'white-black'} style={{ fontSize: '40px' }} />
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
                    <div data-title> Со счета </div>
                    <div data-atrib> *3721598</div>
                    <div data-title> Получатель </div>
                    <div data-atrib>
                        <div > {selectedUser?.userName}</div>
                        <div >{selectedUser?.tel} </div>
                        <div >{selectedUser?.bData} </div>
                    </div>


                    <div data-trans> Через СБП</div>
                    <img src={logo} alt="SBP logo" />
                    <div className={css.line}></div>
                    <div className={css.line2}></div>

                </div>



            </div>
        </div>
    )
}

