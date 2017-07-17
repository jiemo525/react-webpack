import React from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import App from '../pages/Home/index';
import SignInPage from '../pages/SignInPage/index';
import About from '../components/About/index';
import LabelBox from '../components/LabelBox/index';

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={SignInPage}/>
            <Route path="/home" component={App}/>
            <About>
                <Switch>
                    <Route path="/about/a" component={LabelBox}/>
                    <Route path="/about/b" component={LabelBox}/>
                </Switch>
            </About>
            
        </div>
    </Router>
)

export default Routes;