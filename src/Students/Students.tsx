import React, {useState} from 'react';
import {v1} from "uuid";
import StudentsButton from "./StudentsButton";

export type FilterType = 'All' | 'Junior' | 'Midl'

const Students = () => {

    const [students, setStudents] = useState([
        {_id: v1(), title: 'Junior', name: 'Slava', lastname: 'DDT',isDone: true},
        {_id: v1(), title: 'Midl', name: 'Dima', lastname: 'TTN'},
        {_id: v1(), title: 'Junior', name: 'Oleg', lastname: 'VVO'},
        {_id: v1(), title: 'Midl', name: 'Stiv', lastname: 'KKE'},
    ]);

    const [filter, setFilter] = useState<FilterType>('All')

    let currentStudents = students;
    if (filter === 'Junior') {
        currentStudents = students.filter(filteredStudents => filteredStudents.title === 'Junior');
    }
    if (filter === 'Midl') {
        currentStudents = students.filter(filteredStudents => filteredStudents.title === 'Midl');
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }
    return (
        <div>
            <StudentsButton students={currentStudents} onClickHandler={onClickFilterHandler}/>
        </div>
    );
};

export default Students;