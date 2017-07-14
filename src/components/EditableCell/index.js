/**
 * 表格单元格
 * value
 * onChange()
 * clickUp()
 * clickDown()
 * clickH()
 */
import React from 'react';
import { Input, Icon } from 'antd';
import './index.scss';

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
      <div className="editable-cell" onClick={this.props.clickH}>
        {
          editable ?
            <div className="editable-cell-input-wrapper" >
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
        <div className="sort">
          <Icon
            type="caret-up"
            className="icon-caret-up"
            onClick={this.props.clickUp}
          />
          <Icon
            type="caret-down"
            className="icon-caret-down"
            onClick={this.props.clickDown}
          />
        </div>
      </div>
    );
  }
}

export default EditableCell;