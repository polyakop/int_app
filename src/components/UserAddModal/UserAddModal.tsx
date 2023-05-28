import React, { useState } from "react";
import { UserPropsType } from "../../../types/types";
import css from './UserAddModal.module.css'
import { useDispatch } from 'react-redux';
import { Button, Space } from "antd";
import { CloseCircleTwoTone } from '@ant-design/icons';
import { AppDispatchType } from "../../redux/redux-store";
import { actions } from "../../redux/profile-reducer";
import { Field, Form, Formik, FormikProps } from 'formik';
import { FormikHelpers } from 'formik/dist/types';


type PropsType = {
    // sumValue: number
    // addedSum: (sum: number) => void
    setIsAddClicked: (isAddClicked: boolean) => void
}

export type SelectedUserType = UserPropsType

export type UserFormValueType = {
    tel: string,
    bank: string,
    userName: string
}


export const UserAddModal: React.FC<PropsType> = ({ setIsAddClicked }) => {


    const dispatch: AppDispatchType = useDispatch()
    const [inputValue, setInputValue] = useState<number>(0)

    // const onOkClick = (sum: number) => {

    //     dispatch(actions.addSum(sum))
    //     setIsAddClicked(false)

    // }

    const userData: UserFormValueType = {
        tel: '',
        bank: '',
        userName: ''
    }

    // Убрать userID из reducer

    const submit = (values: UserFormValueType, { setSubmitting }: FormikHelpers<UserFormValueType>) => {
        dispatch(actions.addUserData(values))
        console.log('added user', values)
        setIsAddClicked(false)
        setSubmitting(false)
    }


    return (
        <div>
            <div className={css.modalContainer}>
                <div className={css.CloseBtn}>
                    <button onClick={() => setIsAddClicked(false)} ><CloseCircleTwoTone twoToneColor={'white-black'}
                    /></button>
                </div>
                <div className={css.title}>
                    User Form
                </div>

                <div className={css.body}>

                    <Formik
                        initialValues={userData}
                        onSubmit={submit}
                    >
                        <Form>
                            <label htmlFor="tel">Phone</label>
                            <Field id='tel' name='tel' placeholder='phone #' />

                            <label htmlFor="userName">Name</label>
                            <Field id='userName' name='userName' placeholder='User Name' />

                            <label htmlFor="bank">Bank</label>
                            <Field id='bank' name='bank' placeholder='Bank name' />

                            <div className={css.footer}>
                                <Space direction="horizontal">
                                    <Button
                                        type="primary" size={"small"} style={{ backgroundColor: "#fee600", color: 'black' }}
                                        htmlType="submit"
                                    >OKi</Button>
                                    <Button type="primary" size={"small"} style={{ backgroundColor: "#fee600", color: 'black' }} onClick={() => setIsAddClicked(false)}>Cancel</Button>
                                </Space>
                            </div>

                        </Form>
                    </Formik>

                </div>




            </div>
        </div>
    )
}

