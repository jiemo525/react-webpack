/**
 * 添加类别第三步
 */
import React from 'react';
import { Card, Button } from 'antd';
import LabelBox from '../../components/LabelBox/index';
import GroupTable from '../../components/GroupTable/index';
import './index.scss';

class AddSubcategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '电脑',
            dataSource: [{
                key:'0',
                name:'电子产品',
            }]
        }
    }
    render() {
        
        return (
            <div className="add_subcategory">
                <Card>
                    <div className="add_subcategory_title">
                        第三步：添加子类别
                    </div>
                    <div className="second clearfix">
                        <div className="content_promt_message">
                            <p>基本信息</p>
                            <p>编辑子类别基本信息并保存。</p>
                        </div>
                        <div className="content_category_details">
                            <LabelBox /> 
                        </div>
                    </div>
                    <div className="third clearfix">
                        <div className="content_promt_message">
                            <p>类别属性</p>
                            <p>编辑子类别属性组、属性和属性值并保存，或选择跳过。</p>
                        </div>
                        <div className="content_category_details">
                            <GroupTable dataSource={this.state.dataSource} titles='属性组'/>
                            <GroupTable dataSource={this.state.dataSource} titles='属性'/>
                            <GroupTable dataSource={this.state.dataSource} titles='属性值'/>
                        </div>
                    </div>
                    <div className="second clearfix">
                        <div className="content_promt_message">
                            <p>完成添加</p>
                            <p>确认无误后，点击保存，完成添加。</p>
                        </div>
                        <div className="content_category_details">
                            <Button type="primary"  size="large">保存</Button>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default AddSubcategory;