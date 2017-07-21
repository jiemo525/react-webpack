/**
 * 编辑类别第二步
 */
import React from 'react';
import { Input, Card, Button } from 'antd';
import './index.scss';

class EditCategorySecondSteps extends React.Component {

    clickEdit = () => {
        this.props.addSubcategory(true);
    }
    render() {
        return (
            <div className="parent_subcategory_information">
                <Card>
                    <div className="add_subcategory_title">
                        第二步：编辑或删除
                    </div>
                    <div className="content_promt_message">
                        <p> 确认并编辑或删除</p>
                        <p>确认类别信息后，选择编辑或删除。</p>
                    </div>
                    <div className="content_category_details">
                        <p>产品ID：{this.props.category[0].key}</p>
                        <p>产品名称：{this.props.category[0].title}</p>
                        <p>产品描述：{this.props.category[0].title}</p>
                        
                        <Button type="primary" className="edit_btn" onClick={this.clickEdit}>编辑</Button>
                        <p className="sure_delete">确认删除</p>
                        <Input placeholder="输入准确无误的类别ID后才能删除。" />
                        <p className="delete_message">输入准确无误的类别ID后才能删除。</p>
                        <Button type="primary" className="delete_btn" onClick={this.clickAdd}>删除</Button>
                    </div>
                </Card>
            </div>
        );
    }
}

export default EditCategorySecondSteps;