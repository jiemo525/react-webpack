/**
 * 
 */
import React from 'react';
import {connect} from 'react-redux'
import {  Layout, Card } from 'antd';
import PropTypes from 'prop-types';
import LineBar from '../../components/LineBar';
import Line from '../../components/Line';
import { selectCategory } from '../../actions/add-action';
import G2 from '@antv/g2';

const { Header, Footer, Sider, Content } = Layout;

class About extends React.Component {

    render() {
        console.log(this.props.dispatch);
        this.props.dispatch(selectCategory(1));
        return (
            <div className="home">
                <Layout>
                    <Header>Header</Header>
                    <Content>
                        <div className="content">
                            <LineBar />
                            <Line />
                        </div>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>

            </div>

        );
    }
}

export default connect()(About)