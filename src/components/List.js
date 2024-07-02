import React from 'react'
import SingleList from './SingleList';

const peoples = [
    {
        id: 0,
        name: 'Mostafizur',
        profession: 'mathematician',
    },
    {
        id: 1,
        name: 'Siam',
        profession: 'chemist',
    },
    {
        id: 2,
        name: 'Bappy',
        profession: 'physicist',
    },
    {
        id: 3,
        name: 'Junnun',
        profession: 'chemist',
    },
    {
        id: 4,
        name: 'Rifat',
        profession: 'astrophysicist',
    }
];


const List = () => {

    const result = peoples.map((people) => (
        <SingleList people={people} key={people.id} />
    ))

    return (
        <div>
            {result}
        </div>
    )
}

export default List