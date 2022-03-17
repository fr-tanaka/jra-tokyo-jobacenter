function initial(){

//Pハンバーガー 
 $(function(){
     $('.menu-trigger').on('click', function() {
         $(this).toggleClass('active');
         $("#overlay").fadeToggle();
         return false;
     });
 });


//スムーズスクロール部分の記述
$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $("a[href^='#']").click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
}); 
	
	
// モーダルjs
  function setModal() {
    var tar = document.getElementsByClassName('states01');
    var tri = document.getElementsByClassName('modalbtn');
    var layer = document.getElementsByClassName('layer');
    for(var i = 0, len = tri.length; i < len; i++) {
      (function(i) {
        tri[i].onclick = function() {
          tar[i].style.display = 'block';
          layer[0].style.display = 'block';
          setTimeout(function() {
            tar[i].style.opacity = 1;
            layer[0].style.opacity = 1;
          }, 200);
        }
      })(i);
    }//end for
    layer[0].onclick = function() {
      close_train_modal();
    }

    function close_train_modal() {
      for(var i = 0, len = tri.length;  i < len; i++) {
         (function(i) {
         tar[i].style.opacity = 0;
         layer[0].style.opacity = 0;
         setTimeout(function() {
           tar[i].style.display = 'none';
           layer[0].style.display = 'none';
         }, 200);
       })(i);
      }//end for
    }// close_train_modal

  }//end setModal
  setModal();
  // modal終わり
}
window.addEventListener('load', initial, false );