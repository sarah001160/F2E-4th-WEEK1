$('document').ready(function(){
    $(window).scroll(function(){
        let scrollPos = $(window).scrollTop();//window滑行高度
        let windowHeight = $(window).height();//視窗高度
        
        $('.jqAnimate').each(function(){ //選定的對象
            let thisPos = $(this).offset().top;
            //console.log(thisPos)
            if((scrollPos + windowHeight)>= thisPos){
                $(this).addClass('fadeIn');
            }
        });

       

    });
});









