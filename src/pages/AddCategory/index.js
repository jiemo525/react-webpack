/**
 * 添加类别页面
 * 
 */
import React , {PropTypes}from 'react';
import { Card } from 'antd';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as selectCategoryActions from '../../actions/add-action.js';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import SearchTree from '../../components/SearchTree/index';
import ParentCategoryInformation from '../../components/ParentCategoryInformation/index';
import AddSubcategory from '../../components/AddSubcategory/index';
import './index.scss'

class AddCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            subcategory: '',
        }
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
                            <SearchTree selectCategory={this.props.actions.selectCategory}/>
                        </div>
                    </Card>
                    {this.props.category[0]?<ParentCategoryInformation addSubcategory={this.props.actions.addSubcategory}/>:''}
                    
                    {this.props.subcategory?<AddSubcategory />:''}
                </div>
                
                <Footer />
            </div>    
        );
    }
}


AddCategory.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
    console.log(state);
  return {
    category: state.category,
    subcategory: state.subcategory
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(selectCategoryActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);