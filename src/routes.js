import { BrowserRouter as Router , Route} from 'react-router-dom';
import App from './Index/index';
import About from './About/index';
import React from 'react';
const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/about" component={About}/>
        </div>
    </Router>
)

export default Routes;