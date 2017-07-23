/**
 * 添加品牌页面
 */
import React from 'react';
import { Card, Input, Button} from 'antd';
import { isRequiredForA11y} from 'react-prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as selectCategoryActions from '../../actions/add-brand-action.js';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import AddBrandSecondSteps from '../../components/AddBrandSecondSteps/index';
import './index.scss'

const Search = Input.Search;

class AddBrand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            subcategory: '',
            gData: [{
                key: '0',
                title:'电子产品',
                children: [{
                    key: '0-0',
                    title:'电脑',
                    children: [{
                    key: '0-0-0',
                    title:'MACBOOK',
                    },{
                    key: '0-0-1',
                    title:'MACBOOKPRO',
                    }]
                },]
            },]
        }
    }

    clickAdd = () => {
        console.log('add');
        this.props.actions.selectStep2Switch({key:'001', title:'MAC'});
    }

    render() {
        console.log(this.props);

        return (
            <div className="add_category add_brand">
                <Header />
                <div className="content clearfix">
                    <h3>编辑模式 > 添加品牌</h3>
                    
                    <Card>
                        <div className="content_prompt_title">
                            第一步：品牌查重
                        </div>
                        <div className="content_promt_message">
                           <p>品牌查重</p>
                           <p>在现有品牌中检索，确认无重复后添加。</p>
                        </div>
                        <div className="search">
                            <Search
                                placeholder="搜索"
                                style={{ width: 600 }}
                                onSearch={value => console.log(value)}
                            />
                            <Button type="primary" className="add_btn" onClick={this.clickAdd}>添加新品牌</Button>
                        </div>
                    </Card>
                    {this.props.addBrandStep2Switch.length>0?
                        <AddBrandSecondSteps 
                            selectStep2Switch={this.props.actions.selectStep2Switch}
                        />
                        :''}
                    
                </div>
                
                <Footer />
            </div>    
        );
    }
}


AddBrand.propTypes = {
  actions: isRequiredForA11y(React.PropTypes.object)
};

function mapStateToProps(state, props) {
  return {
    addBrandStep2Switch: state.addBrandStep2Switch,
    addBrandStep3Switch: state.addBrandStep3Switch,
    gdata: state.gdata
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(selectCategoryActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBrand);
