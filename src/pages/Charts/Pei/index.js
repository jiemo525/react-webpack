import React from 'react';
import PeiChart from '../../../components/PeiChart';
import ActionButton from 'antd/lib/modal/ActionButton';

class Pei extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = [
      { value: 100, name: '直接访问2' },
      { value: 100, name: '邮件营销2' },
      { value: 100, name: '联盟广告2' },
      { value: 100, name: '视频广告2' },
      { value: 100, name: '搜索引擎2' },
      { value: 100, name: '直接访问1' },
      { value: 100, name: '邮件营销1' },
      { value: 100, name: '联盟广告1' },
      { value: 100, name: '视频广告1' },
      { value: 100, name: '搜索引擎1' },
      { value: 100, name: '直接访问' },
      { value: 100, name: '邮件营销' },
      { value: 100, name: '联盟广告' },
      { value: 100, name: '视频广告' },
      { value: 100, name: '搜索引擎' },
    ]
    let legendData = [];
    data.map((item) => {
      legendData.push(item.name);
    })
    return (
      <div className='chart'>
        <PeiChart
          data={data}
          legendData={legendData}
          pageSize={6}
        />
      </div>
    )
  }
}

export default Pei;