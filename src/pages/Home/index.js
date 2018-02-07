/**
 * 后台首页
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button } from 'antd';
import '../styles/index.scss';
import './index.scss';

const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component {
 
  render() {
    return (
      <div className="home">
        <Layout>
          <Header>Header</Header>
          <Content>
            <div className="content">
              <Link to='/about'>
                <Button type="primary" size="large">按钮</Button>
              </Link>
             
            </div>
          </Content>
          <Footer>Footer</Footer>
        </Layout>

      </div>
    );
  }
}

export default App;
