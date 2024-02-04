$(document) .ready(function(){
    var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });


    //  $('#trigger').click(function(){
    //     //on클래스로 클래스제어 수정해보세요
    //     $('.menu-bar-box').css({
    //         left: 0,
    //         display: 'block'
    //     });
    //     $('html,body').css({
    //         overflow: 'hidden'
    //     });
    //  });

      $(window).scroll(function(){
        //윈도우에 스크롤하면
        //변수를 설정해서 스크롤상단값 저장시키기
        const sct = $(window).scrollTop(); 

        console.log(sct);

        //sct 가 200px 이상일때 .nav-menu,.logo 클래스추가 아닐때는 제거
        if(sct >= 850){
            $('.scroll').addClass('on');
        } else{
            $('.scroll').removeClass('on');
        }
        if(sct >= 1750){
            $('.scroll').addClass('on2');
        } else{
            $('.scroll').removeClass('on2');
        }
        if(sct >= 3400){
            $('.scroll').addClass('on3');
        } else{
            $('.scroll').removeClass('on3');
        }

    
    });
  
// if($(window).width() < 1401){
//     if(sct >= 1300){
//         $('.scroll').addClass('on2');
//     } else{
//         $('.scroll').removeClass('on2');
//     }
//     if(sct >= 3100){
//         $('.scroll').addClass('on3');
//     } else{
//         $('.scroll').removeClass('on3');
//     }
// }


const ww = $(window).width();
if(ww >= 1800){
    window.addEventListener('scroll', function() {
        var container = document.querySelector('.wrap');
        var scrollValue = window.scrollY;
        var sizeValue = 100 + scrollValue * 0.05 + '%'; // 스크롤 값에 따라 크기 조정 (초기 크기에 대한 상대적인 비율)
        container.style.backgroundSize = sizeValue;
    });
    
    
}else{

}
    
if(ww >= 1650){
    $('#trigger').click(function(){
        $('.menu-bar-box').toggleClass('on');
        $('html,body').toggleClass('on');
    });
   

    
    

}else{
    $('#trigger').click(function(){
        $('.menu-bar-box').toggleClass('mediaon');
        $('html,body').toggleClass('on');
    });
    $(window).scroll(function(){
       
        const sct = $(window).scrollTop(); 

        console.log(sct);

        //sct 가 200px 이상일때 .nav-menu,.logo 클래스추가 아닐때는 제거
        if(sct >= 650){
            $('.scroll').addClass('head-color');
        } else{
            $('.scroll').removeClass('head-color');
        }

        if(sct >= 1550){
            $('.scroll').addClass('head-color2');
        } else{
            $('.scroll').removeClass('head-color2');
        }
        if(sct >= 3300){
            $('.scroll').addClass('head-color3');
        } else{
            $('.scroll').removeClass('head-color3');
        } 
            $('.scroll').removeClass('on')  
            $('.scroll').removeClass('on2');   
            $('.scroll').removeClass('on3');
    });
    if(ww >= 1400){
        
        
        
    }else{
        $(window).scroll(function(){
       
            const sct = $(window).scrollTop(); 
    
            console.log(sct);
    
            if(sct >= 700){
                $('.scroll').addClass('head-c');
            } else{
                $('.scroll').removeClass('head-c');
            }
    
            if(sct >= 1650){
                $('.scroll').addClass('head-c2');
            } else{
                $('.scroll').removeClass('head-c2');
            }
            if(sct >= 3350){
                $('.scroll').addClass('head-c3');
            } else{
                $('.scroll').removeClass('head-c3');
            } 
                $('.scroll').removeClass('on')  
                $('.scroll').removeClass('on2');   
                $('.scroll').removeClass('on3');
                $('.scroll').removeClass('head-color');
                $('.scroll').removeClass('head-color2');
                $('.scroll').removeClass('head-color3');
        });
        
        
    }
    
}});
     


