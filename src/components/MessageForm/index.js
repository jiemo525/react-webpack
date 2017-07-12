import React, { Component } from 'react';
import './index.scss';

class MessageForm extends React.Component {
    render() {
        return (
            <div className="message-form">
                <div className="message"><span>产品ID：</span>0001</div>
                <div className="message"><span>产品名称：</span>xxx</div>
                <div className="message"><span>描述：</span>xxx</div>
            </div>
        );
    }
}

export default MessageForm;