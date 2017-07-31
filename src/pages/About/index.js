/**
 * 
 */
import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as selectCategoryActions from '../../actions/add-action.js';

class About extends React.Component {

    render() {
        console.log(this.props);

        return (
            <div>
                <Card>
                    About
                </Card>
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