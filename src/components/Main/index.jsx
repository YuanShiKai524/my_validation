import React, { useState } from 'react'
import { Result } from 'antd'
import Progress from '../Progress';
import MyForm from '../MyForm';
import Loading from '../Loading'
import Displayer from '../Displayer';
import './index.css';

const Main = ({isSubmited, setIsSubmited}) => {

  // 進度條狀態
  const [status, setStatus] = useState(0)
  // 保存表單被提交資訊
  const [data, setData] = useState({})

  // 用於處理表單數據的函數
  const infoHandler = (formData, fetchedData) => {
    const {credentialTemplate: {credentialDefinition: {format}}} = fetchedData // 用多重解構賦值取出資料到format
    // 取得需要的目標對象
    const resultArr = format.filter(obj => obj.user_write === false)
    // 建立一個新的data(object)
    const newData = formData
    // 迭代將上面取得的資料也合併進新的data中，使其合併成一個object
    resultArr.forEach(dataObj => newData[dataObj.key] = dataObj.value)
    // 更新data狀態
    setData(newData)
    // 更新進度條狀態
    setStatus(3)
  }

  return (
    <div className='main'>
      <Progress status={status} />
      {
        status === 3 ?
        <Result
          status="success"
          title="驗證成功!"
          extra={[
            <Displayer data={data} key='displayer' />
          ]}
        /> :
        isSubmited === false ?
        <MyForm infoHandler={infoHandler} setStatus={setStatus} setIsSubmited={setIsSubmited} /> :
        <Loading />
      }
    </div>
  )
}

export default Main;