import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Index from './pages/Index'
import Detail from './pages/Detail'
import Confirm from './pages/Confirm'
// import NavBar from './Nav'
// import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
// ReactDOM.render(
//     <Router>
//         <div>
//             <NavBar/>
//             <Route exact path="/" component={Index} />
//             <Route  path="/Detail" component={Detail} />
//             <Route  path="/Confirm" component={Confirm} />
//         </div>
//     </Router>,
//     document.getElementById("root")
// );

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
