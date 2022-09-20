import React from 'react';
import s from '../Students.module.css'
import {FilterType} from './Students';


type StudentsType = {
    _id: string
    name: string
    lastname: string
    title: string

}
type StudentsPropsType = {
    students: StudentsType[];
    onClickHandler: (nameButton: FilterType) => void

}

let StudentsButton = (props: StudentsPropsType) => {

    const id = {
        color: 'red',
        marginLeft: '5px',
        marginRight: '8px',

    }

    return (
        <>
            <ul className={s.list}>{props.students.map((objFromStudentsArr, index) => {
                return (
                    <li key={index}>
                        <input type='checkbox'  />
                        <span>{objFromStudentsArr.title}</span>
                        <span style={id}> {objFromStudentsArr.name}</span>
                        <span>{objFromStudentsArr.lastname}</span>
                    </li>
                )
            })}</ul>
            <div>
                <button className={s.all} onClick={() => props.onClickHandler('All')}>All</button>
                <button className={s.junior} onClick={() => props.onClickHandler('Junior')}>Junior</button>
                <button className={s.midl}  onClick={() => props.onClickHandler('Midl')}>Midl</button>
            </div>
        </>
    );
};

export default StudentsButton;







