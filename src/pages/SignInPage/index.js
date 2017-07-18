/**
 * 登录页
 */
import React, { Component } from 'react';
import SignIn from '../../components/SignIn/index';
import './index.scss';

class SignInPage extends Component {
  render() {
    return (
      <div className="sign_in_box">
        <div className="logo"></div>
        <div className="content">
          <div className="message">
              <h3>超满意商品目录</h3>
              <h4>chaomy catelog</h4>
              <p>如果你无法简洁的表达你的想法，说明你还不够了解它。
                如果你无法简洁的表达你的想法，说明你还不够了解它。
                如果你无法简洁的表达你的想法，说明你还不够了解它。
                如果你无法简洁的表达你的想法，说明你还不够了解它。
                如果你无法简洁的表达你的想法，说明你还不够了解它。
                <br/>---阿尔伯特·爱因斯坦
              </p>
          </div>
          <div className="sign_in">
            <div className="sign_in_top">
                登录
            </div>
            <SignIn />
          </div>
        </div>
      </div>
    );
  }
}

export default SignInPage;
