import React from 'react'
import { Spin } from 'antd'

const Loading = () => {
  return (
    <div style={{width: '100%', height: '100%', position: 'relative'}}>
      <div style={{position: 'absolute', top: '80px', left: '315px'}}>
        <Spin tip='驗證中...' size='large'></Spin>
      </div>
    </div>
  )
}

export default Loading
