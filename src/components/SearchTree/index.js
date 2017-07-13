import React from 'react';
import { Tree, Input } from 'antd';

const TreeNode = Tree.TreeNode;
const Search = Input.Search;
const gData = [{
  key: '0',
  title:'电子产品',
  children: [{
    key: '0-0',
    title:'电脑',
    children: [{
      key: '0-0-0',
      title:'MACBOOK',
    },{
      key: '0-0-1',
      title:'MACBOOKPRO',
    }]
  },]
},];

const dataList = [];
const generateList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const key = node.key;
    const title = node.title;
    dataList.push({ key, title:  title});
    if (node.children) {
      generateList(node.children, node.key);
    }
  }
};
generateList(gData);

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
  state = {
    expandedKeys: [],
    searchValue: '',
    autoExpandParent: true,
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
  }
  onChange = (e) => {
    const value = e.target.value;
    
    const expandedKeys = dataList.map((item) => {
      // let regex = new RegExp(value, 'ig');
      // console.log('regex%o:%o',item.title.search(regex)&& value !== '',item.title.indexOf(value)&& value !== '');
    if (item.title.indexOf(value) > -1 && value !== '') {
      // if (item.title.search(regex) && value !== '') {
        return getParentKey(item.key, gData);
      }
      return null;
    }).filter((item, i, self) => item && self.indexOf(item) === i);
    this.setState({
      expandedKeys,
      searchValue: value,
      autoExpandParent: true,
    });
    console.log(expandedKeys);
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
        >
          {loop(gData)}
        </Tree>
      </div>
    );
  }
}

export default SearchTree;