/**
 * 拖拽功能组件
 * 
 */
import React from 'react';
import { sortable } from 'react-sortable';
import './index.scss';
 
class ListItem  extends React.Component{
  render() {
    return (
      <div {...this.props} className="list-item">{this.props.children}</div>
    )
  }
}
 
var SortableListItem = sortable(ListItem);
 
class SortableBox extends React.Component{
 
    constructor(props) {
        super(props);
        this.state = {
            draggingIndex: null,
            data: this.props.data
        }
    }
 
    updateState = (obj) => {
        this.setState(obj);
    }
 
    render() {
        var childProps = { className: 'list-item' };
        var listItems = this.state.data.items.map(function(item, i) {
            return (
            <SortableListItem
                key={i}
                updateState={this.updateState}
                items={this.state.data.items}
                draggingIndex={this.state.draggingIndex}
                sortId={i}
                outline="list"
                childProps={childProps}
            >{item}</SortableListItem>);
        }, this);
 
    return (
          <div className="list">{listItems}</div>
    )
  }
}

export default SortableBox;