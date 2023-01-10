import React, { useState } from 'react'
import { Form, Input, Select, Button, InputNumber } from 'antd';

const { Option } = Select;

const MyForm = () => {

  const [form] = Form.useForm();

  // 保存轉帳金額的狀態
  const [amount, setAmount] = useState(10000)
  // 保存錯誤信息(為了讓轉帳金額輸入欄，不會因為變成受控組件，而導致無法自動進行錯誤驗證，因此自訂一個狀態去管理輸入框內數值是否有不符條件)
  const [errorMsg, setErrorMsg] = useState('')
  // 跟上面的錯誤信息是配套的，此狀態是為了focus時的box-shadow樣式 (antd本身focus時box-shadow樣式為淡藍色，這裡用狀態去管理，使其能像其他錯誤信息一樣顯示淡紅色邊框)
  const [focused, setFocused] = useState(false)

  // 處理onChange事件的函數 (用於時時檢查amount的值，亦即轉帳金額的值)
  const checkAmount = (value) => {
    if (value === null) {
      // 若值為null，則顯示錯誤信息(警告用戶)
      setAmount(value)
      setFocused(true)
      setErrorMsg('此為必填欄位')
    } else {
      // 若為其他，則正常顯示(不顯示紅色警告框)
      setAmount(value)
      setFocused(false)
      setErrorMsg('')
    }
  }

  // 依轉帳金額的值(amount)去判斷是否要更改focus狀態 (用於onFocus / onBlur事件)
  const handleFocus = (flag) => {
    amount === null ? setFocused(flag) : setFocused(false)
  }

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
      <Form.Item label="轉帳金額" 
        required
        style={{marginBottom: 0}}
      >
        <InputNumber
          min={0}
          defaultValue={amount}
          prefix='$'
          formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          style={errorMsg === '' ? {width: '50%'} : {width: '50%', border: '1px solid #ff4d4f'}}
          onChange={checkAmount}
          onFocus={() => {handleFocus(true)}}
          onBlur={() => {handleFocus(false)}}
          className={focused ? 'focused' : ''}
        />
      </Form.Item>
      <h4 style={{color: 'red', margin: 0, height: '30px'}}>{errorMsg}</h4>
      <Form.Item>
        <Button type="primary" htmlType='submit'>下一步</Button>
      </Form.Item>
    </Form>
  )
}

export default MyForm
