import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css'

function App() {
  // 管理是否已經提交表單的狀態
  const [isSubmited, setIsSubmited] = useState(false)

  return (
    <div className="app">
      <Header />
      <Main isSubmited={isSubmited} setIsSubmited={setIsSubmited} />
      { isSubmited ? "" : <Footer /> }
    </div>
  );
}

export default App;
