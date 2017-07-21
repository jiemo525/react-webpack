/**
 * 添加类别页面
 * 
 */
import React from 'react';
import { Card } from 'antd';
import { isRequiredForA11y} from 'react-prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as selectCategoryActions from '../../actions/add-action.js';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import SearchTree from '../../components/SearchTree/index';
import AddCategorySecondSteps from '../../components/AddCategorySecondSteps/index';
import AddCategoryThirdSteps from '../../components/AddCategoryThirdSteps/index';
import './index.scss'

class AddCategory extends React.Component {
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
            <div className="add_category">
                <Header />
                <div className="content clearfix">
                    <h3>编辑模式 > 添加类别</h3>
                    
                    <Card>
                        <div className="content_prompt_title">
                            第一步： 选择父类别
                        </div>
                        <div className="content_promt_message">
                           <p> 搜索并选择父类别</p>
                           <p>输入类别ID、类别名称或关键字进行搜索并从搜索结果中选择类别。</p>
                        </div>
                        <div className="search">
                            <SearchTree gData={this.state.gData} selectCategory={this.props.actions.selectCategory}/>
                        </div>
                    </Card>
                    {this.props.category.length>0?
                        <AddCategorySecondSteps 
                            addSubcategory={this.props.actions.addSubcategory}
                            subcategory={this.props.subcategory}
                            category={this.props.category}
                        />
                        :''}
                    
                    {this.props.subcategory?<AddCategoryThirdSteps />:''}
                </div>
                
                <Footer />
            </div>    
        );
    }
}


AddCategory.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);