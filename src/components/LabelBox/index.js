/**
 * 
 */
import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import './index.scss';

const FormItem = Form.Item;
const { TextArea } = Input;
let uuid = 0;

class DynamicFieldSet extends React.Component {
  remove = (k) => {
    const { form } = this.props;
    const keys = form.getFieldValue('keys');
  
    if (keys.length === 1) {
      return;
    }

    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }

  add = () => {
    uuid++;
    const { form } = this.props;
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(uuid);
    
    form.setFieldsValue({
      keys: nextKeys,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };

    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => {
      return (
        <FormItem
          {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
          
          required={false}
          key={k}
        >
          {getFieldDecorator(`names-${k}`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: true,
              whitespace: true,
              message: "未填写",
            }],
          })(
            <Input placeholder="打标签" style={{ width: '80px', marginRight: 8, fontSize: '8px' }} />
          )}
          {keys.length > 1 ? (
            <Icon
              className="dynamic-delete-button"
              type="close-circle-o"
              disabled={keys.length === 1}
              onClick={() => this.remove(k)}
            />
          ) : null}
        </FormItem>
      );
    });

    return (
      <Form onSubmit={this.handleSubmit} >
        <FormItem
          {...formItemLayout}
          label="类别名称"
          hasFeedback
        >
          {getFieldDecorator('categoryName', {
            rules: [{
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="类别描述"
          hasFeedback
        >
          {getFieldDecorator('categoryDescribe', {
            rules: [{
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <TextArea rows={4} />
          )}
        </FormItem>
        
        <FormItem 
          {...formItemLayout} 
          label="类别关键字"
        >
          <span className="labelbox">{formItems}</span>
          <Button type="dashed" onClick={this.add} style={{ width: '60px' , display: 'inline-block'}} >
            <Icon type="plus" /> 
          </Button>
        </FormItem>
        {/* <FormItem {...formItemLayoutWithOutLabel}>
          <Button type="primary" htmlType="submit" size="large">Submit</Button>
        </FormItem> */}
      </Form>
    );
  }
}

const LabelBox = Form.create()(DynamicFieldSet);

export default LabelBox;
