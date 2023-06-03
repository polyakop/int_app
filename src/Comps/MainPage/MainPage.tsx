import React, { useState } from "react";
import { UserPropsType } from "../../../types/types";
import css from './MainPage.module.css'
import { getSum, getUsers } from "../../redux/profile-selectors";
import { useDispatch, useSelector } from 'react-redux';
import { UserItem } from "../UserItem/UserItem";
// import homePic from '../../Assets/Img/2023-05-20 10-00-16.jpg'
import { Button, Space } from "antd";
import { setSum } from "../../redux/profile-reducer";
import { AppDispatchType } from "../../redux/redux-store";
import { SumAddModal } from '../SumAddModal/SumAddModal'
import { UserAddModal } from "../UserAddModal/UserAddModal";
import { ResultModal } from "../Result/ResultModal";



type PropsType = {}

export type SelectedUserType = UserPropsType


export const MainPage: React.FC<PropsType> = () => {
    const users = useSelector(getUsers)
    const sum = useSelector(getSum)
    const dispatch: AppDispatchType = useDispatch()

    const [selectedUser, setSelectedUser] = useState<SelectedUserType | null>(null)
    // _______Modal window state________
    const [isAddClicked, setIsAddClicked] = useState(false)
    const [isSumClicked, setIsSumClicked] = useState(false)
    const [isResultClicked, setIsResultClicked] = useState(false)

    let isModal = false

    if (isSumClicked || isAddClicked || isResultClicked) { isModal = true }

    let userListElement = users.map((u: UserPropsType) => (
        <UserItem
            key={u.userId}
            userId={u.userId}
            userName={u.userName}
            tel={u.tel}
            bData={u.bData}
            onUserSelected={setSelectedUser}
            selectedUser={selectedUser}

        />
    ))
    return (
        <div>
            <div className={(!!isModal) ? css.modalBackground : ''}>

                <div className={css.wrapper}>
                    <div className={css.header}>
                        <h1>Data Form</h1>
                    </div>

                    {/* _____USER List______ */}
                    <div className={css.userList}>
                        <h2>User List</h2>
                        <div className={css.user}>{userListElement}</div>
                    </div>
                    {/* _____USER INFO______ */}
                    <div className={css.userInfo}>
                        <h2>User Info</h2>
                        {selectedUser &&
                            <div data-info>
                                <p data-info='tel'> T: {selectedUser.tel}</p>
                                <p data-info='userName'>N: {selectedUser.userName}</p>
                                <p data-info='bData'>B: {selectedUser.bData}</p>

                            </div>

                        }
                        <p style={{ fontWeight: 'bold' }}>your sum is {sum}</p>
                    </div>

                    <div className={css.buttons}>
                        <Space direction="horizontal">
                            <Button type="primary" size={"middle"} style={{ backgroundColor: "#fee600", color: 'black'}}
                                onClick={() => setIsAddClicked(true)}>Add</Button>
                            <Button type="primary" size={"middle"} style={{ backgroundColor: "#fee600", color: 'black' }}
                                onClick={() => setIsSumClicked(true)}>Sum</Button>
                            <Button type="primary" size={"middle"} style={{ backgroundColor: "#fee600", color: 'black' }}
                                onClick={() => setIsResultClicked(true)}                            >Result</Button>
                        </Space>

                        {/* <img src={homePic} alt="" style={{width:'200px'}} /> */}
                    </div>

                </div>
            </div>
            {/*_________ Modal WINDOWS_________ */}
            {/* 1 Add modal */}
            {isAddClicked &&
                <div className={css.modalWindow}>
                    <UserAddModal setIsAddClicked={setIsAddClicked} />
                </div>
            }

            {/* 2 Sum modal */}
            {isSumClicked &&
                <div className={css.modalWindow}>
                    <SumAddModal sumValue={sum} addedSum={setSum} setIsSumClicked={setIsSumClicked} />
                </div>
            }
          

            {/* 3 Result modal */}
            {isResultClicked &&
                <div className={css.modalWindow}>
                    <ResultModal setIsResultClicked={setIsResultClicked} sum={sum} selectedUser={selectedUser}/>
                </div>
            }



        </div>
    )
}

