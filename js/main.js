$(document).ready(function(){
    //基本環境變數
    let env = 'prod'

    //設定console.log()顯示環境的function
    function log(e){
        if(env == 'dev'){
            console.log(e)
        }
    }

    function scroll_detect(){
        //計算當擁有(.fade)元素的頂部y軸達到底部時的高度，然後漸層顯示
        $('.fade').each(function(i){
            //計算目前dom元素的底部,
            /*offset().top=>取得y軸偏移量,
            outerHeight()=>取得dom高度(box+padding+border,不含margin)*/
            //計算擁有(.fade)元素要開始顯示的高度(上方偏移量加上一半的元素高度)
            let object_bottom = $(this).offset().top + $(this).outerHeight() / 2
            //計算目前視窗的底部
            //scrollTop()滾動卷軸的位置
            //window_bottom計算卷軸上方的偏移量加上螢幕顯示高度的總和
            let window_bottom = $(window).scrollTop() + $(window).height()
            log('object:' + object_bottom)
            log('window:' + window_bottom)
            if(window_bottom > object_bottom){
                
                $(this).addClass('fade-out')
            }
        })
    }

    //goolgemap啟用
    function initMap() {
        log('map loaded')
        let place = {lat: 0, lng: 0};
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: place
        });
        let marker = new google.maps.Marker({
            position: place,
            map: map
        });
    }

    //初始化啟動
    initMap() 
    scroll_detect()

    //根據卷軸位置給予指定區塊(.fade)漸層浮現效果
    //卷軸滾動時執行function
    $(window).scroll(scroll_detect)

    //顯示區域超過第一區塊就顯示回到最上面的按鈕
    //.scroll()取得卷軸滾動
    $(window).scroll(function(){
        let section01_area = $('.section01').height()
        let window_top = $(window).scrollTop()
        if(window_top > section01_area){
            $('.top-button').attr('class','top-button btn-fade-out')
            log('button on')
        }else if(window_top <= section01_area){
            $('.top-button').attr('class','top-button btn-fade')
            log('button off')
        }
    })

    //點擊右下按鈕回到最上面
    $('.top-button').click(function(){
        $('html,body').animate({scrollTop:0},500)
    })
})