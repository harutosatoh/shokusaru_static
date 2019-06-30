$(function(){

    $(".map").click(function(){
        $("#footer-modal-wrapper").fadeIn(1500);
    });

        //スクロール時に呼ばれる
        $(window).scroll(function(){
            const top = $(window).scrollTop();    //縦スクロール量を取得
            const left = $(window).scrollLeft();  //横スクロール量を取得

          if(top>=250){
              $(".main-title").fadeIn(1200);
           }

          if(top>=1000){
              $(".main-information").fadeIn(1000);
          }
        });

      $(".close-modal").click(function(){
          $("#footer-modal-wrapper").fadeOut();
      })

});


