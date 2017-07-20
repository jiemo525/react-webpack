/**
 * 搜索商品树组件
 */
import React from 'react';
import { Tree, Input } from 'antd';

const TreeNode = Tree.TreeNode;
const Search = Input.Search;
const dataList = [];
const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};

class SearchTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedKeys: [],
      searchValue: '',
      autoExpandParent: true,
    }
  }
  
  componnetWillMount() {
    this.generateList(this.props.gData);
  }

  generateList = (data) => {
    for (let i = 0; i < data.length; i++) {
      const node = data[i];
      const key = node.key;
      const title = node.title;
      dataList.push({ key, title:  title});
      if (node.children) {
        this.generateList(node.children, node.key);
      }
    }
  }

  onExpand = (expandedKeys) => {
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }

  onSelect = (selectedKeys, info) => {
    console.log('onSelect', info);
    this.setState({ selectedKeys });
    this.props.selectCategory(selectedKeys);
  }

  onChange = (e) => {
    const value = e.target.value;
    const expandedKeys = dataList.map((item) => {
      if (item.title.indexOf(value) > -1 && value !== '') {
        // if (item.title.search(regex) && value !== '') {
          return getParentKey(item.key, this.props.gData);
        }
        return null;
    }).filter((item, i, self) => item && self.indexOf(item) === i);
      this.setState({
        expandedKeys,
        searchValue: value,
        autoExpandParent: true,
    });
  }

  render() {
    const { searchValue, expandedKeys, autoExpandParent } = this.state;
    const loop = data => data.map((item) => {
      let index = -1;

      if(searchValue !== ''){
        index = item.title.search(searchValue);
      }
      const beforeStr = item.title.substr(0, index);
      const afterStr = item.title.substr(index + searchValue.length);
      const title = index > -1 ? (
        <span>
          {beforeStr}
          <span style={{ color: 'red' }}>{searchValue}</span>
          {afterStr}
        </span>
      ) : <span>{item.title}</span>;

      if (item.children) {
        return (
          <TreeNode key={item.key} title={title}>
            {loop(item.children)}
          </TreeNode>
        );
      }

      return <TreeNode key={item.key} title={title} />;
    });

    return (
      <div>
        <Search style={{ width: 300 }} placeholder="Search" onChange={this.onChange} />
        <Tree
          onExpand={this.onExpand}
          onSelect={this.onSelect}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          className="search_tree"
        >
          {loop(this.props.gData)}
        </Tree>
      </div>
    );
  }
}

export default SearchTree;
