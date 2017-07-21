/**
 * 编辑品牌页面
 */
import React from 'react';
import { Card, Input} from 'antd';
import { isRequiredForA11y} from 'react-prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as selectCategoryActions from '../../actions/add-action.js';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import EditBrandSecondSteps from '../../components/EditBrandSecondSteps/index';
import EditBrandThirdSteps from '../../components/EditBrandThirdSteps/index';
import './index.scss'

const Search = Input.Search;

class EditBrand extends React.Component {
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

    componentDidMount() {
        this.props.actions.selectCategory([]);
    }

    render() {
        console.log(this.props);

        return (
            <div className="add_category add_brand">
                <Header />
                <div className="content clearfix">
                    <h3>编辑模式 > 编辑品牌</h3>
                    
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
                        </div>
                    </Card>
                    {this.props.category.length>0?
                        <EditBrandSecondSteps 
                            addSubcategory={this.props.actions.addSubcategory}
                            subcategory={this.props.subcategory}
                            category={this.props.category}
                        />
                        :''}
                    {this.props.subcategory?<EditBrandThirdSteps />:''}
                </div>
                
                <Footer />
            </div>    
        );
    }
}


EditBrand.propTypes = {
  actions: isRequiredForA11y(React.PropTypes.object)
};

function mapStateToProps(state, props) {
  return {
    category: state.category,
    subcategory: state.subcategory,
    gdata: state.gdata
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(selectCategoryActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBrand);
