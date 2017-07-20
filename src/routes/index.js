import React from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import App from '../pages/Home/index';
import SignInPage from '../pages/SignInPage/index';
import About from '../components/About/index';
import LabelBox from '../components/LabelBox/index';
import AddCategory from '../pages/AddCategory/index';
import EditCategory from '../pages/AddCategory/index';
import AddBrand from '../pages/AddBrand/index';
import EditBrand from '../pages/EditBrand/index';

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={SignInPage}/>
            <Switch>
                <Route exact path="/home" component={App}/>
                <Route path="/about" component={About}/>
                <Route path="/about/a" component={LabelBox}/>
                <Route path="/about/b" component={LabelBox}/>
                <Route path="/addCategory" component={AddCategory}/>
                <Route path="/editCategory" component={EditCategory}/>
                <Route path="/addBrand" component={AddBrand}/>
                <Route path="/editBrand" component={EditBrand}/>
            </Switch>
            
        </div>
    </Router>
)

export default Routes;