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
    bData: string,
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
        tel: '+7 9',
        bData: '',
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
                            <label htmlFor="tel">Телефон</label>
                            <Field id='tel' name='tel' placeholder='phone #' />
                            <div className={css.telFormat}>format: (+7 xxx xxx-xx-xx)</div>

                            <label htmlFor="userName">Имя</label>
                            <Field id='userName' name='userName' placeholder='User Name' />

                            <label htmlFor="bData">Б-данные</label>
                            <Field id='bData' name='bData' placeholder='B name' />

                            <div className={css.footer}>
                                <Space direction="horizontal">
                                    <Button
                                        type="primary" size={"small"} style={{ backgroundColor: "#fee600", color: 'black' }}
                                        htmlType="submit"
                                    >OK</Button>
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

