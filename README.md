# 切版與RWD練習

網址:https://maxyeh666.github.io/layout01/

參考網路上網站的切版練習，RWD為手動撰寫，不使用如bootstrap等libery
額外使用的開放資源:Fontawesome(小型圖案),Google Font(字型),Google map(Google地圖,排版用,無實際啟用),Unsplash跟Lorem Picsum(皆為免費圖片) 

針對RWD的行動裝置方便觀看請掃描下方QRcode:  
![QRcode](https://github.com/maxyeh666/layout01/blob/master/200718170613.jpg)


## 9/8更新

優化部分排版+改用SCSS重新架構CSS  
***
#### SCSS使用筆記:  
初入門使用vsCode的Live scss compiler來熟悉CSS預處理器實際應用  
***
基礎使用:
  - 基本語法與CSS通用
  - 檔案前方加入"_"的檔案不會編譯  
  - @import時若為scss可不需加上副檔名,css則需要加上
***  
注意要點:
  - 將各個區塊/部件拆開成不同SCSS方便維護與閱讀
  - 在all.scss中import所需要的部分即可整合所有scss,最終整合成一個all.css
  - CSS中的calc中要使用變數需使用#{變數}來包裝使用  
***  
檔案架構:  
  - 基本設定(_base.scss):設定基本格式(ex:border-box,font-size:0...etc)
  - 全頁layout(_header.scss,footer.scss):全部頁面都出現的layout部分
  - 變數(_varibles.scss):用來一次性調整常用的規格
  - 部件(_part.css):是可以在所有區域使用的各種部件
  - 各區塊檔案(_section.scss):各區塊各自的CSS設定
  - 裝置對應query media(_query_media.scss):處理各種裝置的變版  
*** 
SCSS基本應用: 
  1. 巢狀結構  
    CSS結構可以用階層化方式撰寫,不只提升可閱讀性也更容易看出漏洞的部分  
      ex:編譯前
        ```CSS
        h2{  
        font-size: 2rem;  
        font-weight: 900;  
          span {  
              display: block;  
              font-weight: 500;  
             }  
        }
        ```    
      ex:編譯後  
        ```CSS
        h2{  
        font-size: 2.5rem;  
        font-weight: 900;  
        }  
        h2 span{  
          display: block;  
          font-weight: 500;  
        }  
        ```
  2. 變數&取得父選擇器  
    2-1. 變數:  
        前方加上$可以設定常用/大量重複使用的變數  
        ex1:編譯前  
        ```CSS
        $text-l: 1.5rem;

        .text-adjust{
            font-size: $text-l;
        }
        ```
        ex1:編譯後
        ```CSS
        .text-adjust{
            font-size: 1.5rem;
        }
        ```  
      2-2. 取得父選擇器:  
        前方加上&會自動抓取父選擇器,大多應用於偽元素部分  
        ex2:編譯前  
        ```CSS
        .read-more{
            display: block;
            width: 6rem;
            text-align: center;
            font-size: $text-s;
            font-weight: $font-bold-m;
            padding: 0.75rem 0.5rem;
            border-radius: 0.25rem;
            margin-top: 1.25rem;
            transition: $trans-quick;
            &:hover{
                background-color: $white-02;
                color: $green;
                transition: $trans-quick;
            }
        }
        ```  
        ex2:編譯後 
        ```CSS
        .read-more{
            display: block;
            width: 6rem;
            text-align: center;
            font-size: 0.75rem;
            font-weight: 800;
            padding: 0.75rem 0.5rem;
            border-radius: 0.25rem;
            margin-top: 1.25rem;
            transition: 0.5s;
        }
        .read-more:hover{
            background-color: rgb(206, 206, 206);
            color: rgb(6, 179, 179);
            transition: 0.5s;
        }
        ```
  3. 繼承(extend)  
      繼承指定項目的所有樣式,使用@extend來引用  
      若使用%來設定繼承用樣式,則不會進行編譯,僅能引用,可以視作類似變數的功能  
      ex:編譯前  
      ```CSS
      %decoration {
          text-decoration: none;
          color: $dodger-blue;
      }
      
      a{
          @extend%decoration;
          &:visited{
              @extend %decoration;
          }
      }
      ```
      ex:編譯後 
      ```CSS
      a, a:visited {
        text-decoration: none;
        color: dodgerblue;
      }
      ```
***
以上是目前有使用的SCSS的部分,其他部分待有使用後再陸續整理
