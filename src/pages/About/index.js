/**
 * 
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as selectCategoryActions from '../../actions/add-action.js';
import Fullpage from '../../components/Fullpage';

class About extends React.Component {

    render() {
        return (
            <div>
                <Fullpage />
            </div>
        );
    }
}


About.propTypes = {
    actions: PropTypes.object
};

function mapStateToProps(state, props) {
    return {
        add: state.add,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(selectCategoryActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);