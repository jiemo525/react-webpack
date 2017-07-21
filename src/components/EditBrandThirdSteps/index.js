/**
 * 编辑品牌第三步
 */
import React from 'react';
import { Card, Button } from 'antd';
import LabelBox from '../../components/LabelBox/index';
import GroupTable from '../../components/GroupTable/index';
import './index.scss';

class EditBrandThirdSteps extends React.Component {
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
                        第三步：编辑品牌
                    </div>
                    <div className="second clearfix">
                        <div className="content_promt_message">
                            <p>基本信息</p>
                            <p>编辑新品牌基本信息并保存。</p>
                        </div>
                        <div className="content_category_details">
                            <LabelBox /> 
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

export default EditBrandThirdSteps;