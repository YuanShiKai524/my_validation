import { createContext, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css'

export const SubmitContext = createContext()

function App() {
  // 管理是否已經提交表單的狀態
  const [isSubmited, setIsSubmited] = useState(false)

  return (
    <div className="app">
      <Header />
      <SubmitContext.Provider value={{isSubmited, setIsSubmited}}>
        <Main />
      </SubmitContext.Provider>
      { isSubmited ? "" : <Footer /> }
    </div>
  );
}

export default App;
