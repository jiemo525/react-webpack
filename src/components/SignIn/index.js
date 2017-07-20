/**
 * 登录组件
 */
import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Modal } from 'antd';
import './index.scss';

const FormItem = Form.Item;
const confirm = Modal.confirm;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
       if(values.userName==='123'&&values.password==='123') {
          console.log(values)
          window.location = '/home';
       }
      } else {
          confirm({
            title: '登录失败',
            content: '用户名或者密码错误',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
      }
    
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名！' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码！' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住我</Checkbox>
          )}
          <a className="login-form-forgot" href="">忘记密码</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
              登录
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const SignIn = Form.create()(NormalLoginForm);

export default SignIn;