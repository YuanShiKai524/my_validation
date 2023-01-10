import React from 'react'
import { Form, Input, Select, Button, InputNumber } from 'antd';

const { Option } = Select;

const MyForm = () => {

  const [form] = Form.useForm();

  return (
    <Form form={form} layout='vertical' style={{margin: '20px 150px', marginBottom: '15px'}}>
      <Form.Item label="付款帳戶" tooltip='此欄為必填欄位' name='payer-account' rules={[
        {
          required: true,
          message: '此為必填欄位'
        }
      ]}>
        <Select placeholder='Ant Design Pro'>
          <Option value="antdPro">Ant Design Pro</Option>
        </Select>
      </Form.Item>
      <Form.Item label="收款帳戶" name='receiver-account' rules={[
        {
          required: true,
          message: '此為必填欄位'
        }
      ]}>
        <Input.Group compact>
          <Select style={{width: '25%'}} defaultValue="支付寶">
            <Option value="alipay">支付寶</Option>
          </Select>
          <Input placeholder="請輸入" style={{width: '75%'}} />
        </Input.Group>
      </Form.Item>
      <Form.Item label="收款人姓名" name='receiver-name' rules={[
        {
          required: true,
          message: '此為必填欄位'
        }
      ]}>
        <Input placeholder="請輸入" />
      </Form.Item>
      <Form.Item label="轉帳金額" required>
        <InputNumber
          min={0}
          defaultValue={10000}
          formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
          style={{width: '50%'}}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType='submit'>下一步</Button>
      </Form.Item>
    </Form>
  )
}

export default MyForm
