import React, { Component } from 'react';
import { Table } from 'antd';

class MessageTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [{
                key: '1',
                id: '001',
                name: 'AOC',
                other: 'xxxxxxxxxxxxxxxxxxx'
            }, {
                key: '2',
                id: '002',
                name: 'DELL',
                other: 'xxxxxxxxxxxxxxxxxxx'
            }],
            columns : [{
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
            }, {
                title: '产品名称',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: '其他',
                dataIndex: 'other',
                key: 'other',
            }]
        }
    }
    render() {
        return (
            <Table dataSource={this.state.dataSource} columns={this.state.columns} />
        );
    }
}

export default MessageTable;