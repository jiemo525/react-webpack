/**
 * 添加类别 第二步
 */
import React from 'react';
import { Card, Button } from 'antd';
import './index.scss';

class ParentCategoryInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '电脑',
        }
    }

    clickAdd = () => {
        this.props.addSubcategory(true);
    }

    render() {

        return (
            <div className="parent_subcategory_information">
                <Card>
                    <div className="add_subcategory_title">
                        第二步：确认并继续
                    </div>
                    <div className="content_promt_message">
                        <p> 确认父类别信息并继续</p>
                        <p>确认父类别信息后，继续添加子类别或返回上一步。</p>
                    </div>
                    <div className="content_category_details">
                        <p>产品名称：{this.state.name}</p>
                        <p>产品名称：{this.state.name}</p>
                        <p>产品名称：{this.state.name}</p>
                        <p>产品名称：{this.state.name}</p>
                        <p>产品名称：{this.state.name}</p>
                        
                        <Button type="primary" className="content_btn" onClick={this.clickAdd}>添加子类别</Button>
                    </div>
                </Card>
            </div>
        );
    }
}

export default ParentCategoryInformation;