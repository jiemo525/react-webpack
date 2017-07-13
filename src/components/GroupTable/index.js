import React from 'react';
import './index.scss';

import { Table, Input, Icon, Button, Popconfirm } from 'antd';

class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: false,
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  }
  check = () => {
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }
  edit = () => {
    this.setState({ editable: true });
  }
  render() {
    const { value, editable } = this.state;
    return (
      <div className="editable-cell">
        {
          editable ?
            <div className="editable-cell-input-wrapper">
              <Input
                value={value}
                onChange={this.handleChange}
                onPressEnter={this.check}
              />
              <Icon
                type="check"
                className="editable-cell-icon-check"
                onClick={this.check}
              />
            </div>
            :
            <div className="editable-cell-text-wrapper">
              {value || ' '}
              <Icon
                type="edit"
                className="editable-cell-icon"
                onClick={this.edit}
              />
            </div>
        }
      </div>
    );
  }
}

class GroupTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
        title: '属性名称',
        dataIndex: 'name',
        width: '80%',
        sorter: (a, b) => a.name.length - b.name.length,
        render: (text, record, index) => (
            <EditableCell
                value={text}
                onChange={this.onCellChange(index, 'name')}
            />
        ),
    },{
        title: '删除',
        render: (text, record, index) => {
            return (
                this.props.dataSource.length > 1 ?
                (
                    <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(index)}>
                        <Button shape="circle" icon="minus" />
                    </Popconfirm>
                ) : null
            );
        },
    },];
    this.state = {
        selectStyle: {
            
        },
        dataSource: [],
    }
  }
  onCellChange = (index, key) => {
    return (value) => {
      const dataSource = [...this.props.dataSource];
      dataSource[index][key] = value;
      this.setState({ dataSource });
    };
  }
  clickRow = (record, index, event) => {
      console.log(event.target.parent);
    //   if(event.target.className===)
    event.target.style.backgroundColor = 'green';
  }
  onDelete = (index) => {
    const dataSource = [...this.props.dataSource];
    dataSource.splice(index, 1);
    this.setState({ dataSource });
  }
  handleAdd = () => {
    const { dataSource } = this.props;
    const count = dataSource.length;
    console.log(count);
    const newData = {
      key: count,
      name: ``,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }
  render() {
    const { dataSource } = this.props;
    const columns = this.columns;
    return (
      <div className="group_table">
        <Table bordered 
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            title={() => '属性表'}
            onRowClick={this.clickRow}
        />
        <div className="plus">
            <Button shape="circle" icon="plus" onClick={this.handleAdd} className="plus_button"/>
        </div>
        
      </div>
    );
  }
}

export default GroupTable;