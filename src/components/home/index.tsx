import React from 'react';
import Item from '../example/Item';
import Child from '../example/Child';

const Index: React.FC = () => {
    return (
        <main>
            <Item />
            <Child number="1" message="属性でメッセージを渡す">Childrenメッセージを渡す</Child>
            <Child number="2" message="属性でメッセージを渡す">Childrenメッセージを渡す</Child>
        </main>
    );
}

export default Index;
