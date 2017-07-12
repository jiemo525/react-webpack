import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import App from '../pages/Index/index';
import About from '../pages/About/index';

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={App}>
            </Route>
            <Route path="/about" component={About}/>
        </div>
    </Router>
)

export default Routes;