import React, { useContext } from 'react'
import { Form, Input, Button } from 'antd';
import { SubmitContext } from '../../App';
import Loading from '../Loading';

const MyForm = ({ infoHandler, setStatus }) => {

  const [form] = Form.useForm();

  const {isSubmited, setIsSubmited} = useContext(SubmitContext)

  const handleSubmit = async(formData) => {
    // 更改進度條與提交狀態
    setStatus(1)
    setIsSubmited(true)
    // 用fetchAPI獲取資料，並呼叫infoHandler函數
    const result = await fetch("/my_validation/api/data.json")
    const data = await result.json()
    infoHandler(formData, data)
  }

  return (
    <>
      {
        isSubmited ?
        <Loading /> :
        <Form form={form} layout='vertical' style={{margin: '20px 150px', marginBottom: '15px'}} onFinish={handleSubmit}>
          <Form.Item label="姓名" tooltip='前面有星號之欄位為必填選項' name='姓名' rules={[
            {
              required: true,
              message: '此為必填欄位'
            }
          ]}>
            <Input placeholder='王大明' allowClear />
          </Form.Item>
          <Form.Item label="身份證字號" name='身份證字號' rules={[
            {
              required: true,
              message: '此為必填欄位'
            }
          ]}>
            <Input placeholder='A123456789' allowClear />
          </Form.Item>
          <Form.Item label="職位" name='職位' rules={[
            {
              required: true,
              message: '此為必填欄位'
            }
          ]}>
            <Input placeholder="行政助理" allowClear />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType='submit'>送出</Button>
          </Form.Item>
        </Form>
      }
    </>
  )
}

export default MyForm
