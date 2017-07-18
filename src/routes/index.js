import React from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import App from '../pages/Home/index';
import SignInPage from '../pages/SignInPage/index';
import About from '../components/About/index';
import LabelBox from '../components/LabelBox/index';
import AddCategory from '../pages/AddCategory/index'

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={SignInPage}/>
            <Route path="/home" component={App}/>
            
                <Switch>
                    <Route exact path="/about" component={About}/>
                    <Route path="/about/a" component={LabelBox}/>
                    <Route path="/about/b" component={LabelBox}/>
                </Switch>
            <Route path="/addCategory" component={AddCategory}/>
            
        </div>
    </Router>
)

export default Routes;