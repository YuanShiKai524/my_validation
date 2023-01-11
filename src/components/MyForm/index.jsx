import React from 'react'
import { Form, Input, Button } from 'antd';

const MyForm = () => {

  const [form] = Form.useForm();

  return (
    <Form form={form} layout='vertical' style={{margin: '20px 150px', marginBottom: '15px'}}>
      <Form.Item label="姓名" tooltip='此欄為必填欄位' name='payer-account' rules={[
        {
          required: true,
          message: '此為必填欄位'
        }
      ]}>
        <Input placeholder='王大明' allowClear />
      </Form.Item>
      <Form.Item label="身份證字號" name='receiver-account' rules={[
        {
          required: true,
          message: '此為必填欄位'
        }
      ]}>
        <Input placeholder='A123456789' allowClear />
      </Form.Item>
      <Form.Item label="職位" name='receiver-name' rules={[
        {
          required: true,
          message: '此為必填欄位'
        }
      ]}>
        <Input placeholder="研發部" allowClear />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType='submit'>下一步</Button>
      </Form.Item>
    </Form>
  )
}

export default MyForm
