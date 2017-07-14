import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import App from '../pages/Home/index';
import SignInPage from '../pages/SignInPage/index';

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={SignInPage}/>
            <Route path="/home" component={App}/>
        </div>
    </Router>
)

export default Routes;