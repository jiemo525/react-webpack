/**
 * 登录页
 */
import React, { Component } from 'react';
import { Card } from 'antd';
import SignIn from '../../components/SignIn/index';
import './index.scss';

class SignInPage extends Component {
  render() {
    return (
      <div className="sign_in_box">
        <Card className="card">
          <SignIn />
        </Card>
      </div>
    );
  }
}

export default SignInPage;
