import React from 'react';
import logo from './logo.svg';
import './common/css/icon.css'
import Index from './pages/Index'
import Mall from './pages/Mall'
import Detail from './pages/Detail'
import Confirm from './pages/Confirm'
import {BrowserRouter as Router , Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        {/* <Link to="/">首页</Link>
        <Link to="/Detail">商品详情页</Link>
        <Link to="/Confirm">下单页</Link> */}
        <Route  exact  path="/" component={Index} />
        <Route  path="/Detail/:id" component={Detail} />
        <Route  path="/Confirm" component={Confirm} />
        <Route  path="/Mall" component={Mall} />
      </div>
    </Router>
    // <div className="App">
    //   <Confirm/>
    // </div>
  );
}

export default App;
 