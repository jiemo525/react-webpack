/**
 * 后台首页
 */
import React from 'react';
import {Link} from 'react-router-dom';
import { Card, Button} from 'antd';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import './index.scss';

class App extends React.Component {
  render() {

    return (
      <div className="home">
        <Header />
        <div className="content">
          <div className="button_div">
              <Card>
                <h3>类别</h3>
                  <Link to="/addCategory"><Button type="primary" size="large">添加类别</Button></Link>
                  <Link to="/editCategory"><Button type="primary" size="large">编辑类别</Button></Link>
              </Card>
          </div>
          <div className="button_div">
              <Card>
                <h3>品牌</h3>
                  <Link to="/addBrand"><Button type="primary" size="large">添加品牌</Button></Link>
                  <Link to="/editBrand"><Button type="primary" size="large">编辑品牌</Button></Link>
              </Card>
          </div>
          <div className="button_div">
              <Card>
                <h3>商品</h3>
                  <Link to="/addCategory"><Button type="primary" size="large">添加商品</Button></Link>
                  <Button type="primary" size="large">编辑商品</Button>
              </Card>
          </div>
          <div className="button_div">
              <Card>
                <h3>SKU</h3>
                  <Link to="/addCategory"><Button type="primary" size="large">编辑SKU</Button></Link>
                  <Button type="primary" size="large">标注SKU</Button>
              </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
