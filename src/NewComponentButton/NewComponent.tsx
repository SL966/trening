import React, {useState} from 'react';
import '../App.css';
import NewComponentButton from "./NewComponentButton";
export type FilterType='All' | 'Dollars' | 'RUBLS'

function NewComponent() {

    const [money] = useState([
        {banknots: 'Dollars', nominal: 100, number: ' a1234567890'},
        {banknots: 'Dollars', nominal: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', nominal: 100, number: ' w1234567890'},
        {banknots: 'Dollars', nominal: 100, number: ' e1234567890'},
        {banknots: 'Dollars', nominal: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', nominal: 100, number: ' r1234567890'},
        {banknots: 'Dollars', nominal: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', nominal: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('All')
    let currentMoney = money;
    if (filter === 'Dollars') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars');
    }
    if (filter === 'RUBLS') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS');
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }
    return (
        <div>
            <NewComponentButton money={currentMoney}  onClickHandler={onClickFilterHandler}/>
        </div>
    );
}

export default NewComponent;

