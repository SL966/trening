import React, {MouseEvent} from "react";
import {FilterType} from "./NewComponent";
import s from '../Students.module.css'
type MoneyType = {
    banknots: string,
    nominal: number,
    number: string
}

type NewComponentType = {
    money: MoneyType[]
    onClickHandler: (nameButton: FilterType) => void

}

const NewComponentButton = (props: NewComponentType) => {
    return (
        <>
            <ul className={s.banknot}>
                {props.money.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span className={s.banknots}>{objFromMoneyArr.banknots}</span>
                            <span className={s.nominal}>{objFromMoneyArr.nominal}</span>
                            <span className={s.number}>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickHandler('All')}>All</button>
                <button onClick={() => props.onClickHandler('RUBLS')}>RUBLS</button>
                <button onClick={() => props.onClickHandler('Dollars')}>Dollars</button>
            </div>
        </>
    )
}

export default NewComponentButton;