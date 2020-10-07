import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/css/App.css';
import Home from './components/home';

// head情報
const title = 'React.Redux.app | React雛形プロジェクト Redux編';
const description = 'React雛形プロジェクト Redux編です。';
document.title = title;
const headData = document.head.children;
for (let i = 0; i < headData.length; i++) {
    const nameVal = headData[i].getAttribute('name');
    if (nameVal !== null) {
        if (nameVal.indexOf('description') !== -1) {
            headData[i].setAttribute('content', description);
        }
        // OGP(twitter)の設定
        if (nameVal.indexOf('twitter:title') !== -1) {
            headData[i].setAttribute('content', title);
        }
        if (nameVal.indexOf('twitter:description') !== -1) {
            headData[i].setAttribute('content', description);
        }
    }
}
// ここまでhead情報

const App: React.FC = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
