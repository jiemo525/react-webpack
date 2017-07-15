/**
 * 表格
 * dataSource
 * number
 */
import React from 'react';
import { Table, Button, Popconfirm } from 'antd';
import EditableCell from '../EditableCell/index';
import './index.scss';

class GroupTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        dataSource: this.props.dataSource,
        count: this.props.dataSource.length,
        active: 0,
    }
    let that = this;
    this.columns = [{
        title: '属性名称',
        dataIndex: 'name',
        width: '80%',
        render: (text, record, index) => (
            <EditableCell
                value={text}
                onChange={this.onCellChange(index, 'name')}
                clickUp={this.clickUp.bind(that, record, index)}
                clickDown={this.clickDown.bind(that, record, index)}
                active={this.state.active===index}
            />
        ),
    },{
        title: '删除',
        render: (text, record, index) => {
            return (
                this.state.count > 1 ?
                (
                    <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(index)}>
                        <Button shape="circle" icon="minus" />
                    </Popconfirm>
                ) : null
            );
        },
    },];
  }

  clickOnRow = (record, index, event) => {
    this.setState({active: index});
  }

  clickUp = (record, index) => {
    let datas = this.state.dataSource;
    if(index -1 > -1) {
      let data = datas[index - 1];
      datas[index] = data;
      datas[index - 1] = record;
    }
      
    this.setState({dataSource: datas});
  }

  clickDown = (record, index) => {
    let datas = this.state.dataSource;
    
    if(index + 1 < this.state.count) {
      let data = datas[index + 1];
      datas[index] = data;
      datas[index + 1] = record;
    }
      
    this.setState({dataSource: datas});
  }

  onCellChange = (index, key) => {
    return (value) => {
      const dataSource = [...this.props.dataSource];
      dataSource[index][key] = value;
      this.setState({ dataSource });
    };
  }
  
  onDelete = (index) => {
    const dataSource = [...this.state.dataSource];

    dataSource.splice(index, 1);
    this.setState({ dataSource });
  }

  handleAdd = () => {
    const { dataSource, count } = this.state;
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
    const {dataSource} = this.state;
    const columns = this.columns;

    return (
      <div className="group_table">
        <Table bordered 
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            title={() => '属性表'}
            onRowClick={this.clickOnRow}
        />
        <div className="plus">
            <Button shape="circle" icon="plus" onClick={this.handleAdd} className="plus_button"/>
        </div>
      </div>
    );
  }
}

export default GroupTable;