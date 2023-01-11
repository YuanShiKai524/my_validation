專案名稱：My validation

網站已部屬至Github pages上，請至下列網址查看：

    https://yuanshikai524.github.io/my_validation

文件結構：

    -- /src  專案根目錄。
        |---index.js   整個專案項目的入口文件。
        |---index.css     全局共用的css樣式或將不需要的antd樣式做修改也在此檔案中。
        |---App.jsx     最外層組件。
        |---App.css     App組件的css樣式。
        |---/components 存放各組件之目錄。
          |---Header.jsx          展示標題部分的組件。
          |---Main.jsx            展示整個應用主要部分。
          |---Progress.jsx        展示進度條的組件。
          |---MyForm.jsx          表單部分的組件。
          |---Loading.jsx         驗證信息時所展示的loading組件。
          |---Displayer.jsx       展示最後資料結果的組件。
          |---Footer.jsx          頁尾(說明)組件。


public目錄下的文件：

    -- /public   存放html或data檔案的目錄。
        |---index.html   整個應用的唯一html檔。
        |---favicon.ico  網站偏愛圖標。
        |
        |---/api         存放api內的資料。
          |---data.json  員工資料。