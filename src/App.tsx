import React from 'react';
import './assets/css/App.css';
import Item from './elements/Item';
import Child from './elements/Child';

const App: React.FC = () => {
  return (
    <div className="container">
      <Item />
      <Child number="1" message="属性でメッセージを渡す">Childrenメッセージを渡す</Child>
      <Child number="2" message="属性でメッセージを渡す">Childrenメッセージを渡す</Child>
    </div>
  );
}

export default App;
