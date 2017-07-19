/**
 * 添加类别页面
 * 
 */
import React from 'react';
import { Card } from 'antd';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import SearchTree from '../../components/SearchTree/index';
import ParentCategoryInformation from '../../components/ParentCategoryInformation/index';
import AddSubcategory from '../../components/AddSubcategory/index';
import './index.scss'

class AddCategory extends React.Component {
    
    render() {
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
                            <SearchTree />
                        </div>
                    </Card>
                    <ParentCategoryInformation />
                    <AddSubcategory />
                </div>
                
                <Footer />
            </div>    
        );
    }
}

export default AddCategory;