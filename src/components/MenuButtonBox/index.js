import React from 'react';
import { Button, Card } from 'antd';
import './index.scss'

class MenuButtonBox extends React.Component {
    
    render() {
        const {text} = this.props;
        return (
            
                <div className="button_div">
                    <Card>
                    <h3>{text[0]}</h3>
                    <Button type="primary" size="large">{text[1]}</Button>
                    <Button type="primary" size="large">{text[2]}</Button>
                    </Card>
                </div>
            
        );
    }
}

export default MenuButtonBox;