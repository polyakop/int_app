import React, { useState } from "react";
import { UserPropsType } from "../../../types/types";
import css from './SumAddModal.module.css'

import { useDispatch} from 'react-redux';
import { Button, Space } from "antd";
import { CloseCircleTwoTone } from '@ant-design/icons';
import { AppDispatchType } from "../../redux/redux-store";
import { actions } from "../../redux/profile-reducer";


type PropsType = {
    sumValue: number
    addedSum: (sum: number) => void
    setIsSumClicked: (isSumClicked: boolean) => void
}

export type SelectedUserType = UserPropsType


export const SumAddModal: React.FC<PropsType> = ({ sumValue, addedSum, setIsSumClicked }) => {

    const dispatch: AppDispatchType = useDispatch()
    const [inputValue, setInputValue] = useState<number>(0)

    const onOkClick = (sum: number) => {

        dispatch(actions.addSum(sum))

        setIsSumClicked(false)

    }


    return (
        <div
        // className={css.modalBackground}
        >
            <div className={css.modalContainer}>
                <div className={css.CloseBtn}>
                    <button onClick={() => setIsSumClicked(false)} ><CloseCircleTwoTone twoToneColor={'white-black'}
                    /></button>
                </div>
                <div className={css.title}>
                    Sum Form
                </div>

                <div className={css.body}>
                    <label htmlFor="input">Enter sum</label>
                    <input type="number" id="input" value={inputValue} onChange={(e) => { setInputValue(+e.currentTarget.value) }} />

                </div>


                <div className={css.footer}>
                    <Space direction="horizontal">
                        <Button type="primary" size={"small"} style={{ backgroundColor: "#fee600", color: 'black' }} onClick={() => onOkClick(inputValue)} >OK</Button>
                        <Button type="primary" size={"small"} style={{ backgroundColor: "#fee600", color: 'black' }} onClick={() => setIsSumClicked(false)}>Cancel</Button>
                    </Space>
                </div>

            </div>
        </div>
    )
}

