/**
 * 
 */
import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as selectCategoryActions from '../../actions/add-action.js';
import SortableBox from '../../components/SortableBox/index';
import './index.scss';

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '123',
            here: '456'
        }

    }
    draghandle = (e) => {
        console.log(e);
    }
    draghandle = () => {
        console.log('start');
    }
    endhandle = () => {
        console.log('end');
        this.setState({here: this.state.text});
    }
    dragenterhandle = () => {
        console.log('enter');
    }
    render() {
        console.log(this.props);
        var data = {
            items: [
                "Gold",
                "Crimson",
                "Hotpink",
                "Blueviolet",
                "Cornflowerblue"
        ]};
        return (
            <div>
                <Card>
                    <SortableBox data={data}/>
                    <div onDrag={this.draghandle} draggable="true" onDragStart={this.starthandle} onDragEnd={this.endhandle} >{this.state.text}</div>
                    <div className="here" onDragEnter={this.dragenterhandle}>{this.state.here}</div>
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