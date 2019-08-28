import React from 'react';
import echarts from 'echarts';
import { Icon } from 'antd';
import './index.scss';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

const colors = ['#5073B8', '#0F98AD', '#0AB39C', '#F1963A', '#bdbdbd',
  '#ef5350', '#ab47bc', '#5c6bc0', '#29b6f6', '#26a69a', '#9ccc65', '#ffee58',
  '#ffa726', '#8d6e63', '#78909c'];

class PeiChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      data: this.props.data ? this.props.data : [],
      legendData: this.props.legendData ? this.props.legendData : [],
      currentData: [],
      pageSize: this.props.pageSize? this.props.pageSize: 5,
      total: this.props.data? this.props.data.length : 0,
      selected: [],
      currentColor: [],
    }
  }

  componentDidMount() {
    let { data } = this.state;
    var myChart = echarts.init(document.getElementById('main'));
    let o = this.setOption(data, colors);
    myChart.setOption(o);
    this.setState({ currentData: this.state.data, currentColor: colors });
  }

  // 设置饼图参数
  setOption = (data, color) => {

    return {
      color,
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          data,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

  }

  // 当鼠标在到legend上时 对应的饼图高亮
  hoverLegendItem = (name) => {
    const { selected } = this.state;
    if (selected.indexOf(name) === -1) {
      var myChart = echarts.init(document.getElementById('main'));
      let o = this.setOption(this.state.currentData, this.state.currentColor);
      myChart.setOption(o);
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        // dataIndex: num,
        name
      });
      myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        // dataIndex: num,
        name
      });
    }
  }

  // 当鼠标离开legend 对应的饼图回去
  leaveLegendItem = (name) => {
    const { selected } = this.state;
    if (selected.indexOf(name) === -1) {
      var myChart = echarts.init(document.getElementById('main'));
      let o = this.setOption(this.state.currentData, this.state.currentColor);
      myChart.setOption(o);
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        // dataIndex: num,
        name
      });
    }
  }

  // 点击legend时 对应的饼图隐藏或显示 将新的数据存放到状态currentData currentColor 重新渲染饼图
  clickLegendItem = (name) => {
    let { data, selected } = this.state;
    var myChart = echarts.init(document.getElementById('main'));
    let dataArr = [];
    let colorArr = [];
    if (selected.indexOf(name) === -1) {
      selected.push(name);
    } else {
      selected.splice(selected.indexOf(name), 1);
    }
    data.map((item, index) => {
      console.log(selected, name);
      if (selected.indexOf(item.name) === -1) {
        console.log(item);
        dataArr.push(item);
        colorArr.push(colors[index]);
      }
    })
    let o = this.setOption(dataArr, colorArr);
    myChart.setOption(o);
    this.setState({
      selected,
      currentData: dataArr,
      currentColor: colorArr
    });
  }

  // 点击翻页 当前一页 当前页数大于最小页数 减一 
  // 点击后一页 当前页小于最大页数 加一
  clickChangePageBtn = (type) => {
    let { currentPage, total } = this.state;

    if (type === 'left') {
      if (currentPage > 0) {
        currentPage -= 1;
      }
      this.setState({ currentPage });
    } else {
      if (currentPage < total / 5 - 1) {
        currentPage += 1;
      }
      this.setState({ currentPage });
    }
  }

  render() {
    let {
      legendData,
      currentPage,
      total,
      selected,
      currentData,
      pageSize
    } = this.state;
    return (
      <div className='pei-chart'>
        <div id="main"></div>
        <div
          className='legend'
        >
          <div
            className={currentPage > 0 ? 'left-btn' : 'left-btn no-click-btn'}
            onClick={this.clickChangePageBtn.bind(this, 'left')}
          >
            <Icon type="left" />
          </div>
          <div className='middle-content'>
            {
              legendData.length > 0 && legendData.slice(currentPage * pageSize, (currentPage + 1) * pageSize).map((item, index) => (
                <div
                  key={currentPage * pageSize + index}
                  onMouseOver={this.hoverLegendItem.bind(this, item)}
                  onMouseLeave={this.leaveLegendItem.bind(this, item)}
                  onClick={this.clickLegendItem.bind(this, item)}
                  className={selected.indexOf(item) === -1 ? 'about-left-btn-item' : 'about-left-btn-item no-item'}
                >
                  <div
                    className='about-legend-icon'
                    style={selected.indexOf(item) === -1 ? { backgroundColor: colors[currentPage * pageSize + index] } : { backgroundColor: '#ccc' }}
                  ></div>
                  {item}
                </div>
              ))
            }
          </div>
          <div
            className={currentPage < total / pageSize - 1 ? 'right-btn' : 'right-btn no-click-btn'}
            onClick={this.clickChangePageBtn.bind(this, 'right')}
          >
            <Icon type="right" />
          </div>
        </div>
      </div>
    )
  }
}



export default PeiChart
