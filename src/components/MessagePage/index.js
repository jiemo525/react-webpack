import React, { Component } from 'react';
import MessageForm from '../MessageForm/index';
import MessageTable from '../MessageTable/index';
class MessagePage extends React.Component {
    render() {
        return (
            <div>
                <MessageForm />
                <MessageTable />
            </div>
        );
    }
}

export default MessagePage;