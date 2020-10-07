import React from 'react';

type Item = {
    id: number;
    title: string;
}

const items: Item[] = [
    {
        id: 1,
        title: 'Hello',
    }, {
        id: 1,
        title: 'React',
    }
];

const Item: React.FC = () => {
    return (
        <ul>
            {items.map((item: Item) => {
                return <li key={item.id}>{item.title}</li>;
            })}
        </ul>
    );
}

export default Item;