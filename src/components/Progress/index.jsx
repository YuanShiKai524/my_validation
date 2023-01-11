import React from 'react'
import { Steps } from 'antd'

const { Step } = Steps

const Progress = ({status}) => {
  return (
    <Steps current={status} responsive={false} style={{ maxWidth: '550px', margin: '0 auto', fontWeight: 'bold' }}>
      <Step title="填寫員工信息" />
      <Step title="驗證信息" />
      <Step title="完成" />
    </Steps>
  )
}

export default Progress
