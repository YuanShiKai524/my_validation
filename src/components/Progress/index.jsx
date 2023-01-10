import React from 'react'
import { Steps } from 'antd'

const { Step } = Steps

const Progress = () => {
  return (
    <Steps current={0} responsive={false} style={{ maxWidth: '550px', margin: '0 auto', fontWeight: 'bold' }}>
      <Step title="填寫轉帳信息" />
      <Step title="確認轉帳信息" />
      <Step title="完成" />
    </Steps>
  )
}

export default Progress